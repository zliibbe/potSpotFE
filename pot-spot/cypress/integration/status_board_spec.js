describe('Home page flow', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000')
      cy.intercept("GET", "https://pot-spot.herokuapp.com/api/v1/potholes", {
          potholes: [
              {
                  id: 1,
                  latitude: '39.74379494415912',
                  longitude: '-104.95005172109876',
                  desciption: 'Decent size',
                  pictures: [
                            'https://www.attorneystevelee.com/wp-content/uploads/pothole-road1.jpg',
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Large_pot_hole_on_2nd_Avenue_in_New_York_City.JPG/1920px-Large_pot_hole_on_2nd_Avenue_in_New_York_City.JPG'
                            ] 
              },
              {
                  id: 2,
                  latitude: '39.74018534594094',
                  longitude: '-104.95005172109876',
                  desciption: `its a pothole`,
                  pictures: [
                              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Asphalt_deterioration.jpg/1024px-Asphalt_deterioration.jpg',
                              ]
              }
          ]
        }).as('get-potholes'),

        cy.intercept("POST", "https://pot-spot.herokuapp.com/api/v1/potholes", {
                  id: 3,
                  latitude: '39.74379494415912',
                  longitude: '-104.95005172109876',
                  desciption: 'Test pothole',
                  pictures: [
                            "https://economical.com/ECOCOM/media/EcoComMedia/Site%20imagery/Blog/Blog%20entries/Car-Pot-Holes-Blog_945x525-min_1.jpg?ext=.jpg"
                            ] 
        }).as('post-pothole')
        
        cy.intercept("GET", "https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true", {

        })
      })
    
      it('should display a pothole with details', () => {
        cy.get(".header-button").click().then(($pothole) => {
          cy.url().should("eq", 'http://localhost:3000/statusboard')  
          .get(".status-pothole")
          .get('.pothole-image').first()
          .should('have.class', 'pothole-image')
          .and('be.visible')
        })
      })

    it('should have a status board of pothole details that can be accessed with status that can be changed', () => {
      cy.get(".header-button").click().then(($pothole) => {
          cy.get(".status-pothole")
          .get(".change-status").first().click()
          .get(".inProgress")
          .contains("Current Status: Being worked on")
          .get(".header-button").click()
          cy.contains('Submit New Pothole:')
      })
    })
})