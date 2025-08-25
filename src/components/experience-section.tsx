import React from "react";
import ExperienceCard, { ExperienceItem } from "./experience-card";

const experienceData: ExperienceItem[] = [
  {
    avatarUrl: "/wallmantra.png", // Placeholder avatar
    location: "Onsite, India",
    duration: "May 2025 - Aug 2025",
    project: "WallMantra",
    role: "Web Developer Intern",
    description: [
      "Collaborated with the development team to enhance and maintain WallMantra's e-commerce platform, improving site performance and user experience.",
      "Integrated APIs for product listing, filtering, and order management, streamlining the shopping experience.",
      "Worked closely with designers and backend developers to implement new features and fix UI/UX issues.",
      "Contributed to faster page load times and improved SEO through code optimization and best practices.",
    ],
    skills: [
      "Typescript",
      "Nextjs",
      "Shadcn",
      "Postman",
      "PostgreSql",
      "Nodejs",
      "Expressjs",
      "RESTful API",
      "ReactJs",
      "Model Context Protocol",
      "Gemin AI",
    ],
  },
  {
    avatarUrl: "/champaran.jpg", // Placeholder avatar
    location: "Remote, India",
    duration: "Mar 2025 - Present",
    project: "Waah Champaran Achar",
    role: "Freelance",
    description: [
      "Designed and developed a modern, responsive e-commerce website for a traditional Champaran pickle brand, enabling online product showcase and customer engagement.",
      "Built product pages, a professional footer, and integrated brand identity with a custom “Waah” logo for a strong visual presence.",
      "Implemented the frontend using React.js and Tailwind CSS, ensuring a clean, mobile-friendly user experience.",
      "Optimized the site for performance and SEO, helping the brand improve digital reach and visibility.",
      "Collaborated with the client to align design, branding, and functionality with their business vision.",
    ],
    skills: [
      "Javascript",
      "Reactjs",
      "Postman",
      "MongoDB",
      "Nodejs",
      "Expressjs",
      "RESTful API",
    ],
  },
  {
    avatarUrl: "/acm.png", // Placeholder avatar
    location: "Onsite, India",
    duration: "Aug 2024 - Present",
    project: "ACM Student Chapter, KCCITM Greater Noida",
    role: "Chair",
    description: [
      "Spearheaded the revival and leadership of the ACM student chapter, fostering a strong technical community within the college.",
      "Organized and led technical workshops, coding contests, and hackathons, increasing student participation in competitive programming and real-world project building.",
      "Collaborated with faculty mentors and industry professionals to bring expert talks and mentorship sessions for students.",
    ],
    skills: ["Leadership", "Communication", "Team work", "Event management"],
  },
];

const ExperienceSection = () => {
  return (
    <div className="min-h-screen bg-neutral-800 flex justify-center p-3">
      <div className="flex flex-col gap-10 mt-10 md:max-w-4xl">
        <h1 className="text-green-600 text-3xl md:text-4xl font-bold mb-10">
          Work Experience
        </h1>
        <ExperienceCard item={experienceData[0]} />
        <ExperienceCard item={experienceData[1]} />
        <ExperienceCard item={experienceData[2]} />
      </div>
    </div>
  );
};

export default ExperienceSection;
