describe('My First Tests', () => {

    it('Visit TechGlobal training app home page', () => {
        cy.visit('https://techglobal-training.com/')

        cy.reload()
        cy.visit('https://techglobal-training.com/frontend')
        cy.go('back')
        // cy.go('forward')
        // cy.go(-1)
        // cy.go(1)

        cy.title().should('eq', 'Techglobal Training | Home')
        cy.url().should('eq', 'https://techglobal-training.com/')


        // cy.get('#togo').click()
        cy.get('#logo').click()
        cy.get('#logo').should('be.visible')

    })
})