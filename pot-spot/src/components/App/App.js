import React from 'react';
import './App.css';
import PotholeDetail from '../PotholeDetail/PotholeDetail'
import { fetchPotholes, fetchPictures, postNewPothole, deletePothole } from '../../apiCalls';
import Map from '../Map/Map';
import StatusBoard from '../StatusBoard/StatusBoard';
import { Route, Switch, Redirect } from 'react-router-dom'
import Pothole from '../Pothole/Pothole'
import Header from '../Header/Header';
import Form from '../Form/Form';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      potholes: [],
      currentPothole: '',
      pictures: []
    }
  }

  loadPotholes = () => {
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

  componentDidMount = () => {
    this.loadPotholes()
  }

  addPothole = (newPothole) => {
    postNewPothole(newPothole)
    this.setState({ potholes: [...this.state.potholes, newPothole] })
    
  }

  findPothole = (id) => {

    const singlePothole = this.state.potholes.find(ph => ph.id === id)
    this.setState({ currentPothole: singlePothole })
  }

  collectPotholePhotos = () => {
    return this.state.currentPothole.pictures.map(pic => {
      return <a href={pic}><img alt={pic} src={pic} className='pothole-picture' /> </a>
    })
  }

  changeStatus = (pothole) => {
    let index = this.state.potholes.findIndex((ph) => {
      return ph.id === pothole.id
    });

    let newPotholes = [...this.state.potholes]
    let updatePothole = newPotholes[index]

    if (updatePothole.status === 'pending') {
      updatePothole.status = 'inProgress';
      this.setState({ potholes: [...newPotholes] })
    } else if (updatePothole.status === 'inProgress') {
      updatePothole.status = 'done';
      this.setState({ potholes: [...newPotholes] })
    }
    return
  }

  removePothole = (id) => {
    deletePothole(id)
    .then(response => {
      console.log(response)
    })
    .then(() => {
      this.loadPotholes()

    })
  } 


  render() {
    return (
      <main className='app'>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route
            exact path='/home'
            render={() => {
              return (
                <React.Fragment>
                <Header />
                <Form addPothole={this.addPothole}/>
                <Map potholes={this.state.potholes} pictures={this.state.pictures} />
                </React.Fragment>
              )
            }} />

          <Route
            exact path='/potholes/:id'
            render={({match}) => {
              let id = parseInt(match.params.id);
              let pothole = this.state.potholes.find(ph => ph.id === id)
              let potholePictures = this.state.pictures.filter(pic => pic.pothole_id === id)
              return (
                <React.Fragment>
                <Header home={true} />
                <Pothole pothole={pothole} potholePictures={potholePictures} removePothole={this.removePothole}/>
                </React.Fragment>
              )
            }} />

          <Route
            exact path='/statusboard'
            render={() => {
              return (
                <React.Fragment>
                <Header home={true}/>
                <StatusBoard potholes={this.state.potholes} changeStatus={this.changeStatus} pictures={this.state.pictures} />
                </React.Fragment>
              )
            }} />

        </Switch>
      </main>
    )
  }
}

export default App;
