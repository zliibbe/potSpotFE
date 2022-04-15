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

  componentDidMount = () => {
    this.buildStatusBoard(this.props.potholes);
  }

  buildStatusBoard = (potholes) => {
    console.log("checking potholes being passed in", potholes)
    const pending = [];
    const inProgress = [];
    const done = [];
    potholes.forEach(pothole => {
      console.log(pothole)
      if(pothole.status === 'pending') {
      //   this.setState({pending: [...this.state.pending, pothole]})
        pending.push(pothole);
      } else if(pothole.status === 'inProgress') {
        inProgress.push(pothole); 
      } else if(pothole.status === 'done') {
        done.push(pothole);
      }
    })
    this.setState({pending: pending});
    this.setState({inProgress: inProgress});
    this.setState({done: done});
  }

  buildStatusBox = (potholes) => {
    console.log("Potholes for buildStatusBox method", potholes)
    return potholes.map(ph => {
      return (
        <div className='pothole' key={ph.id}>
        <p>Pothole ID: {ph.id}</p>
        </div>
      )
    })
  }


  render() {

    // console.log(this.props)
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
