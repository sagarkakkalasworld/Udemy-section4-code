pipeline {
    agent any
    
    stages {
        stage('Build React code') {
            steps {
                script {
                    // Execute Ansible playbook on Build Server
                    sh "ssh ubuntu@172.31.30.63 '/home/ubuntu/build.sh'"                    // 'ansible-playbook /home/ubuntu/playbook.yaml'"
                
                    
                    }
            }
        }
        
        stage('Deploy in nginx') {
            steps {
                script {
                    // Execute deployment playbook on Deploy Server
                    sh "ssh ubuntu@172.31.30.63 '/home/ubuntu/deploy.sh'"
                }
            }
        }
    }
}
