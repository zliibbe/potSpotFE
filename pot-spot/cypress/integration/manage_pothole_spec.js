describe('Individual pothole page flow', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://pot-spot.herokuapp.com/api/v1/potholes", 
         [
              {
                  id: 1,
                  latitude: '39.74379494415912',
                  longitude: '-104.95005172109876',
                  description: 'Decent size',
                  pictures: [
                            'https://www.attorneystevelee.com/wp-content/uploads/pothole-road1.jpg',
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Large_pot_hole_on_2nd_Avenue_in_New_York_City.JPG/1920px-Large_pot_hole_on_2nd_Avenue_in_New_York_City.JPG'
                            ] 
              },
              {
                  id: 2,
                  latitude: '39.74018534594094',
                  longitude: '-104.95005172109876',
                  description: `its a pothole`,
                  pictures: [
                              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Asphalt_deterioration.jpg/1024px-Asphalt_deterioration.jpg',
                              ]
              }
          ]
        ).as('get-potholes')

        cy.intercept("GET", "https://pot-spot.herokuapp.com/api/v1/pictures", [
            {url:'https://www.attorneystevelee.com/wp-content/uploads/pothole-road1.jpg', pothole_id: 1},
            {url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Large_pot_hole_on_2nd_Avenue_in_New_York_City.JPG/1920px-Large_pot_hole_on_2nd_Avenue_in_New_York_City.JPG', pothole_id: 1},
            {url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Asphalt_deterioration.jpg/1024px-Asphalt_deterioration.jpg', pothole_id: 2}
            ] 
        ).as('get-pictures')

        cy.intercept("GET", "https://pot-spot.herokuapp.com/api/v1/potholes/1",
        {
          id: 1,
          latitude: '39.74379494415912',
          longitude: '-104.95005172109876',
          description: 'Decent size',
          pictures: [
                    'https://www.attorneystevelee.com/wp-content/uploads/pothole-road1.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Large_pot_hole_on_2nd_Avenue_in_New_York_City.JPG/1920px-Large_pot_hole_on_2nd_Avenue_in_New_York_City.JPG'
                    ] 
        }).as('get-pothole-id')
    })

    it('should navigate to individual pothole pages from status board',() => {
      cy.visit('http://localhost:3000')
      cy.visit('http://localhost:3000/statusboard')
      .get('.manage-pothole-button').first().click()
      .get('.location')
      .contains('Pothole 1')
      .get('.latitude')
      .contains('39.74379494415912')
      .get('.longitude')
      .contains('-104.95005172109876')
      .get('.description')
      .contains('Decent size')
      .get('.pictures-section')
      .get('img')
    })

    it('should be able to delete pothole from individual pothole page', () => {
      cy.visit('http://localhost:3000/statusboard')
      .get('.manage-pothole-button').first().click()
      .get('.delete-button').click()
      .get('.message-container').contains('Your pothole at id: 1 has been deleted')
      .click()
      cy.get('.modal-button').click()
      cy.contains('Submit New Pothole:')
    })
 })