import React, { Component } from 'react'

class StatusBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: [],
      inProgress: [],
      done: []
    }
  }

  buildStatusBoard = (potholes) => {

    potholes.forEach(pothole => {
      this.setState({[pothole.status]: pothole});
    })
  }

  buildStatusBox = (potholes) => {
    console.log(potholes)
    return potholes.map(ph => {
      return (
        <div className='pothole' key={ph.id}>
        <p>Pothole ID: {ph.id}</p>
        </div>
      )
    })
  }

  render() {

    this.buildStatusBoard(this.props.potholes);
    console.log(this.props)
    let pending = this.buildStatusBox(this.state.pending);
    let inProgress = this.buildStatusBox(this.state.inProgress);
    let done = this.buildStatusBox(this.state.done);

    return (
        <div className='status-board'>
          <h2>Status Board</h2>
            <section className='pending status-box'>
            {pending}
            </section>
            <section className='in-progress status-box'>
            {inProgress}
            </section>

            <section className='complete status-box'>
            {done}
            </section>
        </div>
    )
  }

}


export default StatusBoard;
