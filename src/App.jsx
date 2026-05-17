import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>

      {/* Custom Cursor */}

      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>

      <div className="bg-black text-white min-h-screen relative overflow-hidden">

        {/* Background Glow Effects */}

        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

        {/* Navbar */}

        <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">

          <h1 className="text-2xl font-bold text-cyan-400">
            Lakha.dev
          </h1>

          <div className="hidden md:flex gap-6 text-gray-300">

            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>

          </div>

        </nav>

        {/* Hero Section */}

        <section
          id="home"
          className="flex flex-col items-center justify-center text-center h-[85vh] px-6"
        >

          <div className="float-animation p-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-2xl shadow-cyan-500/40 mb-8 hover:scale-105 hover:rotate-2 transition duration-300">

            <img
              src="/profile.jpg"
              alt="profile"
              className="w-44 h-44 rounded-full object-cover"
            />

          </div>

          <h2 className="text-6xl md:text-7xl font-extrabold leading-tight animate-pulse">

            Hi, I'm{' '}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Lakha Karmur
            </span>

          </h2>

          <div className="mt-6">

            <TypeAnimation
              sequence={[
                'Creative Developer 🚀',
                2000,
                'CCTV Networking Expert 📡',
                2000,
                'BGMI Poster Designer 🎮',
                2000,
                'Future Freelancer 💻',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-400 text-xl"
            />

          </div>

          <div className="mt-8 flex gap-4">

            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 glow text-black px-6 py-3 rounded-xl font-semibold hover:scale-110 hover:shadow-cyan-400/50 transition duration-300">
              View Projects
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              Contact Me
            </button>

          </div>

        </section>

        {/* Skills Section */}

        <motion.section
          id="skills"
          className="py-24 px-8 bg-[#0a0a0a]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-300">

              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Web Development
              </h3>

              <p className="text-gray-400">
                Building modern responsive websites using React,
                Tailwind CSS and modern UI design.
              </p>

            </div>

            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-300">

              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                CCTV Networking
              </h3>

              <p className="text-gray-400">
                IP Camera setup, DVR/NVR configuration,
                networking troubleshooting and installation.
              </p>

            </div>

            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-300">

              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                BGMI Design
              </h3>

              <p className="text-gray-400">
                Creative gaming posters, thumbnails,
                cinematic edits and social media content.
              </p>

            </div>

          </div>

        </motion.section>

        {/* Projects Section */}

        <section
          id="projects"
          className="py-24 px-8"
        >

          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            <div className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-300">

              <img
  src="/project1.jpg"
  alt="project"
  className="h-56 w-full object-cover"
/>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  Gaming Poster Designs
                </h3>

                <p className="text-gray-400">
                  Creative BGMI cinematic posters and social media designs.
                </p>

              </div>

            </div>

            <div className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-300">

              <img
  src="/project2.jpg"
  alt="project"
  className="h-56 w-full object-cover"
/>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  CCTV Networking Work
                </h3>

                <p className="text-gray-400">
                  Camera setup, troubleshooting and networking solutions.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Contact Section */}

        <section
          id="contact"
          className="py-24 px-8 bg-[#0a0a0a]"
        >

          <h2 className="text-4xl font-bold text-center mb-16">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="max-w-3xl mx-auto text-center">

            <p className="text-gray-400 text-lg mb-10">
              Interested in working together or need creative work?
              Let's connect 🚀
            </p>

            <div className="flex flex-wrap justify-center gap-6">

              <a
                href="#"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 glow text-black px-6 py-3 rounded-xl font-semibold hover:scale-110 hover:shadow-cyan-400/50 transition duration-300"
              >
                Instagram
              </a>

              <a
                href="#"
                className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                YouTube
              </a>

              <a
                href="#"
                className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </section>

        {/* Footer */}

        <footer className="border-t border-gray-800 py-8 text-center text-gray-500">

          <p>
            © 2026 Lakha Karmur. All rights reserved.
          </p>

          <p className="mt-2 text-sm">
            Built with React & Tailwind CSS 🚀
          </p>

        </footer>

      </div>

    </>
  )
}

export default App