# 🚀 Node.js CI/CD Deployment on AWS EC2

A hands-on DevOps project demonstrating how to deploy a containerized Node.js application on an **AWS EC2 instance** using **Docker, Docker Compose, GitHub Actions, and SSH-based automation**.

The CI/CD pipeline automatically deploys the latest version of the application whenever code is pushed to the `main` branch.

## 🛠️ Tech Stack

* **Node.js / Express.js** — Application
* **Docker** — Containerization
* **Docker Compose** — Container management
* **AWS EC2** — Cloud server / deployment environment
* **Ubuntu Linux** — Operating system
* **Git & GitHub** — Version control
* **GitHub Actions** — CI/CD automation
* **SSH** — Secure connection between GitHub Actions and EC2

## 🏗️ Architecture

```text
                 👨‍💻 Developer
                      │
                      │ git push
                      ▼
              ┌───────────────┐
              │     GitHub    │
              │   Repository  │
              └───────┬───────┘
                      │
                      │ GitHub Actions
                      ▼
              ┌───────────────┐
              │ GitHub Runner │
              └───────┬───────┘
                      │
                      │ SSH
                      ▼
        ┌──────────────────────────┐
        │       AWS EC2            │
        │      Ubuntu Server       │
        │                          │
        │   ┌──────────────────┐   │
        │   │ Docker Compose   │   │
        │   │                  │   │
        │   │ Node.js Container│   │
        │   └──────────────────┘   │
        └──────────────────────────┘
                      │
                      ▼
              🌐 Node.js App
```

## 🔄 CI/CD Workflow

The deployment pipeline works as follows:

1. Developer makes changes to the Node.js application.
2. Changes are pushed to the GitHub repository.
3. GitHub Actions automatically triggers the workflow.
4. The workflow connects to the AWS EC2 instance using SSH.
5. The EC2 server pulls the latest code from GitHub.
6. Docker Compose rebuilds the application.
7. Existing containers are recreated.
8. The updated Node.js application becomes available on the EC2 server.

```text
git push
   ↓
GitHub
   ↓
GitHub Actions
   ↓
SSH → AWS EC2
   ↓
git pull
   ↓
docker compose up -d --build
   ↓
🚀 Application Updated
```

## ☁️ AWS EC2 Configuration

The application is hosted on an **AWS EC2 instance running Ubuntu Linux**.

The EC2 instance acts as the deployment server where the Dockerized Node.js application runs.

The required inbound traffic should be configured through the EC2 **Security Group** for the application's exposed port.

> ⚠️ Never expose private SSH keys or credentials in the GitHub repository.

## 🔐 GitHub Actions Secrets

The deployment workflow uses GitHub Actions Secrets for sensitive information such as:

```text
EC2_HOST
EC2_USERNAME
EC2_SSH_KEY
```

These values are used by the GitHub Actions workflow to securely connect to the AWS EC2 instance.

## 🐳 Docker Deployment

The application can be built and started on the EC2 instance using:

```bash
docker compose up -d --build
```

Check running containers:

```bash
docker compose ps
```

View application logs:

```bash
docker compose logs
```

Stop the application:

```bash
docker compose down
```

## 🎯 What I Learned

Through this project, I gained practical experience with:

* Deploying applications on **AWS EC2**
* Linux server administration
* Dockerizing Node.js applications
* Docker Compose
* SSH-based remote deployment
* GitHub Actions
* CI/CD pipeline automation
* GitHub Secrets
* Cloud-based application deployment

## 🚀 Future Improvements

* Nginx reverse proxy
* HTTPS with SSL/TLS
* Automated testing
* Docker image scanning
* Health checks
* Monitoring with Prometheus & Grafana
* Automated rollback
* Zero-downtime deployment
* Kubernetes deployment
