name: Deploy Frontend to EC2

on:
  push:
    branches: [ main ]
  workflow_dispatch:

env:
  EC2_HOST: ${{ secrets.EC2_HOST }}
  EC2_USERNAME: ${{ secrets.EC2_USERNAME }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup SSH
      uses: webfactory/ssh-agent@v0.8.0
      with:
        ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}

    - name: Test SSH Connection
      run: |
        ssh -o StrictHostKeyChecking=no -o ConnectTimeout=30 ${{ secrets.EC2_USERNAME }}@${{ secrets.EC2_HOST }} "echo 'SSH connection successful'"

    - name: Deploy Frontend to EC2
      run: |
        ssh -o StrictHostKeyChecking=no -o ConnectTimeout=30 ${{ secrets.EC2_USERNAME }}@${{ secrets.EC2_HOST }} '
          set -e
          echo "Starting frontend deployment..."
          
          # Create directory if it doesn't exist (without chown)
          mkdir -p /opt/aptiverse/frontend
          cd /opt/aptiverse/frontend
          echo "Current directory: $(pwd)"
          
          # Clone or pull latest code
          if [ ! -d ".git" ]; then
            echo "Cloning frontend repository..."
            git clone https://github.com/7irelo/aptiverse-ui.git .
          else
            echo "Pulling latest frontend changes..."
            git pull origin main
          fi
          
          echo "Building Docker image..."
          docker build -t aptiverse-frontend .
          
          echo "Stopping existing container..."
          docker stop aptiverse-frontend 2>/dev/null || true
          docker rm aptiverse-frontend 2>/dev/null || true
          
          echo "Starting new container..."
          docker run -d \
            --name aptiverse-frontend \
            --network aptiverse-net \
            -p 3000:3000 \
            -e NEXT_PUBLIC_API_URL=http://localhost:5000/api \
            -e NODE_ENV=production \
            aptiverse-frontend
            
          echo "Cleaning up..."
          docker image prune -f
          
          echo "Frontend deployment completed successfully!"
        '