"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFileText,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-400">
          Contact
        </p>

        <h2 className="mb-16 text-5xl font-bold text-white">
          Let's build something amazing.
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-10 max-w-xl text-lg leading-8 text-zinc-400">
              I'm currently looking for Software Engineering, Backend,
              Full Stack and AI Internship opportunities. Whether you have
              an internship, project, or just want to connect, feel free to
              reach out.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:manibhushanakg@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-5 transition hover:border-violet-500 hover:bg-zinc-900"
              >
                <FiMail className="text-2xl text-violet-400" />

                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="text-white">
                    manibhushanakg@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919964273005"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-5 transition hover:border-violet-500 hover:bg-zinc-900"
              >
                <FiPhone className="text-2xl text-violet-400" />

                <div>
                  <p className="text-sm text-zinc-500">Phone</p>
                  <p className="text-white">
                    +91 9964273005
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                <FiMapPin className="text-2xl text-violet-400" />

                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="text-white">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4">
              <a
  href="https://github.com/ManibhushanaKG"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my GitHub profile"
  className="..."
>
  <FiGithub size={20} />
</a>

              <a
  href="https://linkedin.com/in/manibhushana"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my LinkedIn profile"
  className="..."
>
                <FiLinkedin size={20} />
              </a>

              <a
  href="/resume.pdf"
  download
  aria-label="Download my resume"
  className="..."
>
                <FiFileText size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-zinc-900/60 p-10 backdrop-blur-xl">
            <span className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-400">
              Open to Opportunities
            </span>

            <h3 className="mb-6 text-4xl font-bold text-white">
              Let's Connect
            </h3>

            <p className="mb-8 leading-8 text-zinc-400">
              I'm actively seeking Software Engineering, Backend, Full Stack,
              and AI internship opportunities. If you're hiring, have an
              exciting project, or simply want to connect, I'd be happy to
              hear from you.
            </p>

            <a
              href="mailto:manibhushanakg@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
            >
              <FiMail />
              Email Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}