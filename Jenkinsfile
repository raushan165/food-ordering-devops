pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                echo 'Repository Cloned'
            }
        }

        stage('Build Docker Images') {

            steps {

                bat 'docker compose build'
            }
        }

        stage('Start Containers') {

            steps {

                bat 'docker compose up -d'
            }
        }

        stage('Check Running Containers') {

            steps {

                bat 'docker ps'
            }
        }
    }
}