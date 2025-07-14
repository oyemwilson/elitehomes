import React from 'react';

export default function TermsAndPrivacy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-gray-800">
      <h1 className="text-3xl font-bold text-[#1c4c50] mb-6">Terms and Conditions</h1>
      <p className="mb-4 text-sm">
        <strong>Effective Date:</strong> July 14, 2025
      </p>
      <p className="mb-4">
        By using the EliteHome website or submitting a form, you agree to the following:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>You are providing accurate and honest information.</li>
        <li>All uploaded documents (e.g., CVs, IDs) must be authentic and legally obtained.</li>
        <li>EliteHome reserves the right to review and validate any submission before acting on it.</li>
        <li>EliteHome is not liable for third-party misuse of submitted data if the platform's security is not compromised.</li>
        <li>You agree not to use the site for spam, fraud, or illegal activities.</li>
        <li>Terms may change; users will be notified of any updates.</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#1c4c50] mb-6">Privacy Policy</h2>
      <p className="mb-4 text-sm">
        <strong>Effective Date:</strong> July 14, 2025
      </p>
      <p className="mb-4">
        At EliteHome, your privacy matters. Here’s how we handle your data:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>We collect personal data solely for the purpose of recruitment and client services.</li>
        <li>Your data is securely stored and never sold to third parties.</li>
        <li>Uploaded documents (like CVs and ID cards) are used for internal vetting only.</li>
        <li>You can request your data be deleted at any time by contacting us.</li>
        <li>We implement standard encryption and security practices to protect your data.</li>
        <li>For questions, contact: <a href="mailto:Elitehomecarepartners@gmail.com" className="text-[#1c4c50] underline">info@elitehomecare.com</a></li>
      </ul>

      <p className="text-sm italic">
        By continuing to use this site, you acknowledge that you have read, understood, and agreed to these terms and our privacy policy.
      </p>
    </div>
  );
}
