


import React from 'react'
import { Link } from "react-router-dom";
import { services } from "../data/services"; // path may vary depending on your folder structure


const Services = () => {
  return (
    
    <div className="mt-6  grid md:grid-cols-2 gap-6">
  {services.map((card) => {
    const Icon = card.icon;
    return (
      <Link
        key={card.slug}
        to={`/services/${card.slug}`}
        className="rounded-xl bg-white p-6 shadow-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition group"
      >
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-[#fdb81e] text-[#1a4480] grid place-items-center">
            <Icon className="text-lg" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#1a4480] group-hover:underline">
            {card.title}
          </h4>
          <p className="mt-1 text-sm text-slate-600">{card.summary}</p>
        </div>
      </Link>
    );
  })}
</div>

  )
}

export default Services



