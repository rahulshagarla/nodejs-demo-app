
# Node.js CI/CD Pipeline with GitHub Actions and Docker

## Project Overview

This project demonstrates an automated CI/CD pipeline for a Node.js application using GitHub Actions, Docker, and Docker Hub.

Whenever code is pushed to the `main` branch, GitHub Actions automatically installs dependencies, runs tests, builds a Docker image, and pushes the image to Docker Hub.

## Technologies Used

- Node.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub
- Ubuntu

## Project Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── test/
│   └── app.test.js
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

## CI/CD Pipeline

The pipeline consists of the following stages:

1. **Source:** GitHub Actions is triggered when code is pushed to `main`.
2. **Checkout:** Checks out the source code.
3. **Setup:** Sets up Node.js 22.
4. **Install:** Installs dependencies using `npm ci`.
5. **Test:** Runs automated tests using `npm test`.
6. **Docker Build:** Builds the Docker image.
7. **Docker Login:** Authenticates with Docker Hub using GitHub repository secrets.
8. **Push:** Pushes the Docker image to Docker Hub with `latest` and commit SHA tags.

## Docker Configuration

The application is packaged using a Dockerfile based on `node:22-alpine`.

Build the image locally:

```bash
docker build -t nodejs-demo-app .
```

Run the application locally:

```bash
docker run -d --name nodejs-app -p 3000:3000 nodejs-demo-app
```

## Docker Hub

Docker Hub repository:

https://hub.docker.com/r/rahulshagarla/nodejs-demo-app

Pull the published image:

```bash
docker pull rahulshagarla/nodejs-demo-app:latest
```

Run the published image:

```bash
docker run -d --name nodejs-test -p 3001:3000 rahulshagarla/nodejs-demo-app:latest
```

Open http://localhost:3001 in your browser.

Expected response:

```text
Hello from Node.js CI/CD Pipeline!
```

## GitHub Secrets

The following repository secrets are required:

- `DOCKERHUB_USERNAME`: Docker Hub username
- `DOCKERHUB_TOKEN`: Docker Hub access token with read and write permissions

Secrets are configured under:

GitHub Repository → Settings → Secrets and variables → Actions.

Never commit access tokens or passwords to the repository.

## Verification

The pipeline was verified with the following results:

- Automated test completed successfully.
- Docker image built successfully.
- Docker image pushed successfully to Docker Hub.
- Both `latest` and commit SHA tags were published.
- The published Docker image was run successfully.
- The Node.js application returned the expected response.

## GitHub Repository

https://github.com/rahulshagarla/nodejs-demo-app

## Author

Rahul Shagarla
