pipeline {
    agent any

    tools {nodejs "node"}
  
    stages {
        stage('Cloning Git') {
          steps {
            git 'https://github.com/GuiPassoskt/e-conta.git'
          }
        }
        
        stage('Install dependencies') {
          steps {
            sh 'npm install'
          }
        }
         
        stage('Test') {
          steps {
             sh 'npm test'
          }
        }

        stage('Deploy') {
          steps {
             echo "Deploy..."
          }
        }
    }
}
