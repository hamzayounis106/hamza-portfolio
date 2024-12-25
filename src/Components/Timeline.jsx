import React from 'react';
import TimelineCard from './TimelineCard';


const experiences = [
  {
    title: "MERN Developer",
    period: "2024 - Present",
    company: "Codesthinker",
    description: "Full-stack development projects with MERN technologies",
    skills: ["React", "Node.js", "MongoDB", "Express.js"]
  },
  
  {
    title: "Freelancer",
    period: "2022 - Present",
    description: "Successfully completed 390 projects with excellent client satisfaction",
    rating: {
      score: 5.0,
      reviews: 239
    },
    skills: ["MERN Stack",  "WordPress", "Shopify", "MJML"]
  }
];

export default function Timeline() {
  return (
    <div className="timeline-container w-full ">
      {experiences.map((exp, index) => (
        <div 
          key={index} 
          className={`timeline-branch ${
            index === 0 ? 'timeline-start' : 
            index === experiences.length - 1 ? 'timeline-end' : 
            'timeline-middle'
          }`}
        >
          <TimelineCard {...exp} />
        </div>
      ))}
    </div>
  );
}