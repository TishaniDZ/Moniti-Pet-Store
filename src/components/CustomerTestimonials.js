import React from 'react';

const CustomerTestimonials = ({ testimonials }) => {
  return (
    <section className="testimonials-section py-10">
      <h2 className="text-2xl font-bold mb-5">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial bg-white p-5 shadow-lg rounded">
            <p className="text-lg">{testimonial.message}</p>
            <p className="text-md font-bold mt-3">- {testimonial.customer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
