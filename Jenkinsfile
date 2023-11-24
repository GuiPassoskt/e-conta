node {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Clone..'
                sh 'mkdir -p build'
                script {
                  git credentialsId: 'jenkins-user-github', url: 'https://github.com/GuiPassoskt/e-conta.git'
                  sh 'ls -lart ./*'
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
