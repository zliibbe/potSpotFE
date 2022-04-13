import React from 'react';
import './App.css';
import PotholeContainer from '../PotholeContainer/PotholeContainer';
import Form from '../Form/Form'
import PotholeDetail from '../PotholeDetail/PotholeDetail'

class App extends React.Component {
  constructor () {
    super();
    this.state = { potholes: [ 
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
          longitude: '-104.95724927698312',
          description: `its a pothole`,
          pictures: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Asphalt_deterioration.jpg/1024px-Asphalt_deterioration.jpg',
          ]
        }, 
        {
          id: 3,
          latitude: '39.77998918688553',
          longitude: '-104.97897473238706',
          description: 'Extra Smelly',
          pictures: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Newport_Whitepit_Lane_pot_hole.JPG/1920px-Newport_Whitepit_Lane_pot_hole.JPG',
            'https://www.thebalance.com/thmb/VlnrT3pRKvtegoumE0fXWmA4pWI=/2121x1193/smart/filters:no_upscale()/pothole-174662203-5a7dc84aae9ab80036c6ad36.jpg'
          ]
        }],
        currentPothole: ''
    }
  }

  addPothole = (newPothole) => {
    this.setState({potholes: [...this.state.potholes, newPothole]})
  }

  findPothole = (id) => {

    const singlePothole = this.state.potholes.find(ph => ph.id === id)
    this.setState({currentPothole: singlePothole})
  }
  
  render() {
    let display
    if(this.state.currentPothole) {
      display=<PotholeDetail currentPothole={this.state.currentPothole}/>
    } else {
      display=
      <main className='App'>
        <h1 className='title'>Pot Spot</h1>
        <h2>Denver, CO</h2>
        <div className='form-map-container'>
          <Form addPothole={this.addPothole}/>
          <div className='pothole-form map-placeholder'>Map will go here</div>
        </div>
        <PotholeContainer potholes={this.state.potholes} findPothole={this.findPothole}/>
      </main>
    }
    return (
      <main>
        {display}

      </main>
     )
  } ;
}

export default App;