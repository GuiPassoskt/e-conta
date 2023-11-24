pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install && npm run pwa'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
