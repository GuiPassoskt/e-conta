pipeline {
    agent any

    stages {
        stage('Build') {
            agent node
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
