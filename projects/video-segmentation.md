---
layout: page
title: "Real-Time Video Segmentation for Autonomous Robotic Manipulation"
subtitle: "Lightweight U-Net achieving 95.6% Dice at 30Hz on Da Vinci Surgical System"
permalink: /projects/video-segmentation/
---

## Project Overview

This project focuses on developing a real-time video segmentation system for autonomous robotic manipulation in surgical environments. Working with the **Da Vinci Surgical System**, I collected a comprehensive surgical video dataset and developed a lightweight neural network that achieves high accuracy at real-time speeds.

## Key Achievements

- **95.6% Dice Score** at **30Hz** real-time performance
- **60× speedup** compared to SAM2 with minimal accuracy loss
- Successfully deployed on surgical robotic systems
- Robust performance across various surgical scenarios

## Technical Approach

### Dataset Collection
- Collected extensive surgical video dataset using the **Da Vinci Surgical System**
- Curated diverse surgical scenarios for robust training
- Generated high-quality pseudo-labels using SAM2 for training

### Model Architecture
- Designed a **lightweight U-Net** architecture optimized for real-time inference
- Implemented efficient encoder-decoder structure with skip connections
- Optimized for GPU acceleration and low-latency processing

### Training Strategy
- Trained on SAM2-generated pseudo-labels for consistent annotation quality
- Applied data augmentation techniques for improved generalization
- Fine-tuned hyperparameters for optimal speed-accuracy trade-off

## Results & Impact

The developed system demonstrates exceptional performance in real-time surgical video segmentation:

- **Accuracy**: 95.6% Dice coefficient
- **Speed**: 30Hz real-time processing
- **Efficiency**: 60× faster than SAM2 baseline
- **Deployment**: Successfully integrated with robotic surgical systems

## Technologies Used

- **Deep Learning**: PyTorch, U-Net architecture
- **Computer Vision**: OpenCV, image processing
- **Robotics**: Da Vinci Surgical System integration
- **Optimization**: GPU acceleration, model quantization

## Links

🔗 **[GitHub Repository](https://github.com/Vakula289/Real-Time-Video-Segmentation-for-Autonomous-Manipulation)**

---

*This project demonstrates the intersection of computer vision, deep learning, and surgical robotics, contributing to the advancement of autonomous surgical assistance technologies.*