pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                agent {
                  docker {
                      image 'node:10-alpine'
                      args '-p 4000:4000'
                  }
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
