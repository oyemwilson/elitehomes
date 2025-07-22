import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Baby,
  UserCheck,
  Home,
  Stethoscope,
  BookUser,
  Sparkles,
} from 'lucide-react';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Elite Homecare Partners</title>
        <meta name="description" content="Explore the comprehensive homecare services offered by Elite Homecare Partners, including nannies, governesses, maternity nurses, elderly caregivers, housekeepers, and home managers." />
      </Helmet>
      <div className="bg-white text-gray-800 mt-10">
      {/* Hero Section */}
      <section className="bg-[#f0f6f6] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1c4c50] mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We provide experienced, compassionate, and professional homecare staff for families, executives, and private households.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {/* Nannies */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Baby className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Nannies</h3>
          <p className="text-gray-600">
            Trustworthy childcare professionals to care for your little ones with love, patience, and expertise.
          </p>
        </div>

        {/* Governesses */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <BookUser className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Governesses</h3>
          <p className="text-gray-600">
            Early childhood tutors who provide structured education, manners training, and holistic development.
          </p>
        </div>

        {/* Maternity Nurses */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Stethoscope className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Maternity Nurses</h3>
          <p className="text-gray-600">
            Skilled newborn care specialists to support mothers through postpartum and baby’s early weeks.
          </p>
        </div>

        {/* Elderly Caregivers */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <UserCheck className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Elderly Caregivers</h3>
          <p className="text-gray-600">
            Compassionate support for elderly or special needs individuals with dignity, respect, and comfort.
          </p>
        </div>

        {/* Housekeepers */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Home className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Housekeepers</h3>
          <p className="text-gray-600">
            Professional and detail-oriented staff to manage daily cleaning, laundry, and household upkeep.
          </p>
        </div>

        {/* Home Managers */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Sparkles className="w-10 h-10 mx-auto text-[#1c4c50] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Home Managers</h3>
          <p className="text-gray-600">
            Experienced professionals to oversee home operations, schedules, staff coordination, and more.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;