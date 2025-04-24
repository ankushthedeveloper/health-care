import { FaSearch, FaUserCheck, FaRegCalendarCheck, FaSmile } from "react-icons/fa";

const ApproachSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Our Approach to Smarter Healthcare</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        We simplify the process of getting the care you deserve. Our platform focuses on accessibility, trust, and ease of use to deliver healthcare in a way that suits your lifestyle.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <FaSearch className="text-4xl text-indigo-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Find the Right Doctor</h4>
          <p className="text-gray-600">Search and compare specialists based on expertise, ratings, and availability.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <FaUserCheck className="text-4xl text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Verified Profiles</h4>
          <p className="text-gray-600">Every doctor on our platform is certified and thoroughly verified for quality care.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <FaRegCalendarCheck className="text-4xl text-blue-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Book with Ease</h4>
          <p className="text-gray-600">Schedule appointments with just a few clicks—zero paperwork, full control.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <FaSmile className="text-4xl text-pink-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Feel Confident</h4>
          <p className="text-gray-600">From consultation to care, we ensure a seamless, satisfying experience for you.</p>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;