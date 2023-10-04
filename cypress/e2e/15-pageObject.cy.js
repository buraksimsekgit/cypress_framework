import LoginPage from '../pages/LoginPage'

describe('Login page tests', { tags: ['@smoke'] }, () => {


  before(function () {
    cy.fixture('example').then((data) => {
      this.username = data.username
      this.password = data.password
    })
  })


  //   it.skip("Login Functionality", () => {

  //     cy.contains("Project - Login Function");

  //     cy.get("#username").type("TechGlobal");
  //     cy.get("#password").type("Test1234");

  //     cy.get("#login_btn").click();

  //     cy.get("#success_lgn").should("be.visible");
  //   });

  const loginPage = new LoginPage()

  it('Login Functionality', function () {
    cy.clickCardByTitle('Project - Login Function')

    loginPage.userLogin(this.username, this.password)
    loginPage.getLoginMessage().should('be.visible')
  })
})