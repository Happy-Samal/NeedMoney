import React from 'react'

function TermsCondition() {
  return (
   <>
   <div className="text-white relative">
  <div className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Terms &amp; Conditions</h1>
      <p className="text-gray-300 mb-6">
        <strong>Effective Date:</strong> {new Date().getFullYear()}
      </p>
      <p className="text-gray-300 mb-6">
        Welcome to Need Money. By using our website, you agree to comply with and be bound by the following terms and conditions:
      </p>
      <h2 className="text-xl font-bold mb-4">User Responsibilities:</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Provide accurate and complete information during registration.</li>
        <li>Use the platform in accordance with all applicable laws and regulations.</li>
      </ul>
      <h2 className="text-xl font-bold mb-4">Prohibited Activities:</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Fraudulent activities or impersonation.</li>
        <li>Posting harmful or illegal content.</li>
      </ul>
      <p className="text-gray-300 mb-6">
        <strong>Intellectual Property:</strong> All content on this site is the property of Need Money or its content suppliers and protected by intellectual property laws.
      </p>
      <p className="text-gray-300 mb-6">
        <strong>Disclaimer:</strong> We do not guarantee the success of any crowdfunding campaign. Contributions are made at your own risk.
      </p>
      <p className="text-gray-300 mb-6">
        <strong>Changes to Terms:</strong> We may update these terms from time to time. Continued use of the site constitutes acceptance of the revised terms.
      </p>
      <p className="text-gray-300">
        For more details, please read our full{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms &amp; Conditions
        </a>
        .
      </p>
      <div
        className="absolute top-0 left-0 z-0 h-1/3 w-full"
        style={{
          backgroundImage:
            "linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
          borderColor: "rgba(92, 79, 240, 0.2)",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 z-0 h-1/3 w-full"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
          borderColor: "rgba(92, 79, 240, 0.2)",
        }}
      ></div>
    </div>
  </div>
</div>

   </>
  )
}

export default TermsCondition

export const metadata = {
  title: "Need Money - Terms & Condition",
  description: "Need Money app provide a platform where your friends and followers helps you.",
};
