import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400 text-3xl" />,
    },
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white text-3xl" />,
    },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-700 dark:text-white text-3xl" />,
    },
  ],
  "Programming Languages": [
    { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl" /> },
    { name: "C", icon: <SiC className="text-gray-700 text-3xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600 text-3xl" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400 text-3xl" />,
    },
  ],
  "Tools & Frameworks": [
    { name: "Git", icon: <FaGitAlt className="text-red-600 text-3xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400 text-3xl" />,
    },
    { name: "Vercel", icon: <SiVercel className="text-black text-3xl" /> },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Text */}
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-4xl font-bold">My Skills</h2>
          <p className="text-gray-300 font-['Roboto']">
            Here are some of the technologies and tools I work with to build
            fast, modern, and efficient applications. I'm always learning and
            exploring new things!
          </p>
        </div>

        {/* Right Cards */}
        <div className="md:w-2/3 space-y-10">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-teal-400">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 p-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    {skill.icon}
                    <span className="mt-2 text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
