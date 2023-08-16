def appVersion = '1.0.0'

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'http://195.20.246.7:3301/devopsgroupe4/frontend.git']]])
            }
        }

        stage('Run Tests') {
            steps {
                

                // Run unit tests
                sh 'npm test'    

                // Run integration tests (if applicable)
                sh 'npm run integration-test' // or 'yarn run integration-test'

                // Run end-to-end tests (if applicable)
                sh 'npm run e2e-test' 

                // Perform other test-related tasks (linting, etc.)
                sh 'npm run lint'  
            }
        }


        stage('Build Docker Image') {
            steps {
                script {
                    def imageName = "devopsgroupe4/myapp_react-app:${appVersion}-${env.GIT_COMMIT}"

                    docker.withRegistry('https://index.docker.io/v1/', 'Docker') {
                        docker.build(imageName, '-f /home/myApp/frontend/Dockerfile .')
                    }
                }
            }
        }
        

        stage('Deploy to Preprod') {
            steps {
                script {
                    def imageName = "devopsgroupe4/myapp_react-app:${appVersion}-${env.GIT_COMMIT}"
                    def preprodContainerName = 'myapp-preprod'
                    def preprodImageName = "devopsgroupe4/myapp_react-app-preprod:${appVersion}-${env.GIT_COMMIT}"

                    def imageExists = sh(returnStdout: true, script: "docker images -q $imageName").trim()

                    if (imageExists) {
                        echo "Image $imageName is already present. Skipping Deploy to Preprod stage."
                    } else {
                        docker.withRegistry('https://index.docker.io/v1/', 'Docker') {
                            def image = docker.image(imageName)
                            image.pull()
                            image.tag(preprodImageName)
                            image.push()
                        }

                        // Deployment commands for Preprod
                        sh "docker stop ${preprodContainerName} || true"
                        sh "docker rm ${preprodContainerName} || true"
                        sh "docker run -d --name ${preprodContainerName} -p 8080:80 ${preprodImageName}"
                    }
                }
            }
        }

        stage('Deploy to Prod') {
            steps {
                script {
                    def imageName = "devopsgroupe4/myapp_react-app:${appVersion}-${env.GIT_COMMIT}"
                    def prodContainerName = 'myapp'
                    def prodImageName = "devopsgroupe4/myapp_react-app:${appVersion}-${env.GIT_COMMIT}"

                    docker.withRegistry('https://index.docker.io/v1/', 'Docker') {
                        def image = docker.image(imageName)
                        image.push()

                        // Tag and push the image for deployment to Prod repository
                        def prodTag = "${prodImageName}"
                        image.tag(prodTag, 'latest')
                        image.push(prodTag)
                    }

                    // Deployment commands for Prod
                    sh "docker stop ${prodContainerName} || true"
                    sh "docker rm ${prodContainerName} || true"
                    sh "docker run -d --name ${prodContainerName} -p 80:80 ${prodImageName}"
                }
            }
        }

        
    }
}
