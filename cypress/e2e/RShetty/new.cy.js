

describe('test H1',()=>{

    it('H1 is correct',()=>{
        cy.visit('https://chrval59279.azurewebsites.net/')
        cy.get('H1').should('contain','RahulShettyAcademy.com Learning')
    })
})