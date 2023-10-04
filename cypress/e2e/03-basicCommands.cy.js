// This is group of test blocks for HTML Elements page
describe('Basic Commands', () => {

    it('Validate Headings', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Html Elements').click()

        cy.get('#main_heading').should('have.text', 'Html Elements')

        cy.get('div').contains('Headings').should('be.visible')

        cy.get('#languages_heading').should('have.text', 'Programming Languages')
        cy.get('#tools_heading').should('have.text', 'Automation Tools')
    })

    it('Validate Buttons', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Html Elements').click()

        cy.get('#main_heading').should('have.text', 'Html Elements')

        cy.get('div').contains('Buttons').should('be.visible')

        cy.get('#register_button').should('be.visible').as('registerButton')
        cy.get('#signin_button').should('be.visible').as('signinButton')

        cy.get('@registerButton').click()
        cy.get('.mt-1').should('have.text', 'You clicked on “Register”')

        cy.get('@signinButton').click()
        cy.get('.mt-1').should('have.text', 'You clicked on “Sign in”')

    })

    it('Validate Ordered/Unordered List', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Html Elements').click()

        cy.get('#main_heading').should('have.text', 'Html Elements')

        cy.get('div').contains('Ordered Lists').should('be.visible')

        cy.get('ol > li').first().should('have.text', 'Cypress')
        cy.get('ol > li').last().should('have.text', 'Selenium Webdriver')

        cy.get('div').contains('Unordered Lists').should('be.visible')

        cy.get('ul > li').first().should('have.text', 'JavaScript')
        cy.get('ul > li').last().should('have.text', 'Java')
    })

    it('Validate Links', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Html Elements').click()

        cy.get('#main_heading').should('have.text', 'Html Elements')

        cy.get('div').contains('Links').should('be.visible')

        cy.get('#facebook_link').should('have.text', 'Facebook')

        cy.get('#instagram_link').should('have.text', 'Instagram')
    })

    it('Validate Image', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Html Elements').click()

        cy.get('#main_heading').should('have.text', 'Html Elements')

        cy.get('div').contains('Links').should('be.visible')

        cy.get('#testing_image').should('be.visible')
    })

    it('Validate Checkboxes', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Html Elements').click()

        cy.get('#checkbox-button-group #checkbox_1').as('apple').should('not.be.checked')
        cy.get('@apple').check().should('be.checked')

        cy.get('#checkbox-button-group #checkbox_3').as('tesla').should('not.be.checked')
        cy.get('@tesla').check().should('be.checked')

        cy.get('#radio-button-group #radio_1_option_1').as('java').should('not.be.checked')
        cy.get('@java').check().should('be.checked')

        cy.get('#radio-button-group #radio_1_option_3').as('js').should('not.be.checked')
        cy.get('@js').check().should('be.checked')
    })

    it('Validate Text Input', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Html Elements').click()

        cy.get('#text_input1').type('MyName').clear()
        cy.get('#text_input2').type('lastName').clear()
    })

    it('Validate Date Input', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Html Elements').click()

        cy.get('#date_input1').type('10/10/2023{enter}')
        cy.get('#date_input2').type('10/10/2023{enter}')
    })

    it('Validate Dropdpwn Input', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Html Elements').click()

        cy.get('#company_dropdown1').select('Microsoft')
        cy.get('#company_dropdown2').select('Tesla')
    })
}) 