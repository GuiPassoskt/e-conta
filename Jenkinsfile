pipeline {
    agent any

    tools {nodejs "node"}
  
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install'
                sh 'quasar build'
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
