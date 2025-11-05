import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Header from "../components/Header";

const education = [
  { year: "2020 - 2021", degree: "10th Grade", school: "Sri Ram Janki Saraswati Vidya Niketa Ashram, Buxar, Bihar", percentage: "83.2%" },
  { year: "2021 - 2023", degree: "12th Grade", school: "Maharshi Viswamitra College, Buxar, Bihar", percentage: "73.8%" },
  { year: "2023 - 2027", degree: "B.Tech in Computer Science", school: "IES College of Technology, Bhopal", percentage: "7.84 CGPA" },
  { year: "2023 - Present", degree: "Full Stack Developer Training", school: "Online / Self-Learning", percentage: "Ongoing" },
];

const skills = [
  { name: "C", icon: "/images/skills/c.png" },
  { name: "C++", icon: "/images/skills/cpp.png" },
  { name: "Java", icon: "/images/skills/java.png" },
  { name: "MongoDB", icon: "/images/skills/mongodb.png" },
  { name: "Express.js", icon: "/images/skills/express.png" },
  { name: "React.js", icon: "/images/skills/react.png" },
  { name: "Node.js", icon: "/images/skills/nodejs.png" },
  { name: "Tailwind CSS", icon: "/images/skills/tailwindcss.png" },
  { name: "HTML", icon: "/images/skills/html.png" },
  { name: "CSS", icon: "/images/skills/css.png" },
  { name: "JavaScript", icon: "/images/skills/javascript.png" },
];

const semesters = [
  { sem: "Semester 1", sgpa: 7.48 },
  { sem: "Semester 2", sgpa: 7.52 },
  { sem: "Semester 3", sgpa: 8.17 },
  { sem: "Semester 4", sgpa: 8.21 },
  { sem: "Semester 5", sgpa: "Ongoing" },
];

const internships = [
  {
    company: "IEEE EMBS Student Internship Program 2025",
    role: "Frontend Developer Intern",
    duration: "June 2025 - July 2025",
    description: "Built responsive React apps with Tailwind CSS and optimized performance.",
    certificate: "/images/skills/intern.jpeg",
  },
];

const popupVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

const Aboutpage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <Header/>
    <section id="about" className="py-20 bg-gray-900 text-white relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Resume Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={popupVariant}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <a
            href="/Nitish_Kumar_CV.pdf"
            download
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Education */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-semibold text-center mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={popupVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="text-cyan-400 font-semibold">{edu.year}</div>
                  <div className="text-gray-200">{edu.degree}</div>
                  <div className="text-gray-400">{edu.school}</div>
                  <div className="text-green-400 font-semibold">{edu.percentage}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Semesters */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-semibold text-center mb-6">Semester-wise SGPA</h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {semesters.map((s, idx) => (
              <motion.div
                key={idx}
                variants={popupVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="bg-gray-800/50 p-6 text-center rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <h4 className="text-cyan-400 font-semibold">{s.sem}</h4>
                <p className="text-white font-bold text-xl mt-2">{s.sgpa}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-semibold text-center mb-6">Internships</h3>
          {internships.map((intern, idx) => (
            <motion.div
              key={idx}
              variants={popupVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <h4 className="text-xl font-bold">{intern.role}</h4>
              <p className="text-cyan-400 font-semibold">{intern.company}</p>
              <p className="text-gray-300 mt-2">{intern.duration}</p>
              <p className="text-gray-400 mt-2">{intern.description}</p>
              {intern.certificate && (
                <div className="mt-4 w-full h-48 cursor-pointer">
                  <motion.img
                    src={intern.certificate}
                    alt="Certificate"
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full object-cover rounded-xl border border-white/20 shadow-lg"
                    onClick={() => setSelectedImage(intern.certificate)}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={popupVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-800/50 p-6 flex flex-col items-center rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-3" />
                <h4 className="font-semibold text-white">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl w-full rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default Aboutpage;
