pipeline {
    agent any
    options {
        timeout(time: 5, unit: 'MINUTES')
    }
    parameters {
        choice( name: 'PATH_FILTER', 
                choices: ["Modulo14-Testes_Automatizados_de_API_REST/testes-api-cy", "Modulo11-Automacao_de_UI_com_Cypress-Parte1"], 
                description: 'Run on specific platform')
    }
    environment{
        PATH_CHOICE = "${params.PATH_FILTER}"
    }
    if (PATH_CHOICE == "Modulo14-Testes_Automatizados_de_API_REST/testes-api-cy") {
        stages{
            stage('Instalar Dependencias') {
                steps {
                    sh '''
                        cd "${PATH_CHOICE}" 
                        npm install
                    '''
                }
            }
            stage('Serverest') {
                parallel{
                    stage('serverest'){
                        steps {
                            sh '''
                                cd "${PATH_CHOICE}"
                                npm run start
                            '''
                        }
                    }
                    stage('test'){
                        steps{
                            sh '''
                                sleep 20
                                cd "${PATH_CHOICE}"
                                NO_COLOR=1 npm run cy:run
                            '''
                        }
                    }
                }
            }
        }
    }
    else {
        stages{
            stage('Instalar Dependencias') {
                steps {
                    sh '''
                        cd "${PATH_CHOICE}" 
                        npm install
                    '''
                }
            }
            stage('test'){
                steps{
                    sh '''
                        sleep 20
                        cd "${PATH_CHOICE}"
                        NO_COLOR=1 npm run cy:run
                    '''
                }
            }
        }
    }
}
