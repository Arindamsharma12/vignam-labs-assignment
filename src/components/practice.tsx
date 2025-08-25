"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ArrowRight,
  Star,
  Zap,
  Sun,
  Moon,
} from "lucide-react";
import SceneWrapper from "./scene-wrapper";
import Link from "next/link";

// Type definitions
interface VisibilityState {
  [key: string]: boolean;
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  href: string;
  features: string[];
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

// interface SocialLink {
//   icon: React.ComponentType<{ size?: number; className?: string }>;
//   href: string;
//   label: string;
// }

interface SkillCategory {
  [category: string]: string[];
}

const Portfolio: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  console.log(activeSection);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = (): void => setIsDark(!isDark);

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const themeClasses: string = isDark
    ? "bg-gray-900 text-white"
    : "bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900";

  const cardClasses: string = isDark
    ? "bg-gray-800/50 border-gray-700/50"
    : "bg-white/70 border-white/20";

  const projects: Project[] = [
    {
      name: "Nebula",
      description:
        "Full-stack project management platform with workspaces, Kanban boards, and MCP automation",
      tech: ["Next.js", "Hono.js", "Appwrite", "TypeScript"],
      href: "https://nebula-x-two.vercel.app/",
      features: [
        "Kanban Views",
        "Calendar Integration",
        "Role-based Access",
        "Gantt Charts",
      ],
    },
    {
      name: "Chatty",
      description:
        "Real-time chat application with socket-based communication and user authentication",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      href: "-time-chat-app-1-qdji.onrender.com",
      features: [
        "Live Messaging",
        "User Auth",
        "Real-time Updates",
        "Cloud Storage",
      ],
    },
    {
      name: "Georilla",
      description:
        "Geolocation-based attendance system with face recognition and anti-spoofing",
      tech: ["React", "Express.js", "OpenCV", "Google Maps API"],
      href: "https://georilla-vert.vercel.app",
      features: [
        "Geofencing",
        "Face Recognition",
        "Location Verification",
        "Anti-spoofing",
      ],
    },
  ];

  const experience: Experience[] = [
    {
      title: "Web Development Intern",
      company: "WallMantra",
      location: "Delhi, IN",
      period: "May 2025 – Aug 2025",
      points: [
        "Developing E-commerce website using Next.js, Nest.js, Shadcn UI",
        "Ensuring SEO optimization and responsive design",
        "Integrating backend APIs for seamless user experience",
      ],
    },
    {
      title: "Freelance Fullstack Developer",
      company: "Waah Champaran Achar",
      location: "Remote",
      period: "April 2025 – May 2025",
      points: [
        "Built responsive e-commerce website for traditional Bihari pickles",
        "Implemented cart functionality and product listings",
        "Optimized for performance and SEO",
      ],
    },
  ];

