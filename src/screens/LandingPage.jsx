import React, { useState } from "react";

import ImageSlider from "../components/ImageSlider";
import RegisterCards from "../components/RegisterCards";




const LandingPage = () => {
    const [, setRole] = useState("Candidate");
  return (
    <div>
      <div  data-aos="fade-up">
        <ImageSlider />
      </div>
      <div data-aos="fade-down">
           <RegisterCards setRole={setRole} />
      </div>

      <div>
        <section class=" bg-white" data-aos="fade-up">


          <div class="bg-gray-50 border border-gray-200 shadow-md  max-w-7xl mx-auto px-6 py-10 text-black space-y-8 text-base sm:text-lg leading-relaxed">
            <h2 class="text-center text-[#1c4c50] text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
              Elite Homecare Partners
            </h2>
            <p>
              <strong className="text-[#1c4c50]">Elite Homecare Partners</strong> is a distinguished and trusted domestic staffing agency dedicated to delivering
              exceptional home care services with a personal touch. We specialize in the seamless placement of highly qualified
              professionals, including nurturing nannies, early childhood tutors (governesses), compassionate elderly and special
              needs caregivers, detail-oriented housekeepers, and skilled home managers. Our carefully vetted team is committed to
              upholding the highest standards of integrity, discretion, and excellence within private homes.
            </p>

            <p>
              Our journey was inspired by a sincere commitment to support families in today’s fast-paced world especially busy parents,
              career-driven professionals, and elderly individuals by connecting them with capable, reliable, and empathetic domestic
              staff. We recognized early on that finding trustworthy help within the home can be overwhelming, so we created a service that
              removes the guesswork and replaces it with trust, transparency, and personalized care.
            </p>

            <p>
              With a deep understanding of the unique dynamics of each household, we go beyond resumes to match personalities, values,
              and lifestyles. Our hands-on approach ensures that each placement meets the practical needs of the home, while also
              fostering long-term harmony between staff and the families they serve.
            </p>

            <p>
              We proudly serve a diverse clientele — from growing families to high-net-worth individuals across Abuja, Lagos, and beyond.
              Our tailored solutions are built on trust, discretion, and a deep respect for the sanctity of your home. Whether you’re seeking
              a live-in nanny, a weekend governess, a specialized caregiver for an aging loved one, or professional housekeeping support,
              we are here to help you find the perfect match.
            </p>

            <p>
              At Elite Homecare Partners, we are not just filling roles we are building relationships that enrich the lives of both our clients
              and our candidates. Our commitment is to excellence, compassion, and the peace of mind that comes with knowing your home is in
              caring, capable hands.
            </p>

          </div>
        </section>
        <div className="max-w-7xl mx-auto bg-gray-50 border border-gray-200 shadow-md  px-6 py-8 text-black space-y-4 text-center mb-5">
          <div className="w-[75%] md:w-[60%]  mx-auto">
            <p className="md:text-2xl text-xl italic leading-relaxed">
              <span className="text-3xl">“</span>Simply the best <strong className="text-[#1c4c50]">nanny </strong>agency in <strong className="text-[#1c4c50]">Abuja</strong>!! Super fast and friendly service, stress free and enjoyable.
              I will 100% recommend you ladies! Thank you for all your hard work.<span className="text-3xl">“</span>
            </p>
            <div className="text-right md:text-xl text-lg  mt-2">
              <p className="font-semibold">— Nnena Chris., <span className="text-gray-500 font-normal">Maitama</span></p>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default LandingPage;
