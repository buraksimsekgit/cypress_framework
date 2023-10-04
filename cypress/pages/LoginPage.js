class LoginPage {
  getUsernameField() {
    return cy.get('#username')
  }

  getPasswordField() {
    return cy.get('#password')
  }

  getLoginButton = () => {
    return cy.get('#login_btn')
  }

  getLoginMessage() {
    return cy.get('#success_lgn')
  }

  userLogin(username, password) {
    this.getUsernameField().type(username)
    this.getPasswordField().type(password)
    this.getLoginButton().click()
  }
}

export default LoginPage
