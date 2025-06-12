import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ResumePDF from "../assets/resume.pdf";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex  flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Resume</span>
          <a
            href={ResumePDF}
            download="Anubhab_Guha_Resume.pdf"
            className="text-blue-400 hover:text-blue-300 underline transition"
          >
            Download
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-6 text-white">
          {/* Email */}
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Email</span>
            <a
              href="mailto:anubhabguha1999@gmail.com"
              className="text-blue-400 hover:text-blue-300 underline transition"
            >
              anubhabguha1999@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col">
            <span className="font-semibold text-lg">LinkedIn</span>
            <a
              href="https://linkedin.com/in/anubhab-guha-478967201/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition"
            >
              linkedin.com/in/anubhab-guha-478967201/
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col">
            <span className="font-semibold text-lg">GitHub</span>
            <a
              href="https://github.com/anubhabguha1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition"
            >
              github.com/anubhabguha1999
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
