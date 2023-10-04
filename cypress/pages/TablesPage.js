class TablesPage {
  getCompanyTableHeaders() {
    return cy.get('#static_table thead tr').first()
  }

  getCompanyTableFirstRow() {
    return cy.get('#static_table tbody tr').first()
  }

  getCountryTableColumn() {
    return cy.get('#static_table tbody tr').first().find('td:nth-child(4)')
  }

  getAppleProductsTableHeaders() {
    return cy.get('#static_table thead tr').last()
  }

  getQuantityColumn() {
    return cy.get('td:nth-child(1)').last()
  }

  clickQuantitySortButton() {
    cy.get('#quantity_asc').click()
  }

  clickQuantitySortButtonDescending() {
    cy.get('#quantity_desc').click()
  }

}

export default TablesPage
