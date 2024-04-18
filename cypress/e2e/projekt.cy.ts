describe('Form testing', () => {
    beforeEach(() => {
      cy.visit('https://www.fpvai.ukf.sk/sk/')
    })

    it('Vyplnenie a poslanie správy na fakultnej stránke Fakulty Prírodných vied a Informatiky', () =>{
        cy.get('#sppb-form-builder-field-0').type('Martina')
        cy.get('#sppb-form-builder-field-1').type('Katreniaková')
        cy.get('#sppb-form-builder-field-2').type('mkatreniakova@gmail.com')
        cy.get('#sppb-form-builder-field-3').type('objekt')
        cy.get('#sppb-form-builder-field-4').type('Správa')
        cy.get('#captcha-1701427327127').type('7')
        cy.get('#btn-1701427327127').click()
    })

    it('Vyplnenie a poslanie správy so súhlasom o Podmienky používania a zásady ochrany osobných údajov na fakultnej stránke', () => {
        cy.get('.sppb-row > :nth-child(1) > .sppb-form-control').type('Martina')
        cy.get('.sppb-row > :nth-child(2) > .sppb-form-control').type('mkatreniakova@gmail.com')
        cy.get('.sppb-row > :nth-child(3) > .sppb-form-control').type('object')
        cy.get('.sppb-row > :nth-child(4) > .sppb-form-control').type('7')
        cy.get('.sppb-row > :nth-child(5) > .sppb-form-control').type('Správa')
        cy.get('#agreement').click()
        cy.get('#btn-1701425728567').click()
    })

})