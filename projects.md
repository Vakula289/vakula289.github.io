---
layout: page
title: Projects
permalink: /projects/
---

<div class="projects-grid">

<!-- Project 1 -->
<div class="project-card">
  <img src="/assets/img/davinci.jpg" alt="Da Vinci Project" class="project-image"/>
  <h3>🤖 Real-Time Video Segmentation for Autonomous Robotic Manipulation</h3>
  <p>
  Collected a surgical video dataset using the da Vinci Surgical System and trained a lightweight U-Net on SAM2 pseudo-labels, achieving <b>95.6% Dice score at 30Hz</b>. Demonstrated a <b>60× runtime speedup</b> over SAM2 with minimal accuracy drop.
  </p>
  <p>
    <a href="https://github.com/Vakula289/Real-Time-Video-Segmentation-for-Autonomous-Manipulation">🔗 GitHub</a>
  </p>
</div>

<!-- Project 2 -->
<div class="project-card">
  <img src="/assets/img/turtlebot.jpg" alt="TurtleBot Project" class="project-image"/>
  <h3>🚗 Autonomous Mobile Robot Navigation and Perception</h3>
  <p>
  Built a ROS2 perception stack on a TurtleBot with LiDAR and RGB-D sensing. Implemented <b>LQR control, Kalman filtering, A*</b> and <b>RRT*</b> for path planning, and optimized ROS2 nodes with Pose Graph Optimization for robust navigation.
  </p>
  <p>
    <a href="https://github.com/Vakula289/Autonomous-Mobile-Robot-Perception-and-Navigation">🔗 GitHub</a>
  </p>
</div>

<!-- Project 3 -->
<div class="project-card">
  <img src="/assets/img/ventilator.jpg" alt="Respiratory Project" class="project-image"/>
  <h3>🫁 Adaptive Decision Making for Respiratory Management</h3>
  <p>
  Designed an <b>RL framework using MDP models</b> for ICU ventilator optimization with real-time patient data. Applied Q-learning to derive optimal policies and validated reward structures on MIMIC-IV data for improved respiratory stability.
  </p>
  <p>
    <a href="https://bit.ly/3Co9OzL">📄 Report</a>
  </p>
</div>

<!-- Project 4 -->
<div class="project-card">
  <img src="/assets/img/drone.jpg" alt="Drone Project" class="project-image"/>
  <h3>🚁 QUADRO – Autonomous Quadcopter Drone</h3>
  <p>
  Developed an autonomous quadcopter for GPS-based navigation with <b>vision-guided precision landing</b> using ArUco markers. Achieved <b>98% altitude control accuracy</b> with LiDAR and optical flow sensors. Finalist at Robofest 2.0 among 1500+ teams.
  </p>
  <p>
    <a href="https://bit.ly/3ZJ0gsy">🎥 Demo</a>
  </p>
</div>

<!-- Project 5 -->
<div class="project-card">
  <img src="/assets/img/navigation-aid.jpg" alt="Navigation Aid Project" class="project-image"/>
  <h3>🦯 ANVI – Assistance in Navigation for the Visually Impaired</h3>
  <p>
  Built an audio-enabled navigation assistant integrating <b>CLIP-CAP</b> and <b>LXMERT</b> for scene understanding. Achieved 85% accuracy in IMU-based fall detection, integrated GPS + obstacle detection, and presented at EXCON ’21. Won <b>Smart India Hackathon</b>.
  </p>
  <p>
    <a href="https://bit.ly/3d6Ruyl">📄 Report</a>
  </p>
</div>

</div>
