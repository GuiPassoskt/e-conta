pipeline {
    agent any

    stages {
        stage('Clone Sources') {
          steps {
            git 'https://github.com/GuiPassoskt/e-conta.git'
          }
        }
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