  const skills: SkillCategory = {
    Languages: ["C++", "JavaScript", "TypeScript", "Java", "Python"],
    Frontend: ["React.js", "Next.js", "TailwindCSS", "Shadcn UI"],
    Backend: ["Node.js", "Express.js", "Nest.js", "Socket.io"],
    Database: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
    Tools: ["Git", "Docker", "AWS", "Linux", "Postman"],
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${themeClasses}`}>
      <button
        onClick={toggleTheme}
        className={`p-3 fixed z-50 bottom-15 right-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
        } shadow-lg`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      {/* Navigation */}
      {/* <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${
          isDark
            ? "bg-gray-900/80 border-gray-800"
            : "bg-white/80 border-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Arindam
            </div>

            <div className="hidden md:flex space-x-8">
              {["hero", "about", "experience", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 hover:scale-105 ${
                      activeSection === section
                        ? "text-blue-600 font-semibold"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen items-center justify-center relative"
      >
        <SceneWrapper />
        {/* <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible.hero
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Arindam
              </span>
              <br />
              <span className={`${isDark ? "text-white" : "text-gray-900"}`}>
                Sharma
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer crafting digital experiences with modern
              technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${cardClasses} backdrop-blur-sm border`}
            >
              <MapPin size={16} className="text-blue-600" />
              <span className="text-sm font-medium">Delhi, India</span>
            </div>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${cardClasses} backdrop-blur-sm border`}
            >
              <GraduationCap size={16} className="text-green-600" />
              <span className="text-sm font-medium">8.7 GPA</span>
            </div>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${cardClasses} backdrop-blur-sm border`}
            >
              <Award size={16} className="text-yellow-600" />
              <span className="text-sm font-medium">₹50K Award Winner</span>
            </div>
          </div>

          

          </div> */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-30 left-1/2 bg-blue-300 rounded-full p-2 opacity-45"
        >
          <ChevronDown size={24} className="text-blue-600" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-6 mb-12">
            {[
              {
                icon: Mail,
                href: "mailto:techyarindam@gmail.com",
                label: "Email",
              },
              { icon: Phone, href: "tel:+919354685531", label: "Phone" },
              {
                icon: Github,
                href: "https://github.com/Arindamsharma12",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "kedin.com/in/arindam-sharma30/",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={`p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } shadow-lg hover:shadow-xl`}
                aria-label={label}
              >
                <Icon size={24} className="text-blue-600" />
              </a>
            ))}
          </div>
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.about
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`p-8 rounded-2xl ${cardClasses} backdrop-blur-sm border shadow-xl`}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap className="text-blue-600" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">
                      B.Tech Computer Science & Engineering
                    </h4>
                    <p className="text-sm opacity-75">
                      KCC Institute of Technology and Management
                    </p>
                    <p className="text-sm opacity-75">Sept 2022 – Sept 2026</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="text-yellow-500" size={16} />
                      <span className="text-sm font-medium">
                        GPA: 8.7/10 | Highest: 9.32/10
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`p-8 rounded-2xl ${cardClasses} backdrop-blur-sm border shadow-xl`}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="text-yellow-600" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="text-green-500 mt-1" size={16} />
                    <div>
                      <p className="font-semibold">Academic Excellence Award</p>
                      <p className="text-sm opacity-75">
                        Won ₹50,000 for top performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="text-blue-500 mt-1" size={16} />
                    <div>
                      <p className="font-semibold">Hackathon Winner</p>
                      <p className="text-sm opacity-75">
                        2nd place in college-level hackathon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8 text-center">
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(
                  ([category, skillList]: [string, string[]]) => (
                    <div
                      key={category}
                      className={`p-6 rounded-xl ${cardClasses} backdrop-blur-sm border shadow-lg`}
                    >
                      <h4 className="font-bold mb-4 text-lg text-blue-600">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill: string) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              isDark
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.experience
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="space-y-8">
              {experience.map((exp: Experience, index: number) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl ${cardClasses} backdrop-blur-sm border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className=" items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                        <Briefcase className="text-blue-600" />
                        {exp.title}
                      </h3>
                      <div
                        className={`p-3 rounded-md md:w-xs ${
                          isDark ? "bg-gray-700" : "bg-blue-50"
                        } flex items-center gap-2`}
                      >
                        <span className="text-xs font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-blue-600">
                        {exp.company}
                      </p>
                      <p className="text-sm opacity-75 flex items-center gap-2 mt-1">
                        <MapPin size={14} />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight
                          size={16}
                          className="text-blue-600 mt-1 flex-shrink-0"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.projects
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: Project, index: number) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl ${cardClasses} backdrop-blur-sm border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <Link href={project.href}>
                      <ExternalLink size={20} className="text-blue-600" />
                    </Link>
                  </div>

                  <p className="text-sm opacity-75 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-xs opacity-75">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark
                            ? "bg-blue-900/30 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.contact
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {"Let's Connect"}
              </span>
            </h2>

            <p className="text-xl mb-12 opacity-75 max-w-2xl mx-auto leading-relaxed">
              {`I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.`}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a
                href="mailto:techyarindam@gmail.com"
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl ${cardClasses} backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <Mail className="text-blue-600" />
                <span className="font-medium">techyarindam@gmail.com</span>
              </a>
              <a
                href="tel:+919354685531"
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl ${cardClasses} backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <Phone className="text-green-600" />
                <span className="font-medium">+91 9354685531</span>
              </a>
            </div>

            <div className="text-center opacity-50">
              <p className="text-sm">
                © 2025 Arindam Sharma. Crafted with passion and modern web
                technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
