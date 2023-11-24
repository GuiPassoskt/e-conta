pipeline {
    agent any

    stages {
        stage('Build') {
            agent { docker 'node' }
            steps {
                echo 'Building..'
                sh 'npm run pwa'
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
