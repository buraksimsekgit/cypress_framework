describe('Custom Commands', () => {
  it('Parent command', () => {
    cy.clickLink('Html Elements')

    cy.login('tgschool', 'password')

    cy.selectDropdownOption('#company_dropdown1', 'Tesla')

    cy.selectDropdownOption('#company_dropdown2', 'Apple')
  })

  it('Child Command', () => {
    cy.clickLink('Html Elements')

    cy.get('#main_heading').logText()

    cy.get('#main_heading').assertAttribute('id', 'main_heading')

    cy.get('#main_heading').isVisible()

    cy.get('#main_heading').click()

    //dual command example

    // cy.contains('')

    // cy.get('').contains('')
  })
})
