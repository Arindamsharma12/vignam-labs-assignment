import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgMail } from "react-icons/cg";
import {
  FaAws,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaXTwitter,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import TechButton from "./tech-button";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiPrisma, SiShadcnui, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandSocketIo } from "react-icons/tb";
import { LuAmpersand } from "react-icons/lu";
const AboutSection = () => (
  <div className="min-h-screen bg-neutral-800 flex justify-center">
    <div className="flex flex-col mt-10 justify-between md:max-w-4xl p-3">
      <div>
        <h1 className="text-green-600 text-3xl md:text-4xl font-bold mb-10">
          Bio
        </h1>
        {/* <hr className="border border-green-600 mb-15 md:w-20" /> */}
        <div className="flex md:flex-row flex-col gap-4">
          <Image
            src={"/profile.jpg"}
            alt="profile"
            height={150}
            width={150}
            className="rounded-md"
          />
          <p className="text-purple-400 font-semibold text-xl md:text-2xl">
            I&apos;m <span className="text-amber-400">Arindam Sharma</span> — a
            developer who believes code should do more than just run; it should
            solve problems, connect people, and inspire change. My work{" "}
            <span className="text-amber-400">blends&nbsp;</span>
            full-stack development, AI innovation, and open-source
            collaboration.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-green-600 text-3xl md:text-4xl font-bold">
          Let&apos;s Connect
        </h1>
        {/* <hr className="border border-green-600 mb-15" /> */}
        <div className="flex gap-4 mt-10">
          <Link href={"https://github.com/Arindamsharma12"}>
            <FiGithub className="size-8 md:size-10 text-sky-500" />
          </Link>
          <Link href={"https://www.linkedin.com/in/arindam-sharma30"}>
            <FaLinkedin className="size-8 md:size-10 text-sky-500" />
          </Link>
          <Link
            href={
              "mailto:techyarindam@gmail.com?subject=Hello&body=Hi%20there!"
            }
          >
            <CgMail className="size-8 md:size-10 text-sky-500" />
          </Link>
          <Link href={"https://x.com/Arindam_Sharma_"}>
            <FaXTwitter className="size-8 md:size-10 text-sky-500" />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-green-600 text-3xl md:text-4xl font-bold mb-10">
          Tech Stack
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <TechButton
            Icon={IoLogoJavascript}
            content="Javascript"
            color="amber"
          />
          <TechButton Icon={SiTypescript} content="Typescript" color="blue" />
          <TechButton Icon={RiNextjsFill} content="Nextjs" color="purple" />
          <TechButton Icon={FaReact} content="Reactjs" color="red" />
          <TechButton Icon={SiShadcnui} content="Shadcn" color="green" />
          <TechButton
            Icon={RiTailwindCssFill}
            content="Tailwindcss"
            color="amber"
          />
          <TechButton Icon={BiLogoMongodb} content="MongoDB" color="purple" />
          <TechButton
            Icon={BiLogoPostgresql}
            content="PostgreSQL"
            color="blue"
          />
          <TechButton Icon={FaNodeJs} content="Nodejs" color="green" />
          <TechButton Icon={SiExpress} content="Expressjs" />
          <TechButton Icon={FaAws} content="Aws" color="amber" />
          <TechButton Icon={FaDatabase} content="Reddis" color="purple" />
          <TechButton Icon={FaGithub} content="Github" color="blue" />
          <TechButton Icon={FaJava} content="Java" color="green" />
          <TechButton Icon={FaPython} content="Python" color="red" />
          <TechButton Icon={FaDocker} content="Docker" color="blue" />
          <TechButton
            Icon={TbBrandSocketIo}
            content="Socket.io"
            color="amber"
          />
          <TechButton Icon={SiPrisma} content="Prisma" color="red" />
          <TechButton Icon={LuAmpersand} content="More" color="purple" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
