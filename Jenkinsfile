pipeline {
    agent { label 'slave' } // Replace 'slave' with your actual node label

    stages {
        stage('Set Script Permissions') {
            steps {
                script {
                    // Set executable permissions on build.sh and deploy.sh
                    sh """
                        ssh ubuntu@172.31.30.63 'chmod 744 /home/ubuntu/Udemy-section4-code/build.sh'
                        ssh ubuntu@172.31.30.63 'chmod 744 /home/ubuntu/Udemy-section4-code/deploy.sh'
                    """
                }
            }
        }

        stage('Build React code') {
            steps {
                script {
                    // Execute build script on Build Server
                    sh "ssh ubuntu@172.31.30.63 '/home/ubuntu/Udemy-section4-code/build.sh'"
                }
            }
        }

        stage('Deploy in nginx') {
            steps {
                script {
                    // Execute deploy script on Deploy Server
                    sh "ssh ubuntu@172.31.30.63 '/home/ubuntu/Udemy-section4-code/deploy.sh'"
                }
            }
        }
    }
}
