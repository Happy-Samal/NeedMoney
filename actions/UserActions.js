"use server"
import ConnectDB from "@/db/ConnectDB"
import User from "@/models/User"
import Payment from "@/models/Payment"
import Razorpay from "razorpay"

export const fetchUser = async (username) => {
    await ConnectDB()
    let data = await User.findOne({ username: username })
    if (data) {
        let u = data.toObject({ flattenObjectIds: true })
        return u
    } else {
        return {}
    }
}
export const fetchPayment = async (email) => {
    await ConnectDB()
    let data = await Payment.find({ done:true , email:email })
    if (data) {
        let p = data.map((itm) => {
            return itm.toObject({ flattenObjectIds: true })
        })
        return p
    }
    return []
}

export const updateUser = async (email, data) => {
    await ConnectDB()
    let ExistUser = await User.findOne({ email: email })
    let objData = Object.fromEntries(data);

    if (objData.username === ExistUser.username) {
        await User.updateOne({ email: email }, objData)
        return "Username already Exist!"
    } else {
        let originalString = objData.username;

        // Replace any non-alphanumeric character except hyphens with underscores
        let replacedString = originalString.replace(/[^\w-]/g, '_');

        // Convert to lowercase
        let finalString = replacedString.toLowerCase();

        // Update objData.username to finalString
        objData.username = finalString;

        await User.updateOne({ email: email }, objData)
        return "🦄 Saved Successfully!"
    }
}
export const deleteUser = async (email) => {
    await ConnectDB()
    let userData = await User.findOne({ email: email })
    await User.deleteOne(userData)
    await Payment.deleteMany({email:email})
}

export const submitPayment = async (data, username) => {
    await ConnectDB();

    // Fetch the user's Razorpay credentials
    const user = await User.findOne({ username });
    if (!user || !user.rzy_id || !user.rzy_secret) {
        throw new Error("Razorpay credentials are not set for this user.");
    }

    // Create an instance of Razorpay with the user's credentials
    const instance = new Razorpay({ key_id: user.rzy_id, key_secret: user.rzy_secret });
    let options = {
        amount: Number(data.amount) * 100,
        currency: "INR",
    };
    let x = await instance.orders.create(options);
    data.to_user = username;
    data.oid = x.id;
    await Payment.create(data);
    return x;
};