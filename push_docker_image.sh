#!/bin/bash
git pull
sudo docker build -t jenkins-deployment .
#create a docker hub account before pushing image to docker hub
#make sure you did docker login with docker command "sudo docker login"
sudo docker tag react-nginx sagarkakkalasworld/jenkins-deployment
sudo docker push sagarkakkalasworld/jenkins-deployment
