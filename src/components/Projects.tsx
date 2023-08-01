import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Food Gredient",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/foodgredient.webp",
    tags: ["React", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 1,
    title: "Food Gredient",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/foodgredient.webp",
    tags: ["React", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 2,
    title: "Food Gredient",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/foodgredient.webp",
    tags: ["React", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 3,
    title: "Food Gredient",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/foodgredient.webp",
    tags: ["React", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 4,
    title: "Food Gredient",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/foodgredient.webp",
    tags: ["React", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 5,
    title: "Food Gredient",
    desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/foodgredient.webp",
    tags: ["React", "Node", "RESTful API", "SCSS"],
  },
];

const Projects = () => {
  return (
    <div className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
