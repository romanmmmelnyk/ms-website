#!/bin/bash

# Configuration - UPDATE THESE
SSH_USER="roman"  # Update this
SSH_HOST="158.220.89.114"
SSH_PORT="22"

echo "🔍 Debugging Deployment Status..."
echo "=================================="
echo ""

echo "📦 Container Status:"
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker ps | grep ms-vue-app" || echo "❌ Container not running"
echo ""

echo "🖼️  Docker Image Info:"
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker images ms-vue-app:latest" || echo "❌ Image not found"
echo ""

echo "🕐 Image Created At:"
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker inspect ms-vue-app:latest --format='{{.Created}}' 2>/dev/null || echo 'Cannot inspect image'"
echo ""

echo "🚀 Container Started At:"
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker inspect ms-vue-app --format='{{.State.StartedAt}}' 2>/dev/null || echo 'Cannot inspect container'"
echo ""

echo "🔎 Searching for Changes in Container:"
RESULT=$(ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker exec ms-vue-app grep -r '6.5 Website Configuration' /app/dist/ 2>/dev/null | head -1")
if [ -z "$RESULT" ]; then
    echo "❌ NOT FOUND in container files"
else
    echo "✅ FOUND: $RESULT"
fi
echo ""

echo "📄 Testing HTTP Response:"
HTTP_RESULT=$(ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "curl -s http://localhost:9100/models/terms-of-service | grep -i '6.5\|Website Configuration' || echo 'NOT_FOUND'")
if [ "$HTTP_RESULT" = "NOT_FOUND" ]; then
    echo "❌ NOT FOUND in HTTP response"
else
    echo "✅ FOUND in HTTP response"
fi
echo ""

echo "📋 Container Logs (last 20 lines):"
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "docker logs ms-vue-app --tail 20 2>&1" || echo "Cannot get logs"
echo ""

echo "✅ Debug check complete!"

