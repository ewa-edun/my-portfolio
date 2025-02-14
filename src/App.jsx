import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="portfolio">
      {/* Header/Navigation */}
      <header>
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className={isMenuOpen ? 'active' : ''}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#experience" onClick={toggleMenu}>Experience</a>
          <a href="#education" onClick={toggleMenu}>Education</a>
          <a href="#certificates" onClick={toggleMenu}>Certificates</a>
          <a href="#hobbies" onClick={toggleMenu}>Hobbies</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      </header>

      {/* Home/Summary Section */}
      <section id="home" className="home-section">
        <div className="profile-container">
          <img src="/src/pf.jpg" alt="Ewa" className="profile-image" />
          <div className="profile-text">
            <h1>Edun Oluwadamilola Ewaoluwa</h1>
            <h2>Data Scientist + Full Stack Developer</h2>
            <p>Welcome to my portfolio! I'm a passionate Data Scientist with expertise in full stack web development and a creative mindset. I love building innovative solutions and learning new technologies.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/src/VSNE.png" alt="VSNE Project" className="project-image"/>
            <div className="project-content">
              <h3>VSNE</h3>
              <p>The VSNE Career Mentor Bot -Sage- is designed to serve as a personalized career mentor for students and professionals. Sage helps users navigate the complex world of career development by providing insights, resources, and suggestions using AI to offer tailored advice, such as resume tips, job search strategies, and skill-building recommendations. Built with React, HTML, Vanilla CSS, Flask, SQLlite, OpenAI API, and Vercel.</p>
              <div className="project-links">
                <a href="https://github.com/Nicsims98/Career_mentor_bot" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://vsne-career-mentor-bot.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="/src/WWYRD.png" alt="WWYRD Project" className="project-image"/>
            <div className="project-content">
              <h3>WWYRD</h3>
              <p>What Would Your Role Model Do (WWYRD) is an interactive decision-making assistant inspired by iconic role models: Tony Stark, Jensen Huang, Manmohan Singh, Hedy Lamarr, Marie Curie, and Princess Diana (Princess of Wales). The app provides witty, personality-driven responses to help users make decisions, set goals, and stay on track with their resolutions. Built with React, CSS, Flask, SQLite, OpenAI API, Vercel, and Firebase.</p>
              <div className="project-links">
                <a href="https://github.com/ewa-edun/WWRYD" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://wwryd.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="/src/HackBuddy.png" alt="HackBuddy Project" className="project-image"/>
            <div className="project-content">
              <h3>HackBuddy</h3>
              <p>HackBuddy is a web app designed to enhance your hackathon experience. From tracking your upcoming hackathons to generating fun excuses and ensuring your submissions are on point, HackBuddy has your back. Built with React, CSS, and Vercel.</p>
              <div className="project-links">
                <a href="https://github.com/ewa-edun/HackBuddy" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://hack-buddy-silk.vercel.app/hacktracker" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="/src/Viberoast.png" alt="VibeRoast Project" className="project-image"/>
            <div className="project-content">
              <h3>VibeRoast</h3>
              <p>A fun, lightweight web app that suggests workouts based on mood. It either roasts or overhypes users for extra motivation. Built with React, CSS, Javascript, and Vercel.</p>
              <div className="project-links">
                <a href="https://github.com/ewa-edun/VibeRoast" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://vibe-roast.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="/src/WordWise.png" alt="WordWise Project" className="project-image"/>
            <div className="project-content">
              <h3>WordWise</h3>
              <p>WordWise is a lightweight and innovative vocabulary-building app tailored for high school students. The app combines simplicity with unique features to help students expand their vocabulary, track learning progress, and test retention through engaging quizzes. Built with React, CSS, Flask, SQLite, FireBase and Vercel.</p>
              <div className="project-links">
                <a href="https://github.com/ewa-edun/WordWise" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="live-demo-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="/src/sustainaquiz logo.png" alt="SustainAQuiz Project" className="project-image"/>
            <div className="project-content">
              <h3>Sustain-A-Quiz</h3>
              <p>SustainaQuiz is a fun, interactive, and educational quiz app designed to promote environmental sustainability. Through engaging questions and eco-friendly tips, users can learn about sustainability while earning points and climbing leaderboards. Built with React, CSS,and Vercel.</p>
              <div className="project-links">
                <a href="https://github.com/ewa-edun/SustainaQuiz" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://sustaina-quiz.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="/src/EcoLens.png" alt="EcoLens Project" className="project-image"/>
            <div className="project-content">
              <h3>EcoLens</h3>
              <p>EcoLens is an AI-powered platform that helps users make sustainable choices: Eco-Fraud Detection (Uses AI and fingerprint scanning to analyze product labels and spot fake sustainability claims), Environmental Insights (Provides real-time alerts on air quality, water safety, and other environmental conditions), Personalized Tips (Suggests eco-friendly habits and health-conscious choices based on product usage). Built with React, Tailwind CSS, Javascript, Node.js, FireBase, Twilio, Fingerprint scanner.</p>
              <div className="project-links">
                <a href="https://github.com/Isabelle36/EcoLens" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="/src/retro-wellness.png" alt="RetroWellness Project" className="project-image"/>
            <div className="project-content">
              <h3>RetroWellness</h3>
              <p>RetroWellness is a wellness app that prioritizes mental health and a balanced lifestyle. Its features include: Wellness plans tailored to the user's goals, Mood-to-music generator for uplifting vibes, Time capsule to save and reflect on memories, Community forums for support and shared growth, Chatbox to get more information and advice about health plans all presented in a retro-themed interface. Built with React, CSS and Vercel.</p>
              <div className="project-links">
                <a href="https://github.com/shreyazh/RetroWellness" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://retro-wellness.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="experience-item">
            <h3>Content Manager</h3>
            <h4>SecureShop</h4>
            <p className="date">September 2024 - March 2025</p>
            <p>Description of your role and achievements</p>
          </div>

          <div className="experience-item">
            <h3>Podcast Host: Science</h3>
            <h4>Girl's girl podcast</h4>
            <p className="date">2024 - Present</p>
            <p>Description of your role and achievements</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="timeline">
          <div className="experience-item">
            <h3>Computer Science</h3>
            <h4> Constructor University</h4>
            <p className="date">2025 - 2028</p>
            <p>Relevant coursework and achievements</p>
          </div>

          <div className="experience-item">
            <h3>High School Diploma</h3>
            <h4>Bethel American International School</h4>
            <p className="date">2018 - 2024</p>
            <p>Relevant coursework and achievements</p>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificates" className="section">
        <h2>Certificates</h2>
        <div className="certificates-grid">
          <div className="certificate-card">
            <img src="project1-image.jpg" alt="Certificate 1" className="certificate-image"/>
            <div className="certificate-content">
              <h3>Codedex Mini Holiday Hackathon</h3>
              <h4>Codedex</h4>
              <p className="date">Dec 2024</p>
            </div>
          </div>

          <div className="certificate-card">
            <img src="project1-image.jpg" alt="Certificate 2" className="certificate-image"/>
            <div className="certificate-content">
              <h3>Hack This Fall Hackathon</h3>
              <h4>HTF</h4>
              <p className="date">Dec 2024</p>
            </div>
          </div>

          <div className="certificate-card">
            <img src="project1-image.jpg" alt="Certificate 2" className="certificate-image"/>
            <div className="certificate-content">
              <h3>Hack This Fall Hackathon</h3>
              <h4>HTF</h4>
              <p className="date">Dec 2024</p>
            </div>
          </div>

          <div className="certificate-card">
            <img src="project1-image.jpg" alt="Certificate 2" className="certificate-image"/>
            <div className="certificate-content">
              <h3>Hack This Fall Hackathon</h3>
              <h4>HTF</h4>
              <p className="date">Dec 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="section">
        <h2>Hobbies</h2>
        <div className="hobbies-grid">
          <div className="hobby-item">
            <i className="hobby-icon">🎥</i>
            <h3>Content Creation</h3>
            <p>Creating engaging content for various platforms</p>
          </div>
          <div className="hobby-item">
            <i className="hobby-icon">🧶</i>
            <h3>Crochet</h3>
            <p>Crafting beautiful pieces through crochet</p>
          </div>
        </div>
        <br />

        <div className="hobbies-grid">
          <div className="hobby-item">
            <i className="hobby-icon">📔</i>
            <h3>Reading</h3>
            <p>Crafting beautiful pieces through crochet</p>
          </div>
          <div className="hobby-item">
            <i className="hobby-icon">📺</i>
            <h3>Anime</h3>
            <p>Crafting beautiful pieces through crochet</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-container">
          <div className="contact-item">
            <i className="contact-icon">📧</i>
            <a href="mailto:ewa.edun@gmail.com">ewa.edun@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="contact-icon">💼</i>
            <a href="https://linkedin.com/in/oluwadamilola-edun" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <i className="contact-icon">📱</i>
            <p>+2348105686969</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
