import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ContactForm() {
  const location = useLocation();
  const [localRole, setLocalRole] = useState(location.state?.role || 'Candidate');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const role = localRole;
  const setRole = setLocalRole;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://www.formbackend.com/f/14f08e5e1d897464', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        console.error('Form submission failed with status:', response.status);
        // Optionally, add error handling UI here
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, add error handling UI here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      {showSuccess && (
        <div className="text-center bg-green-100 text-green-800 p-4 rounded mb-6 border border-green-300">
          <h2 className="text-xl font-semibold mb-1">Thank you!</h2>
          <p>Your message has been successfully sent.</p>
        </div>
      )}

      {/* Role Toggle */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          type="button"
          onClick={() => setRole('Candidate')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            role === 'Candidate' ? 'bg-[#1c4c50] text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          For Staff Candidates
        </button>
        <button
          type="button"
          onClick={() => setRole('Client')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            role === 'Client' ? 'bg-[#1c4c50] text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          For Clients / Parents
        </button>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-md space-y-6"
      >
        <input type="hidden" name="role" value={role} />

        {role === 'Candidate' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="First Name" required className="input" />
              <input name="surname" type="text" placeholder="Surname" required className="input" />
              <input name="stateOfOrigin" type="text" placeholder="State of Origin" required className="input" />
              <input name="stateOfResidence" type="text" placeholder="State of Residence" required className="input" />
              <input name="email" type="email" placeholder="Email Address" required className="input" />
              <input name="phone" type="tel" placeholder="Phone Number" required className="input" />
              <div>
                <label htmlFor="dob" className="block mb-1 font-medium text-sm text-gray-700">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
                  placeholder="YYYY-MM-DD"
                />
              </div>
              <input name="address" type="text" placeholder="Residential Address" required className="input" />
            </div>

            <div>
              <p className="mb-2 font-medium text-sm">Qualifications (select all that apply):</p>
              <label className="block mb-1">
                <input type="checkbox" name="qualification" value="Diploma" className="mr-2" /> Diploma
              </label>
              <label className="block mb-1">
                <input type="checkbox" name="qualification" value="BSC" className="mr-2" /> BSC
              </label>
              <label className="block">
                <input type="checkbox" name="qualification" value="Professional Certificate" className="mr-2" /> Professional Certificate
              </label>
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">Upload CV (PDF/DOC)</label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-2 border rounded file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#1c4c50] file:text-white file:rounded"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">Upload ID Card (Image or PDF)</label>
              <input
                type="file"
                name="idCard"
                accept=".jpg,.jpeg,.png,.pdf"
                required
                className="w-full px-4 py-2 border rounded file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#1c4c50] file:text-white file:rounded"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              />
            </div>
            <div>
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              />
            </div>
            <div>
              <select
                name="helpType"
                required
                className="w-full px-4 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              >
                <option value="">Select Type of Help Needed</option>
                <option value="Live-in Nanny">Live-in Nanny</option>
                <option value="Live-out Nanny">Live-out Nanny</option>
                <option value="Housekeeper">Housekeeper</option>
                <option value="Governess">Governess</option>
                <option value="Maternity Nurse">Maternity Nurse</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <textarea
                name="notes"
                rows="4"
                placeholder="Additional notes or requirements"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              />
            </div>
          </>
        )}

<div className="space-y-2">
<label className="flex items-start space-x-2">
  <input
    type="checkbox"
    name="terms"
    required
    className="h-4 w-4 mt-1 text-[#1c4c50] border-gray-300 rounded focus:ring-[#1c4c50]"
  />
  <span className="text-sm text-gray-700">
    I have read and agree to the{' '}
    <Link
      to="/terms-and-condition"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#1c4c50] hover:underline"
    >
      Terms and Conditions and Privacy Policy
    </Link>.
  </span>
</label>
</div>


        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1c4c50] text-white py-2 rounded hover:bg-[#155154] transition disabled:bg-gray-400"
        >
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;