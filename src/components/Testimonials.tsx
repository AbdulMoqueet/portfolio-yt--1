import React from "react";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    companyName: "Webflow",
    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."`,
    img: "/user-1.png",
    name: "Elliot John",
    designation: "Marketing Executive",
  },
  {
    companyName: "Facebook",
    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."`,
    img: "/user-2.png",
    name: "John Adam",
    designation: "Senior Engineering Manager",
  },
  {
    companyName: "Google",
    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
    img: "/user-3.png",
    name: "Adam Smith",
    designation: "Engineering Manager",
  },
];

const Testimonials = () => {
  return (
    <div className="container pt-32">
      <Heading title="Testimonials" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialData.map((item, index) => (
          <TestimonialCard
            key={index}
            companyName={item.companyName}
            desc={item.desc}
            img={item.img}
            name={item.name}
            designation={item.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
