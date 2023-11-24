pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Clone..'
                script {
                  git url: 'https://github.com/GuiPassoskt/e-conta.git'
                  sh 'ls'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install'
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
