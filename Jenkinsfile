pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/usr/bin:/bin"  // Ensure ng is available
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/qaximbalti/fastlearner-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'ng build --configuration=production'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh '''
                sudo rm -rf /var/www/angular-app/*
                sudo cp -r dist/fast-learner-app/* /var/www/angular-app/
                '''
            }
        }
    }
}
