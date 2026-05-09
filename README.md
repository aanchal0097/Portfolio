 DevOps Portfolio Deployment on AWS 🚀

A complete DevOps project demonstrating application deployment, containerization, CI/CD automation, and cloud deployment using AWS.

📌 Project Overview

This project showcases the deployment of a React-based portfolio application using modern DevOps tools and practices. The application was containerized with Docker, deployed on AWS EC2, and automated using GitHub Actions CI/CD pipelines.

---

🛠️ Tech Stack

* React
* Docker
* Git & GitHub
* GitHub Actions
* AWS EC2
* Nginx
* Kubernetes (Basics)
* Linux

---

 ✨ Features

* Developed and deployed a React portfolio application
* Containerized the application using Docker
* Automated build and deployment using GitHub Actions
* Configured Nginx on AWS EC2 for hosting
* Managed server access using SSH and `.pem` key authentication
* Created Kubernetes Deployment and Service YAML files
* Implemented version control using Git and GitHub

---

 📂 Project Structure

```bash
devops-portfolio/
│── src/
│── public/
│── Dockerfile
│── nginx.conf
│── deployment.yaml
│── service.yaml
│── .github/workflows/
│── package.json
```

---

⚙️ CI/CD Workflow

1. Push code to GitHub
2. GitHub Actions automatically triggers the workflow
3. Docker image is built
4. Application is deployed on AWS EC2

---

☁️ AWS Deployment

* Hosted on AWS EC2 Linux instance
* Nginx configured as web server
* Secure server access using SSH and `.pem` keys

---

🐳 Docker Setup

Build Docker image:

```bash
docker build -t myportfolio .
```

Run container:

```bash
docker run -d -p 80:80 myportfolio
```

---

☸️ Kubernetes Manifests

Basic Kubernetes configuration files included:

* Deployment YAML
* Service YAML

Apply configuration:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

---

📸 Project Screenshots

Add screenshots here:

* Portfolio Website
* GitHub Actions Workflow
* Docker Container Running
* AWS EC2 Deployment
* Kubernetes YAML Files

---

 📚 Learning Outcomes

* Cloud deployment on AWS
* CI/CD pipeline automation
* Docker containerization
* Linux server management
* Kubernetes basics
* Nginx configuration
