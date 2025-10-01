---
layout: page
title: Projects
permalink: /projects/
css-class: "projects-page"
---

<div class="projects-grid">
  
  <div class="project-tile" onclick="location.href='/projects/video-segmentation'">
    <div class="project-image">
      <img src="/assets/img/projects/video-segmentation.jpg" alt="Video Segmentation Project">
    </div>
    <div class="project-content">
      <h3>🤖 Real-Time Video Segmentation</h3>
      <p class="project-subtitle">Autonomous Robotic Manipulation</p>
      <div class="project-tags">
        <span class="tag">Computer Vision</span>
        <span class="tag">Deep Learning</span>
        <span class="tag">Robotics</span>
      </div>
    </div>
  </div>

  <div class="project-tile" onclick="location.href='/projects/mobile-robot'">
    <div class="project-image">
      <img src="/assets/img/projects/mobile-robot.jpg" alt="Mobile Robot Project">
    </div>
    <div class="project-content">
      <h3>🚗 Autonomous Mobile Robot</h3>
      <p class="project-subtitle">Navigation and Perception</p>
      <div class="project-tags">
        <span class="tag">ROS2</span>
        <span class="tag">SLAM</span>
        <span class="tag">Control Systems</span>
      </div>
    </div>
  </div>

  <div class="project-tile" onclick="location.href='/projects/respiratory-management'">
    <div class="project-image">
      <img src="/assets/img/projects/respiratory.jpg" alt="Respiratory Management Project">
    </div>
    <div class="project-content">
      <h3>🫁 Adaptive Decision Making</h3>
      <p class="project-subtitle">Respiratory Management</p>
      <div class="project-tags">
        <span class="tag">Reinforcement Learning</span>
        <span class="tag">Medical AI</span>
        <span class="tag">MDP</span>
      </div>
    </div>
  </div>

  <div class="project-tile" onclick="location.href='/projects/quadcopter'">
    <div class="project-image">
      <img src="/assets/img/projects/quadcopter.jpg" alt="Quadcopter Project">
    </div>
    <div class="project-content">
      <h3>🚁 QUADRO Drone</h3>
      <p class="project-subtitle">Autonomous Quadcopter</p>
      <div class="project-tags">
        <span class="tag">Computer Vision</span>
        <span class="tag">Flight Control</span>
        <span class="tag">GPS Navigation</span>
      </div>
    </div>
  </div>

  <div class="project-tile" onclick="location.href='/projects/anvi'">
    <div class="project-image">
      <img src="/assets/img/projects/anvi.jpg" alt="ANVI Project">
    </div>
    <div class="project-content">
      <h3>🦯 ANVI Assistant</h3>
      <p class="project-subtitle">Navigation for Visually Impaired</p>
      <div class="project-tags">
        <span class="tag">Computer Vision</span>
        <span class="tag">Accessibility</span>
        <span class="tag">IoT</span>
      </div>
    </div>
  </div>

</div>

---

## 🚗 Autonomous Mobile Robot Navigation and Perception
- Built a ROS2 perception stack on **TurtleBot** with LiDAR + RGB-D sensing  
- Implemented **LQR control, Kalman filtering, A\*, RRT\*** for planning  
- Optimized with **Pose Graph Optimization** for robust navigation  
🔗 [GitHub](https://github.com/Vakula289/Autonomous-Mobile-Robot-Perception-and-Navigation)

---

## 🫁 Adaptive Decision Making for Respiratory Management
- Designed **RL + MDP framework** for ICU ventilator optimization  
- Applied **Q-learning** to derive optimal patient-specific ventilator policies  
- Validated with **MIMIC-IV data** to improve respiratory stability  
📄 [Report](https://bit.ly/3Co9OzL)

---

## 🚁 QUADRO – Autonomous Quadcopter Drone
- Developed GPS-based autonomous navigation + **vision-guided landing** with ArUco markers  
- Achieved **98% altitude control accuracy** with LiDAR + optical flow  
- Finalist at **Robofest 2.0** among 1500+ teams  
🎥 [Demo](https://bit.ly/3ZJ0gsy)

---

## 🦯 ANVI – Navigation Assistance for the Visually Impaired
- Built an audio-enabled navigation assistant using **CLIP-CAP + LXMERT**  
- Integrated **GPS + obstacle detection** with IMU-based fall detection (**85% accuracy**)  
- Presented at **EXCON ’21**; Winner at **Smart India Hackathon**  
📄 [Report](https://bit.ly/3d6Ruyl)
