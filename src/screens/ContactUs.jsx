import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const location = useLocation();
  const [localRole, setLocalRole] = useState(location.state?.role || 'Candidate');
  const role = localRole;
  const setRole = setLocalRole;



  const [state, handleSubmit] = useForm('mldnqyqb');

  if (state.succeeded) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-green-600 font-semibold mb-2">Thank you!</h2>
        <p>Your message has been successfully sent.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
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
        className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-md space-y-6 min-h-[550px]"
      >
        <input type="hidden" name="role" value={role} />

        {/* Common Fields */}
        <div>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        {/* Role-Specific Fields */}
        {role === 'Candidate' ? (
          <>
            <div>
              <input
                type="text"
                name="position"
                placeholder="Position Interested In (e.g., Nanny, Housekeeper)"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              />
              <ValidationError prefix="Position" field="position" errors={state.errors} />
            </div>

            <div>
              <textarea
                name="experience"
                rows="4"
                placeholder="Briefly describe your experience"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              />
              <ValidationError prefix="Experience" field="experience" errors={state.errors} />
            </div>
          </>
        ) : (
          <>
            <div>
              <input
                type="text"
                name="helpType"
                placeholder="Type of Help Needed (e.g., Live-in Nanny, Housekeeper)"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              />
              <ValidationError prefix="Help Type" field="helpType" errors={state.errors} />
            </div>

            <div>
              <input
                type="date"
                name="startDate"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              />
              <ValidationError prefix="Start Date" field="startDate" errors={state.errors} />
            </div>

            <div>
              <textarea
                name="notes"
                rows="4"
                placeholder="Additional notes or requirements"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c4c50]"
              />
              <ValidationError prefix="Notes" field="notes" errors={state.errors} />
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-[#1c4c50] text-white py-2 rounded hover:bg-[#155154] transition"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
