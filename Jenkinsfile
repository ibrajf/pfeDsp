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


        stage('Deploy to prod') {
            steps {
                script {
                    def imageName = "myapp-react-app:${appVersion}-${env.GIT_COMMIT}"
                    def prodContainerName = 'myapp-prod'
                    def prodImageName = "devopsgroupe4/myapp_react-app-prod:${appVersion}-${env.GIT_COMMIT}"

                    // Step 1: Se connecter à Docker Hub
                    try {
                        sh "docker login -u devopsgroupe4 -p devopsgroupe4"
                    } catch (Exception e) {
                        echo "Erreur lors de la connexion à Docker Hub: ${e.getMessage()}"
                        return
                    }

                    // Step 2: Vérification de l'existence de l'image
                    def imageExists = sh(returnStdout: true, script: "docker images -q $imageName").trim()
                    
                    if (!imageExists) {
                        echo "L'image $imageName n'existe pas localement."
                        return
                    }
                    
                    // Step 3: Tagger l'image
                    try {
                        sh "docker tag $imageName $prodImageName"
                    } catch (Exception e) {
                        echo "Erreur lors du tag de l'image : ${e.getMessage()}"
                        return
                    }
                    
                    // Step 4: Pousser l'image sur Docker Hub
                    try {
                        sh "docker push $prodImageName"
                    } catch (Exception e) {
                        echo "Erreur lors du push de l'image : ${e.getMessage()}"
                        return
                    }

                    // Step 5: Commandes de déploiement pour la production
                    try {
                        sh "docker stop ${prodContainerName} || true"
                        sh "docker rm ${prodContainerName} || true"
                        sh "docker run -d --name ${prodContainerName} -p 8080:80 ${prodImageName}"
                    } catch (Exception e) {
                        echo "Erreur lors du déploiement en production : ${e.getMessage()}"
                    }
                }
            }
        }

stage('Deploy to prod if changed') {
    steps {
        script {
            def imageName = "myapp-react-app:${appVersion}-${env.GIT_COMMIT}"
            def prodImageName = "devopsgroupe4/myapp_react-app-prod:latest"

            // Se connecter à Docker Hub
            try {
                sh "docker login -u devopsgroupe4 -p devopsgroupe4"
            } catch (Exception e) {
                echo "Erreur lors de la connexion à Docker Hub: ${e.getMessage()}"
                return
            }

            // Obtenir le digest de l'image locale
            def localDigest = sh(returnStdout: true, script: "docker images --digests | grep $imageName | awk '{print $3}'").trim()

            // Obtenir le digest de l'image sur Docker Hub
            def remoteDigest = ''
            try {
                remoteDigest = sh(returnStdout: true, script: "docker pull $prodImageName --quiet | sed -n 's/.*sha256:\\([0-9a-f]*\\).*/\\1/p'").trim()
            } catch (Exception e) {
                echo "Erreur lors de la récupération du digest à distance: ${e.getMessage()}"
            }

            if (localDigest != remoteDigest) {
                // Tagger et pousser l'image
                try {
                    sh "docker tag $imageName $prodImageName"
                    sh "docker push $prodImageName"
                } catch (Exception e) {
                    echo "Erreur lors du tag ou du push de l'image: ${e.getMessage()}"
                    return
                }
            } else {
                echo "Pas de changements dans l'image, rien à pousser."
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