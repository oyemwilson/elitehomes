import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Elite Homecare Partners</title>
        <meta name="description" content="Learn more about Elite Homecare Partners, a distinguished domestic staffing agency providing trusted and experienced care professionals for families." />
      </Helmet>
      <div className="bg-white text-gray-800 mt-10">
      {/* Hero Section */}
      <section className="bg-[#f0f6f6] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1c4c50] mb-4">
            About Elite Homecare Partners
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Providing excellence in home staffing for families who value trust, care, and professionalism.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-14">
        {/* Who We Are */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1c4c50] mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Elite Homecare Partners is a distinguished domestic staffing agency committed to helping families find
            trusted and experienced care professionals. With an unwavering focus on quality and discretion, we specialize
            in placing qualified nannies, governesses, maternity nurses, elderly caregivers, housekeepers, and home managers.
          </p>
        </div>

        {/* Our Mission */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1c4c50] mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Our mission is to bring peace of mind to families and households by connecting them with compassionate,
            capable, and trustworthy domestic professionals. We understand the stress of juggling family and work life,
            and we're here to lighten that burden by placing the right people in the right homes.
          </p>
        </div>

        {/* What We Offer */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1c4c50] mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
            <li>Professional nannies and governesses for early childhood education and care</li>
            <li>Specialized maternity nurses and newborn care experts</li>
            <li>Trained and vetted housekeepers and home managers</li>
            <li>Elderly and special needs caregiving with compassion</li>
            <li>Personalized matching services tailored to your family's needs</li>
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1c4c50] mb-4">Where We Serve</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            We proudly serve high-profile families, professionals, and private households across Abuja.
            Whether you're in need of full-time help, live-in staff, or part-time support, we tailor each placement with
            discretion, attention to detail, and care.
          </p>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="text-gray-800 py-12 px-4 text-center mb-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl italic mb-4">
            “Simply the best nanny agency! Super fast, friendly service. I will 100% recommend you ladies!”
          </p>
          <p className="text-sm text-gray-800">— Ella V.H., Istanbul</p>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
