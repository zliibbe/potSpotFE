import React from 'react';
import './App.css';
import PotholeDetail from '../PotholeDetail/PotholeDetail'
import { fetchPotholes, fetchPictures } from '../../apiCalls';
import Map from '../Map/Map';
import StatusBoard from '../StatusBoard/StatusBoard';
import { Route, Switch, Redirect } from 'react-router-dom'
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


  render() {
    // let display
    // if (this.state.currentPothole) {
    //   display = <PotholeDetail currentPothole={this.state.currentPothole} collectPotholePhotos={this.collectPotholePhotos} />
    // } else {
    //   display =
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
                <Map potholes={this.state.potholes} pictures={this.state.pictures} />
                <StatusBoard potholes={this.state.potholes} changeStatus={this.changeStatus} pictures={this.state.pictures} />
                </React.Fragment>
              )
            }} />

          <Route
            exact path='potholes/:id'
            render={(match) => {
              return (
                <Header />

              )
            }} />

        </Switch>

          <Route exact path="/" render={() => <Header />} />
          <Route exact path="/" render={() => <Form />} />
          <Route exact path="/" render={() => <Map potholes={this.state.potholes} pictures={this.state.pictures} />} />
          <Route exact path="/" render={() => <StatusBoard potholes={this.state.potholes} changeStatus={this.changeStatus} pictures={this.state.pictures} /> } />

      </main>
    )
  }
  // return (
  //   <main>
  //     {display}
  //   </main>
  // )
  //   };
}

export default App;
