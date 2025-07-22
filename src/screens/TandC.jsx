import React from 'react';
import { Helmet } from 'react-helmet';

export default function TermsAndPrivacy() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions & Privacy Policy | Elite Homecare Partners</title>
        <meta name="description" content="Read the Terms and Conditions and Privacy Policy for Elite Homecare Partners, outlining data usage, user agreements, and privacy practices." />
      </Helmet>
      <div className="max-w-4xl mx-auto py-12 px-4 text-gray-800">
        <h1 className="text-3xl font-bold text-[#1c4c50] mb-6">Terms and Conditions</h1>
        <p className="mb-4 text-sm">
          <strong>Effective Date:</strong> July 14, 2025
        </p>
        <p className="mb-4">
          By using the Elite Homecare Partners website or submitting a form, you agree to the following:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>You are providing accurate and honest information.</li>
          <li>All uploaded documents (e.g., CVs, IDs) must be authentic and legally obtained.</li>
          <li>Elite Homecare Partners reserves the right to review and validate any submission before acting on it.</li>
          <li>Elite Homecare Partners is not liable for third-party misuse of submitted data if the platform's security is not compromised.</li>
          <li>You agree not to use the site for spam, fraud, or illegal activities.</li>
          <li>Terms may change; users will be notified of any updates.</li>
        </ul>

        <h2 className="text-3xl font-bold text-[#1c4c50] mb-6">Privacy Policy</h2>
        <p className="mb-4 text-sm">
          <strong>Effective Date:</strong> July 14, 2025
        </p>
        <p className="mb-4">
          At Elite Homecare Partners, your privacy matters. Here's how we handle your data:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>We collect personal data solely for the purpose of recruitment and client services.</li>
          <li>Your data is securely stored and never sold to third parties.</li>
          <li>Uploaded documents (like CVs and ID cards) are used for internal vetting only.</li>
          <li>You can request your data be deleted at any time by contacting us.</li>
          <li>We implement standard encryption and security practices to protect your data.</li>
          <li>For questions, contact: <a href="mailto:Elitehomecarepartners@gmail.com" className="text-[#1c4c50] underline">Elitehomecarepartners@gmail.com</a></li>
        </ul>

        <p className="text-sm italic">
          By continuing to use this site, you acknowledge that you have read, understood, and agreed to these terms and our privacy policy.
        </p>
      </div>
    </>
  );
}