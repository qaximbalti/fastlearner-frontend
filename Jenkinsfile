pipeline {
    agent any

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
                rm -rf /var/www/angular-app/*
                cp -r dist/OPEN_SOURCE_FL/* /var/www/angular-app/
                '''
            }
        }
    }
}
