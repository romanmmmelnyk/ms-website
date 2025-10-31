# Deployment Debugging Guide

## Quick Debug Commands (Run on Server)

### 1. Check Container Status
```bash
ssh USER@158.220.89.114 "docker ps | grep ms-vue-app"
ssh USER@158.220.89.114 "docker inspect ms-vue-app | grep -A 5 Image"
```

### 2. Check Image Details
```bash
ssh USER@158.220.89.114 "docker images ms-vue-app"
ssh USER@158.220.89.114 "docker inspect ms-vue-app:latest | grep Created"
```

### 3. Check if Changes Are in Container
```bash
# Check if section 6.5 exists in built files
ssh USER@158.220.89.114 "docker exec ms-vue-app grep -r '6.5 Website Configuration' /app/dist/ || echo 'NOT FOUND'"

# Check all JS files for the text
ssh USER@158.220.89.114 "docker exec ms-vue-app find /app/dist -name '*.js' -exec grep -l 'Website Configuration Submissions' {} \;"

# Check what files are in dist
ssh USER@158.220.89.114 "docker exec ms-vue-app ls -la /app/dist/assets/ | head -20"
```

### 4. Check Container Logs
```bash
ssh USER@158.158.220.89.114 "docker logs ms-vue-app --tail 50"
```

### 5. Compare Build Timestamps
```bash
# When was the image created?
ssh USER@158.220.89.114 "docker inspect ms-vue-app:latest --format='{{.Created}}'"

# When was the container started?
ssh USER@158.220.89.114 "docker inspect ms-vue-app --format='{{.State.StartedAt}}'"
```

### 6. Test What's Actually Being Served
```bash
# Check the HTML response
ssh USER@158.220.89.114 "curl -s http://localhost:9100/models/terms-of-service | grep -i '6.5\|Website Configuration' || echo 'NOT FOUND IN HTML'"

# Check if it's in the JS bundle
ssh USER@158.220.89.114 "curl -s http://localhost:9100/models/terms-of-service | grep -o 'index-[^.]*\.js' | head -1 | xargs -I {} curl -s http://localhost:9100/{} | grep -o '6.5 Website Configuration' || echo 'NOT FOUND IN JS'"
```

## Local Debugging

### 1. Build Locally and Check
```bash
npm run build
grep -r "6.5 Website Configuration" dist/
```

### 2. Test Local Build
```bash
npm run build
npm run preview
# Then visit http://localhost:4173/models/terms-of-service
```

### 3. Compare Git Commits
```bash
git log --oneline --all -- src/views/policies/MothModelsTermsOfServiceView.vue
git show HEAD:src/views/policies/MothModelsTermsOfServiceView.vue | grep -A 3 "6.5"
```

## Advanced Debugging

### 1. SSH into Container and Explore
```bash
ssh USER@158.220.89.114
docker exec -it ms-vue-app sh
cd /app/dist
find . -name "*.js" -exec grep -l "MothModelsTermsOfServiceView" {} \;
```

### 2. Check Docker Image Layers
```bash
ssh USER@158.220.89.114 "docker history ms-vue-app:latest"
```

### 3. Extract and Inspect Image
```bash
ssh USER@158.220.89.114 "docker save ms-vue-app:latest > /tmp/image.tar"
# Then extract and check contents
```

## GitHub Actions Debugging

### 1. Check Workflow Logs
- Go to: https://github.com/romanmmmelnyk/ms-website/actions
- Click latest run
- Check each step for errors

### 2. Check Build Step Output
Look for:
- Build completion message
- Any warnings or errors
- File sizes of built assets

### 3. Check Transfer Step
Verify:
- Image was saved and compressed
- Transfer completed
- Image was loaded on server

### 4. Check Restart Step
Verify:
- Old container was stopped
- New container started
- Container is healthy

## Quick One-Liner Debug Script

Save this as `debug-deploy.sh`:

```bash
#!/bin/bash
SSH_USER="YOUR_USER"
SSH_HOST="158.220.89.114"
SSH_PORT="22"

echo "=== Container Status ==="
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker ps | grep ms-vue-app"

echo -e "\n=== Image Info ==="
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker images ms-vue-app:latest"

echo -e "\n=== Checking for Changes ==="
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker exec ms-vue-app grep -r '6.5 Website Configuration' /app/dist/ 2>/dev/null | head -3 || echo '❌ NOT FOUND IN CONTAINER'"

echo -e "\n=== Container Created ==="
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker inspect ms-vue-app:latest --format='{{.Created}}'"

echo -e "\n=== Container Started ==="
ssh -p $SSH_HOST $SSH_USER@$SSH_HOST "docker inspect ms-vue-app --format='{{.State.StartedAt}}'"

echo -e "\n=== Testing HTTP Response ==="
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "curl -s http://localhost:9100/models/terms-of-service | grep -i '6.5\|Website Configuration' || echo '❌ NOT FOUND IN HTTP RESPONSE'"
```

Run with: `bash debug-deploy.sh`

