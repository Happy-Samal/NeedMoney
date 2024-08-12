import Razorpay from "razorpay";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { NextResponse } from "next/server";
import ConnectDB from "@/db/ConnectDB";
import Payment from "@/models/Payment";
import User from "@/models/User";

export const POST = async (req) => {
    await ConnectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    // Check if the Razorpay order ID is present or not
    let payment = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!payment) {
        return NextResponse.error("Order ID is not found");
    }

    // Fetch the user's Razorpay credentials
    const user = await User.findOne({ username: payment.to_user });
    if (!user || !user.rzy_secret) {
        return NextResponse.error("Razorpay credentials are not set for this user.");
    }

    // Verify the payment using the user's Razorpay secret
    let isValid = validatePaymentVerification(
        { order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id },
        body.razorpay_signature,
        user.rzy_secret
    );

    if (isValid) {
        // Update payment status
        let updatePayment = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: true },
            { new: true }
        );
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/user/${updatePayment.to_user}`);
    } else {
        return NextResponse.error("Payment verification failed");
    }
};
