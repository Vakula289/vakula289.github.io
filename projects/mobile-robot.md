---
layout: page
title: "Autonomous Mobile Robot Navigation and Perception"
subtitle: "ROS2-based perception stack with LiDAR and RGB-D sensing for TurtleBot"
permalink: /projects/mobile-robot/
---

## Project Overview

This project involves building a comprehensive autonomous navigation system for mobile robots using ROS2. The system integrates multiple sensors and advanced algorithms to enable robust navigation in complex environments, featuring LQR control, Kalman filtering, and state-of-the-art path planning algorithms.

## Key Achievements

- **Full ROS2 perception stack** with multi-sensor fusion
- **Robust navigation** using advanced control and planning algorithms
- **Real-time performance** with optimized sensor processing
- **Pose Graph Optimization** for enhanced localization accuracy

## Technical Implementation

### Sensor Integration
- **LiDAR**: High-resolution 360° environment mapping
- **RGB-D Camera**: Depth perception and visual odometry
- **IMU**: Orientation and motion tracking
- **Wheel Encoders**: Precise odometry measurements

### Control Systems
- **LQR Controller**: Linear Quadratic Regulator for optimal trajectory tracking
- **Kalman Filtering**: State estimation and sensor fusion
- **PID Control**: Fine-tuned motor control for precise movements

### Path Planning Algorithms
- **A* Algorithm**: Optimal path finding in known environments
- **RRT* (Rapidly-exploring Random Trees)**: Efficient path planning in complex spaces
- **Dynamic obstacle avoidance**: Real-time path re-planning

### Localization & Mapping
- **SLAM Implementation**: Simultaneous Localization and Mapping
- **Pose Graph Optimization**: Enhanced accuracy through loop closure detection
- **Map building**: Real-time environment mapping and updates

## System Architecture

The system follows a modular ROS2 architecture with dedicated nodes for:
- Sensor data processing and fusion
- Localization and mapping
- Path planning and navigation
- Motor control and actuation
- Safety monitoring and emergency stops

## Results & Performance

- **Navigation Accuracy**: Sub-centimeter precision in structured environments
- **Real-time Performance**: 10Hz planning updates, 50Hz control loop
- **Robustness**: Successfully navigates dynamic environments with moving obstacles
- **Efficiency**: Optimal path generation with minimal computational overhead

## Technologies Used

- **ROS2**: Robot Operating System 2
- **Python/C++**: Core algorithm implementation
- **OpenCV**: Computer vision processing
- **PCL**: Point Cloud Library for LiDAR processing
- **TurtleBot Platform**: Hardware integration and testing

## Links

🔗 **[GitHub Repository](https://github.com/Vakula289/Autonomous-Mobile-Robot-Perception-and-Navigation)**

---

*This project showcases advanced robotics concepts including sensor fusion, autonomous navigation, and real-time control systems, demonstrating practical applications in mobile robotics.*