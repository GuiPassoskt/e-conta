pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                agent {
                  docker { image 'node' }
                }
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
