import React, { Component } from 'react';

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
    const pending = [];
    const inProgress = [];
    const done = [];
    potholes.forEach(pothole => {
      if(pothole.status === 'pending') {
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
    let image;
    return potholes.map(ph => {
      image = this.props.pictures.filter(pic => pic.pothole_id === ph.id)
      console.log("Image", typeof image[0])
      return (
        <div className='pothole' key={ph.id}>
          <img src={image[0].url}/>
          <p>{ph.description}</p>
        </div>
      )
    })
  }


  

  render() {
    let pending = this.buildStatusBox(this.state.pending);
    let inProgress = this.buildStatusBox(this.state.inProgress);
    let done = this.buildStatusBox(this.state.done);

    return (
        <div className='status-board'>
          <h2>Status Board</h2>
            <section className='pending status-box'>
              <h3>Pending</h3>
              {pending}
            </section>
            <section className='in-progress status-box'>
              <h3>In Progress</h3>
              {inProgress}
            </section>
            <section className='complete status-box'>
              <h3>Done</h3>
              {done}
            </section>
        </div>
    )
  }
}

export default StatusBoard;
