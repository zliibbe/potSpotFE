
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

    it('should have a form that you can submit new information for a pothole with', () => {
        cy.get('.pothole-form').then(($form) => {
            cy.contains('Submit New Pothole:')
            .get('input[name="latitude"]').type('39.74379494415912')
            .get('input[name="longitude"]').type('-104.95005172109876')
            .get('input[name="description"]').type('Not too bad of a pothole')
            .get('input[name="pictures"]').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj44l3nUq20cbLxT_Y7h-eljdoLPwmNiLRjWlV8nU3Hwjjeiml2YH-44OG7NEpzyrb8Gw&usqp=CAU')
            .get('input[value="submit"]').click()
            .get(".message").contains("Your pothole has been added.")
        })
    })
     
    it('should have map that displays existing potholes', () => {
        // cy.get()
    })
    
})