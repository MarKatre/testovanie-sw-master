describe('Form testing', () => {
    beforeEach(() => {
      cy.visit('https://ais2.ukf.sk/ais/start.do')
    })

    //it('Kontrola h1', () => {
      //cy.get('h1').should('exist');
    //})

    it('Prihlasenie sa do AIS', () => {
      //cy.getByData('').type('315890');
      //cy.getByData('inputName').should('exists');
      //cy.getByData('inputPassword').type('0159244712');
      
      //cy.getByData('sucess-message').;

      cy.get("#login").type("315890")
      cy.get("#heslo").type("0159244712")
      cy.get("#login-form-submit-btn").click()

      cy.get("app-info > .card > .card-header > strong").contains("Martina Katreniaková")
      

    })
})