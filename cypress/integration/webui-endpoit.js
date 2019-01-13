describe('UI endpoint interaction', function() {
    it('will define 6,8,6 as isosceles', function() {
      cy.visit('http://localhost:3000')
      cy.get('canvas')
      cy.get('input[name="side1"]').clear()
      cy.get('input[name="side1"]').type(6)
      cy.get('input[name="side2"]').clear()
      cy.get('input[name="side2"]').type(8)
      cy.get('input[name="side3"]').clear()
      cy.get('input[name="side3"]').type(6)
      cy.contains('An isosceles triangle')
    })
  })
describe('UI only features', function() {
    it('will change the langauage', function() {
      cy.visit('http://localhost:3000')
      cy.get('.header_button').select('فارسی')
      cy.contains('اضلاع مثل را وارد کنید')
    })
  })