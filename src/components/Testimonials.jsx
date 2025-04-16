import React from "react";

const testimonials = [
  {
    name: "Anjali Verma",
    city: "Pune, Maharashtra",
    message:
      "QuickMed made it super easy to book my appointment. The doctor was amazing, and the entire process was hassle-free!",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Rahul Sharma",
    city: "Delhi",
    message:
      "I was surprised how quickly I got an appointment. The platform is user-friendly and highly recommended.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Desai",
    city: "Mumbai",
    message:
      "I consulted a gynecologist online via QuickMed and it was a great experience. Thank you for making healthcare easy!",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Rakesh Kumar",
    city: "Bangalore",
    message:
      "QuickMed is a game changer! No waiting in lines. Just book and consult. The doctors are top-notch.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Sneha Joshi",
    city: "Chandigarh",
    message:
      "Their service during emergency was truly impressive. Thank you QuickMed for being there when needed most!",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    name: "Drishti Mehra",
    city: "Hyderabad",
    message:
      "Absolutely love the interface and ease of use. I found a specialist and booked an appointment in less than 2 minutes!",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  }
];

const Testimonials = () => {
  return (
    <div className="bg-[#d2e2d5] py-16 px-6 md:px-20 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        What Our Patients Say
      </h2>

      <div className="overflow-x-auto md:overflow-visible">
        <div className="flex space-x-8 md:grid md:grid-cols-2 md:gap-8 md:space-x-0 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center min-w-[240px] max-w-[320px] md:max-w-none"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 text-sm italic mb-4">
                “{t.message}”
              </p>
              <h4 className="text-primary font-semibold">{t.name}</h4>
              <span className="text-gray-400 text-sm">{t.city}</span>
            </div>
          ))}
        </div>
      </div>
    </ div>
  );
};

export default Testimonials;
