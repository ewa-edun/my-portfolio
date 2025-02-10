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
        <div className="projects-wrapper">
          <div className="project-card">
            <img src="/src/retrowellness.png" alt="RetroWellness Project" className="project-image"/>
            <h3>RetroWellness</h3>
            <p>Description of project 1</p>
            <div className="project-links">
              <a href="github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="live-demo-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>

          <br />
          <div className="project-card">
            <img src="project1-image.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Description of project 1</p>
            <div className="project-links">
              <a href="github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="live-demo-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div> 

          <br />
          <div className="project-card">
            <img src="project1-image.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Description of project 1</p>
            <div className="project-links">
              <a href="github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="live-demo-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div> 

          <br />
          <div className="project-card">
            <img src="project1-image.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Description of project 1</p>
            <div className="project-links">
              <a href="github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="live-demo-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div> 

          <br />
          <div className="project-card">
            <img src="project1-image.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Description of project 1</p>
            <div className="project-links">
              <a href="github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="live-demo-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
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
          {/* Add more experience items */}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-container">
          <div className="education-item">
            <h3>Computer Science</h3>
            <h4> Constructor University</h4>
            <p className="date">2025 - 2028</p>
            <p>Relevant coursework and achievements</p>
          </div>

          <div className="education-item">
            <h3>High School Diploma</h3>
            <h4>Bethel American International School</h4>
            <p className="date">2018 - 2024</p>
            <p>Relevant coursework and achievements</p>
          </div>
          {/* Add more education items */}
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
          {/* Add more hobbies */}
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
