node {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Clone..'
                script {
                  git credentialsId: 'jenkins-user-github', url: 'https://github.com/GuiPassoskt/e-conta.git'
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
