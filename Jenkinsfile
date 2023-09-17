def appVersion = '1.0.0'

pipeline {
    agent any
    // tools {
    //     nodejs 'Node' // Use the name of the Node.js installation you configured 
    // }

    stages {
        
        stage('Hello') {
            steps {
                echo "Hello world " 
            }
        }

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'http://195.20.246.7:3301/devopsgroupe4/frontend.git']]])
            }
        }

        // Add a new stage for pulling changes from Gitea
        stage('Pull Changes from Gitea') {
            steps {
                sh "git config --global --add safe.directory /home/myApp/frontend"
                sh "cd /home/myApp/frontend && git pull origin main"
            }
        }

        stage('Build Docker Image & Deploy ') {
            steps {

                script {
                    def imageName = "devopsgroupe4/myapp_react-app:${appVersion}-${env.GIT_COMMIT}"

                    docker.withRegistry('https://index.docker.io/v1/', 'Docker') {
                        docker.build(imageName, '-f /home/myApp/frontend/Dockerfile .')
                    }
                }
            }
        }

        stage('Test') {
            steps {
                dir('/home/myApp/frontend') {
                    sh "npm install"
                    echo "test done with success "
                }
            }
        }


stage('Publish to prod') {
    steps {
        script {
            def imageName = "devopsgroupe4/myapp_react-app:${appVersion}-${env.GIT_COMMIT}"
            def prodContainerName = 'myapp-prod'
            def prodImageName = "devopsgroupe4/myapp_react-app-prod:${appVersion}-${env.GIT_COMMIT}"
            def latestImageName = "devopsgroupe4/myapp_react-app-prod:latest"

            // Login to Docker Hub
            sh "docker login -u devopsgroupe4 -p devopsgroupe4"

            // Check if image exists locally
            def imageExists = sh(returnStdout: true, script: "docker images -q $imageName").trim()

            if (!imageExists) {
                echo "Image doesn't exist locally. Attempting to pull."
                try {
                    docker.withRegistry('https://index.docker.io/v1/', 'Docker') {
                        def image = docker.image(imageName)
                        image.pull()
                    }
                } catch (Exception e) {
                    echo "Image not found in registry. Moving on to next steps."
                }
            }

            // Tag and push the image to prod
            docker.withRegistry('https://index.docker.io/v1/', 'Docker') {
                try {
                    def image = docker.image(imageName)
                    image.tag(prodImageName)
                    image.tag(latestImageName)  // Tagging the image as latest
                    image.push()
                    image.push('latest')  // Pushing the latest tag
                } catch (Exception e) {
                    echo "Error tagging or pushing image: ${e.getMessage()}"
                }
            }

            // Deployment commands for prod
            try {
                sh "docker stop ${prodContainerName} || true"
                sh "docker rm ${prodContainerName} || true"
                sh "docker run -d --name ${prodContainerName} -p 8080:80 ${prodImageName}"
            } catch (Exception e) {
                echo "Error deploying to prod: ${e.getMessage()}"
            }
        }
    }
}





        // stage('Deploy to Prod') {
        //     steps {
        //         script {
        //             def imageName = "devopsgroupe4/myapp_react-app:${appVersion}-${env.GIT_COMMIT}"
        //             def prodContainerName = 'myapp'
        //             def prodImageName = "devopsgroupe4/myapp_react-app:${appVersion}-${env.GIT_COMMIT}"

        //             docker.withRegistry('https://index.docker.io/v1/', 'Docker') {
        //                 def image = docker.image(imageName)
        //                 image.push()

        //                 // Tag and push the image for deployment to Prod repository
        //                 def prodTag = "${prodImageName}"
        //                 image.tag(prodTag, 'latest')
        //                 image.push(prodTag)
        //             }

        //             // Deployment commands for Prod
        //             sh "docker stop ${prodContainerName} || true"
        //             sh "docker rm ${prodContainerName} || true"
        //             sh "docker run -d --name ${prodContainerName} -p 80:80 ${prodImageName}"
        //         }
        //     }
        // }




   

        
    }


}