import React, { Component } from 'react';
import './StatusBoard.css'

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
        <div className='status-pothole' key={ph.id}>
          <div className='image-container'>
          <img className='pothole-image' src={image[0].url}/>
          </div>
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
          <h2 className='status-board-title'>Status Board</h2>
          <h3 className='status-board-title'>Pending</h3>
            <section className='pending status-box'>
              {pending}
            </section>
            <h3 className='status-board-title'>In Progress</h3>
            <section className='in-progress status-box'>
              {inProgress}
            </section>
            <h3 className='status-board-title'>Done</h3>
            <section className='complete status-box'>
              {done}
            </section>
        </div>
    )
  }
}

export default StatusBoard;
