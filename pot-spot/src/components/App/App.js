import React from 'react';
import './App.css';
import PotholeDetail from '../PotholeDetail/PotholeDetail'
import { fetchPotholes, fetchPictures } from '../../apiCalls';
import Map from '../Map/Map';
import StatusBoard from '../StatusBoard/StatusBoard';

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
        data.forEach(pothole => {
          pothole.status = 'pending';
        })
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

  changeStatus = (pothole) => {
    let index = this.state.potholes.findIndex((ph)=>{
      return ph.id === pothole.id
    });

    let newPotholes = [...this.state.potholes]
    let updatePothole = newPotholes[index]

    if(updatePothole.status === 'pending') {
      updatePothole.status = 'inProgress';
      this.setState({potholes: [...newPotholes]})
    } else if (updatePothole.status === 'inProgress') {
      updatePothole.status = 'done';
      this.setState({potholes: [...newPotholes]})
    }
    return
  }


  render() {
    let display
    if(this.state.currentPothole) {
      display=<PotholeDetail currentPothole={this.state.currentPothole} collectPotholePhotos={this.collectPotholePhotos}/>
    } else {
      display=
      <main className='App'>
        <header>
          <h1 className='title'>Pot Spot</h1>
          <h2 className='title'>Denver, CO</h2>
        </header>



        <div className='form-map-container'>
          <div className='pothole-form map-placeholder'>
            <Map potholes={this.state.potholes} pictures={this.state.pictures} />
          </div>
        </div>
        {this.state.potholes[0] && this.state.pictures[0] && <StatusBoard potholes={this.state.potholes} changeStatus={this.changeStatus} pictures={this.state.pictures} />}
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
