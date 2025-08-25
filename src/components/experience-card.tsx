"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export interface ExperienceItem {
  avatarUrl: string;
  location: string;
  duration: string;
  project: string;
  role: string;
  description: string[];
  skills: string[];
}

interface ExperienceCardProps {
  item: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-3xl mx-auto bg-neutral-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-gray-600 transition duration-300"
    >
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={item.avatarUrl}
          alt="avatar"
          width={60}
          height={60}
          className="rounded-full object-cover border border-gray-700"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">{item.project}</h3>
          <p className="text-sm text-gray-400">{item.role}</p>
          <p className="text-xs text-gray-500">
            {item.location} • {item.duration}
          </p>
        </div>
      </div>

      {/* Description */}
      <ul className="list-disc list-inside space-y-2 mb-4">
        {item.description.map((point, index) => (
          <li key={index} className="text-gray-300 text-sm leading-relaxed">
            {point}
          </li>
        ))}
      </ul>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {item.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
