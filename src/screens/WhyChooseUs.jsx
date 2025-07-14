import React from 'react';
import { ShieldCheck, Users, HeartHandshake, Clock3, Star } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="bg-white text-gray-800 mt-10">
      {/* Hero Section */}
      <section className="bg-[#f0f6f6] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1c4c50] mb-4">
            Why Choose Elite Homecare Partners
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            More than a staffing agency — we’re your trusted partner in finding the right care for your home and family.
          </p>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {/* Card 1 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <ShieldCheck className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Thoroughly Vetted Professionals</h3>
          <p className="text-gray-600">
            Every nanny, housekeeper, and caregiver is background-checked, reference-verified, and personally interviewed.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Users className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personalized Family Matching</h3>
          <p className="text-gray-600">
            We take time to understand your unique needs and values, ensuring the perfect fit for your household.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <HeartHandshake className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Compassion & Integrity</h3>
          <p className="text-gray-600">
            Our team operates with heart and honesty, providing caring professionals you can trust in your home.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Clock3 className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Efficient Placements</h3>
          <p className="text-gray-600">
            Need help fast? Our system and team are designed to connect you with top candidates quickly and confidently.
          </p>
        </div>

        {/* Card 5 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Star className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Exceptional Standards</h3>
          <p className="text-gray-600">
            We serve high-profile families and professionals who expect discretion, excellence, and long-term success.
          </p>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className=" text-gray-800 py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl italic mb-4 relative">
            “Elite Homecare made my life easier — they connected us with a wonderful nanny who’s now like family.”
          </p>
          <p className="text-sm text-gray-800">— Ijeoma A., Lagos</p>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
