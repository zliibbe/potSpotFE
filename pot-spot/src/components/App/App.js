import React from 'react';
import './App.css';
import PotholeContainer from '../PotholeContainer/PotholeContainer';
import Form from '../Form/Form'
import PotholeDetail from '../PotholeDetail/PotholeDetail'
import { fetchPotholes, fetchPictures } from '../../apiCalls';
import Map from '../Map/Map';

class App extends React.Component {
  constructor () {
    super();
    this.state = { potholes: [],
        currentPothole: '',
        pictures: []
    }
  }

  componentDidMount = () => {
    fetchPotholes()
      .then(data => {
        return this.setState({
          potholes: data
        })
      })
      fetchPictures()
      .then(data => {
        return this.setState({
          pictures: data
        })
      })

  }

  addPothole = (newPothole) => {
    this.setState({potholes: [...this.state.potholes, newPothole]})
  }

  findPothole = (id) => {

    const singlePothole = this.state.potholes.find(ph => ph.id === id)
    this.setState({currentPothole: singlePothole})
  }

  collectPotholePhotos = () => {
    return this.state.currentPothole.pictures.map(pic => {
        return <a href={ pic }><img alt={pic} src={pic} className='pothole-picture'/> </a>
    })
}

  render() {

    let display
    if(this.state.currentPothole) {
      display=<PotholeDetail currentPothole={this.state.currentPothole} collectPotholePhotos={this.collectPotholePhotos}/>
    } else {
      display=
      <main className='App'>

        <h1 className='title'>Pot Spot</h1>
        <h2 className='title'>Denver, CO</h2>

        <div className='form-map-container'>
          <Form addPothole={this.addPothole}/>

          <div className='pothole-form map-placeholder'>
            <Map potholes={this.state.potholes} pictures={this.state.pictures} />
          </div>
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
