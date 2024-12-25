import React from 'react';

export default function TimelineCard({
  title,
  period,
  company,
  description,
  rating,
  skills,
}) {
  return (
    <div className="card  w-full bg-gradient-to-r from-[#6d96fc1c] to-[#6d96fc00] border-4 border-[#6d95fc] rounded-lg p-6 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-xl text-white tiny">{title}</h3>
        <span className="text-[#6D95FC] text-sm ">{period}</span>
      </div>
      {company && <p className="text-white font-medium  ">{company}</p>}
      {rating && (
        <div className="flex items-center gap-2">
          <span className="text-white text-lg ">{rating.score}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#6D95FC]">★</span>
            ))}
          </div>
          <span className="text-[#6D95FC] text-sm">({rating.reviews} reviews)</span>
        </div>
      )}
      <p className="text-white/80 ">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3  py-1 bg-[#6d96fc1c] rounded-full text-[#6D95FC] text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
