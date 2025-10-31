# CI/CD Workflow & Log Tracking Guide

## Overview

This project uses **GitHub Actions** for automated deployment. The workflow automatically builds and deploys your application when you push to the `main` branch.

## How It Works

### 1. **Trigger Events**
The CI/CD pipeline runs when:
- You push commits to the `main` branch
- You manually trigger it via GitHub Actions UI (workflow_dispatch)

### 2. **Deployment Process**

The `.github/workflows/deploy.yml` workflow performs these steps:

1. **Checkout Code** - Gets the latest code from the repository
2. **Build Docker Image** - Creates a Docker image named `ms-vue-app:latest`
3. **Setup SSH** - Configures SSH access to your deployment server
4. **Transfer Image** - Sends the Docker image to your server via SSH (compressed with gzip)
5. **Restart Container** - Stops the old container and starts a new one with the updated image
6. **Smoke Test** - Verifies the application is running (HTTP 200 check on port 9100)

### 3. **Server Configuration**

Your application runs:
- **Container Name:** `ms-vue-app`
- **Port:** `9100` (both host and container)
- **Image:** `ms-vue-app:latest`

## How to Track CI/CD Logs

### Option 1: GitHub Actions UI (Recommended)

1. Go to your repository on GitHub
2. Click on the **"Actions"** tab at the top
3. You'll see a list of workflow runs (most recent first)
4. Click on any run to see detailed logs for each step
5. Click on individual steps (e.g., "Build image", "Restart container") to see their logs

**Direct URL format:**
```
https://github.com/romanmmmelnyk/ms-website/actions
```

### Option 2: GitHub CLI (if installed)

```bash
# List recent workflow runs
gh run list

# View logs for the latest run
gh run view --log

# Watch logs in real-time
gh run watch
```

### Option 3: Check Deployment Status via SSH

If you have SSH access to your deployment server:

```bash
# Check if container is running
ssh user@your-server "docker ps | grep ms-vue-app"

# View container logs
ssh user@your-server "docker logs ms-vue-app"

# Check container health
ssh user@your-server "docker inspect ms-vue-app | grep Health"
```

## Required GitHub Secrets

The workflow requires these secrets configured in your GitHub repository:

1. **`SSH_KEY`** - Private SSH key for server access
2. **`SSH_HOST`** - Server hostname or IP address
3. **`SSH_USER`** - SSH username
4. **`SSH_PORT`** - SSH port (defaults to 22 if not set)

**To set secrets:**
1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add each secret with its corresponding value

## Troubleshooting

### Changes Not Appearing After Push

1. **Check GitHub Actions Status:**
   - Go to Actions tab and verify the workflow completed successfully
   - Look for any failed steps (red ❌) or warnings (yellow ⚠️)

2. **Verify the Commit Was Pushed:**
   ```bash
   git log --oneline -5
   ```
   Your latest commit should show: `Add website configuration submission clause to Moth Models Terms of Service`

3. **Check Browser Cache:**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
   - Clear browser cache or use incognito/private mode

4. **Verify Container is Running:**
   - The workflow should restart the container automatically
   - Check if the container restarted recently (see server logs)

5. **Check Build Time:**
   - GitHub Actions logs will show the exact build time
   - If the workflow is still running, wait for it to complete

### Common Issues

**Workflow Fails at "Build image":**
- Check Dockerfile for syntax errors
- Verify all dependencies are correctly specified in package.json

**Workflow Fails at "Transfer image":**
- Verify SSH credentials (SSH_KEY, SSH_HOST, SSH_USER)
- Check server connectivity and firewall settings
- Ensure SSH key has proper permissions

**Workflow Fails at "Restart container":**
- Check if Docker is running on the server
- Verify port 9100 is available
- Check server disk space (Docker images can be large)

**Application Not Responding After Deploy:**
- Check container logs: `docker logs ms-vue-app`
- Verify port mapping is correct
- Check server firewall rules

## Manual Deployment (if needed)

If you need to deploy manually:

```bash
# Build the image
docker build -t ms-vue-app:latest .

# Stop and remove old container
docker rm -f ms-vue-app

# Run new container
docker run -d --name ms-vue-app --restart unless-stopped -p 9100:9100 ms-vue-app:latest
```

## Monitoring

- **Application Health:** The Dockerfile includes a HEALTHCHECK that runs every 30 seconds
- **Port:** Application serves on port 9100
- **Status:** Check `http://your-server:9100` after deployment

## Next Steps After Deployment

1. Wait for GitHub Actions workflow to complete (usually 2-5 minutes)
2. Check the Actions tab for any errors
3. Visit your application URL to verify changes are live
4. Clear browser cache if changes don't appear immediately

---

**Last Updated:** Based on `.github/workflows/deploy.yml` workflow

