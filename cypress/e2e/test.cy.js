

describe('test',()=>{
    beforeEach(()=>{
        cy.visit('https://chrivale.azurewebsites.net/webapp/')
    })
    it('test H1',()=>{
        
        cy.get('h1').should('contain','RahulShettyAcademy.com Learning')
    })
    it('test H',()=>{
        cy.get('h3').should('contain','Cypress')
    })
})