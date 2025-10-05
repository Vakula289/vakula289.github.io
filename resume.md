---
layout: page
title: Resume
permalink: /cv/
---

<div class="resume-header">
  <div class="pdf-download">
    <a href="/assets/VakulaVenkatesh_Resume.pdf" download title="Download PDF Resume">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 3v10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 7l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Download Resume (PDF)
    </a>
  </div>
</div>

<div class="resume-container">

  <div class="resume-header">
    <div class="pdf-download">
      <a href="/assets/VakulaVenkatesh_Resume.pdf" download title="Download PDF Resume">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 3v10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 7l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Download Resume (PDF)
      </a>
    </div>
  </div>

  <aside class="resume-aside">
    <div class="side-nav" aria-label="Resume navigation">
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
      # Resume – Vakula Venkatesh
      ---

	</section>

	<section id="education">
  
	## 🎓 Education

	**Stanford University** – M.S. Mechanical Engineering (Robotics) _(2024 – 2026)_  
	- Graduate research in controls and perception
  
	**BITS Pilani, Goa Campus** – B.E. Mechanical Engineering _(2019 – 2023)_  
	- Minor in Computer Science; undergraduate research in robotics and AI

	</section>

	<section id="technical-experience">
  
	## 💼 Technical Experience

	**Robotics R&D Intern – Johnson & Johnson MedTech** _(June 2025 – Present)_  
	- Analyzed hospital datasets from bronchoscopy procedures and designed metrics to reduce time-to-target in lung navigation
	- Developed a learning-based prediction and recommendation framework leveraging multi-variable optimization
	- Filed an invention disclosure & patent; achieved up to **96% improvement** over the existing clinical navigation pipeline

	**Graduate Researcher – Stanford ARM Lab** _(2024 – Present)_  
	- Building controls–perception stacks for autonomous systems; research in decision-making under uncertainty, optimization, and sensor fusion

	**Research Intern – National Robotics Center / University of Victoria** _(2023)_  
	- Mobile robotics navigation, ROS integration, SLAM and mapping experiments

	</section>

	<section id="scholarships-awards">
  
	## 🏅 Scholarships & Awards

	- Smart India Hackathon — Winner (ANVI Navigation Aid)
	- Poster presentation at Stanford School of Engineering Centennial Celebration
	- Project presentation at EXCON ’21 (Navigation Aid for Visually Impaired)
	- Filed invention disclosure / patent (Monarch Systems work)

	</section>

	<section id="related-coursework">
  
	## 📚 Related Coursework

	- Convex Optimization
	- Optimal & Learning-Based Controls
	- Computer Vision (CS231n)
	- AI for Robotics
	- Advanced Dynamics and Control

	</section>

	<section id="skills">
  
	## 🛠 Skills

	- Programming: Python, C++, MATLAB, ROS, JAX, PyTorch, OpenCV
	- Domains: Robotics, Computer Vision, Controls, Optimization, Reinforcement Learning
	- Tools: Git, Linux, Notion, LaTeX

	</section>

	<section id="presentations">
  
	## 🎤 Presentations

	- Poster presentation at **Stanford School of Engineering Centennial Celebration**
	- Project presentation at **EXCON ’21** (Navigation Aid for Visually Impaired)

	</section>

	</main>

</div>

<script>
// Highlight side nav links based on scroll position using IntersectionObserver
document.addEventListener('DOMContentLoaded', function(){
	const navLinks = Array.from(document.querySelectorAll('.side-nav nav a'));
	const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

	const options = {root: null, rootMargin: '0px 0px -40% 0px', threshold: 0};

	const obs = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const id = '#' + entry.target.id;
			const link = document.querySelector('.side-nav nav a[href="' + id + '"]');
			if(entry.isIntersecting){
				navLinks.forEach(l => l.classList.remove('active'));
				if(link) link.classList.add('active');
			}
		});
	}, options);

	sections.forEach(s => obs.observe(s));
});
</script>
