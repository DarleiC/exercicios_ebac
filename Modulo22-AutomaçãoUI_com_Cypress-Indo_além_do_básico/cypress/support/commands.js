Cypress.Commands.add('criaConta', (email, password) => {
    const fd = new FormData()
        fd.append('email', email)
        fd.append('password', password)
        fd.append('woocommerce-register-nonce', "c2d6036045")
        fd.append('_wp_http_referer', "/minha-conta/")
        fd.append('register', "Register")
        
    cy.request({
        url : '/minha-conta/',
        method : 'POST',
        body : fd
    })

    cy.login(email, password)
})

Cypress.Commands.add('login', (email, password) => {
    const fd = new FormData()
        fd.append('username', email)
        fd.append('password', password)
        fd.append('woocommerce-login-nonce', "6771284df8")
        fd.append('_wp_http_referer', "/minha-conta/")
        fd.append('login', "Login")
        
    cy.request({
        url : '/minha-conta/',
        method : 'POST',
        body : fd
    })


    cy.visit('/minha-conta/')
})

