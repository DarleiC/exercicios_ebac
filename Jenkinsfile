pipeline {
    agent any
    options {
        timeout(time: 5, unit: 'MINUTES')
    }
    stages{
        stage('Instalar Dependencias') {
            steps {
                sh '''
                    cd Modulo14-Testes_Automatizados_de_API_REST/testes-api-cy
                    npm install
                '''
            }
        }
        stage{
            parallel{
                stage('serverest'){
                    steps {
                        sh '''
                            cd Modulo14-Testes_Automatizados_de_API_REST/testes-api-cy
                            npm run start
                        '''
                    }
                }
                stage('test'){
                    steps{
                        sh '''
                            sleep 20
                            cd Modulo14-Testes_Automatizados_de_API_REST/testes-api-cy
                            NO_COLOR=1 npm run cy:run
                        '''
                    }
                }
            }
        }
    }
}