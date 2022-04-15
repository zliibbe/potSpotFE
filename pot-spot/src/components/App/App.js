import React from 'react';
import './App.css';
import PotholeContainer from '../PotholeContainer/PotholeContainer';
import Form from '../Form/Form'
import PotholeDetail from '../PotholeDetail/PotholeDetail'
import { fetchPotholes } from '../../apiCalls';
import Map from '../Map/Map';
import StatusBoard from '../StatusBoard/StatusBoard';

// AIzaSyDjRoZ4cq5mC6f_bIYDVFwcZDnQluNKI6Q
// AIzaSyCNdw_FpGRuXLBOf6iS_K7qYCg3YrsRti8

class App extends React.Component {
  constructor () {
    super();
    this.state = { potholes: [],
        currentPothole: '',
    }
  }

  componentDidMount = () => {
    fetchPotholes()
      .then(data => {
        console.log(data)
        data.forEach(pothole => {
          pothole.status = 'pending';
        })

        console.log(data)
        return this.setState({
          potholes: data
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
    if(pothole.status === 'pending') {
      pothole.status = 'inProgress';
    } else if (pothole.status === 'inProgress') {
      pothole.status = 'done';
    }
  }


  render() {
    console.log("Checking if has status", this.state.potholes)
    let display
    if(this.state.currentPothole) {
      display=<PotholeDetail currentPothole={this.state.currentPothole} collectPotholePhotos={this.collectPotholePhotos}/>
    } else {
      display=
      <main className='App'>

        <h1 className='title'>Pot Spot</h1>
        <h2>Denver, CO</h2>

        <div className='form-map-container'>
          <Form addPothole={this.addPothole}/>

          <div className='pothole-form map-placeholder'>
            <Map potholes={this.state.potholes} />
          </div>
            {this.state.potholes[0] && <StatusBoard potholes={this.state.potholes} changeStatus={this.changeStatus} />}
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
