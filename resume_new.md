---
layout: page
title: Resume
permalink: /cv/
---

<div class="resume-container">
  <aside class="resume-aside">
    <div class="side-nav">
      <div class="pdf-download">
        <a href="/assets/VakulaVenkatesh_Resume.pdf" title="Download Resume (PDF)">
          📄
        </a>
        <a href="/assets/VakulaVenkatesh_Resume.pdf">Download Resume</a>
      </div>

      <nav>
        <a href="#my-info" class="active">My Info</a>
        <a href="#education">Education</a>
        <a href="#technical-experience">Technical Experience</a>
        <a href="#scholarships-awards">Scholarships & Awards</a>
        <a href="#related-coursework">Related Coursework</a>
      </nav>
    </div>
  </aside>

  <main class="resume-main">
    <section id="my-info">
      <h1>Vakula Venkatesh</h1>
      <p>MS Student in Mechanical Engineering (Robotics) at Stanford University</p>
      <p>
        <a href="mailto:vakula289@gmail.com">📧 vakula289@gmail.com</a> |
        <a href="https://github.com/Vakula289">GitHub</a> |
        <a href="https://linkedin.com/in/vakula-v">LinkedIn</a>
      </p>
    </section>

    <section id="education">
      <h2>🎓 Education</h2>

      <h3>Stanford University</h3>
      <p>M.S. Mechanical Engineering (Robotics) — 2024 – 2026</p>
      <ul>
        <li>Graduate research in controls and perception</li>
        <li>Focus on robotics and autonomous systems</li>
      </ul>

      <h3>BITS Pilani, Goa Campus</h3>
      <p>B.E. Mechanical Engineering — 2019 – 2023</p>
      <ul>
        <li>Minor in Computer Science</li>
        <li>Undergraduate research in robotics and AI</li>
      </ul>
    </section>

    <section id="technical-experience">
      <h2>💼 Technical Experience</h2>

      <h3>Robotics R&D Intern — Johnson & Johnson MedTech</h3>
      <p>June 2025 – Present</p>
      <ul>
        <li>Analyzed hospital datasets from bronchoscopy procedures and designed metrics to reduce time-to-target in lung navigation</li>
        <li>Developed a learning-based prediction and recommendation framework leveraging multi-variable optimization</li>
        <li>Filed an invention disclosure & patent; achieved up to <strong>96% improvement</strong> over the existing clinical navigation pipeline</li>
      </ul>

      <h3>Graduate Researcher — Stanford ARM Lab</h3>
      <p>2024 – Present</p>
      <ul>
        <li>Building controls–perception stacks for autonomous systems</li>
        <li>Research in decision-making under uncertainty, optimization, and sensor fusion</li>
      </ul>

      <h3>Research Intern — University of Victoria</h3>
      <p>May 2023 – Aug 2023</p>
      <ul>
        <li>Worked on navigation & motion control for Pioneer3Dx mobile robot</li>
        <li>Integrated ROS systems and implemented SLAM algorithms</li>
      </ul>
    </section>

    <section id="scholarships-awards">
      <h2>🏅 Scholarships & Awards</h2>
      <ul>
        <li>Smart India Hackathon — Winner (ANVI Navigation Aid)</li>
        <li>Stanford School of Engineering Centennial Celebration — Selected Presenter</li>
        <li>EXCON '21 — Featured Project Presentation</li>
        <li>Filed Patent Application — Bronchoscopy Navigation System (2025)</li>
      </ul>
    </section>

    <section id="related-coursework">
      <h2>📚 Related Coursework</h2>
      <div class="course-list">
        <ul>
          <li>Convex Optimization</li>
          <li>Optimal & Learning-Based Controls</li>
          <li>Computer Vision (CS231n)</li>
          <li>AI for Robotics</li>
          <li>Advanced Dynamics and Control</li>
          <li>Robot Perception and Learning</li>
        </ul>
      </div>
    </section>
  </main>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Find the nav link corresponding to this section
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.side-nav nav a[href="#${id}"]`);
      
      if (entry.isIntersecting) {
        document.querySelectorAll('.side-nav nav a').forEach(a => a.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px'
  });

  // Observe all sections
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
});</script>