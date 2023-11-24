pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Clone..'
                sh 'git https://github.com/GuiPassoskt/e-conta.git'
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
