import React from 'react';
import { Link } from 'react-router-dom';
import StatusUpdater from '../StatusUpdater/StatusUpdater.js'
import './StatusBoard.css'

function StatusBoard(props) {

  const buildStatusBox = (potholes) => {
    let image;
    if (props.potholes[0] && props.pictures[0]){
    return potholes.map(ph => {
      image = props.pictures.filter(pic => pic.pothole_id === ph.id)
      return (
        <div className='status-pothole' key={ph.id}>
          <div className='image-container'>
            <img className='pothole-image' src={image[0].url} alt="Pothole" />
          </div>
          <h4 className="pothole-name">Pothole #{ph.id}</h4>
          <p className="pothole-description">{ph.description}</p>
          <p className={`${ph.status} status`}>
            Current Status:
            {ph.status === 'pending' ? ' Pending' : ''}
            {ph.status === 'inProgress' ? ' Being worked on' : ''}
            {ph.status === 'done' ? ' Done' : ''}
          </p>
          <Link to={`/potholes/${ph.id}`}>
          <button>Manage Pothole</button>
          </Link>
          {ph.status !== 'done' ? <StatusUpdater changeStatus={props.changeStatus} pothole={ph} /> : ''}
        </div>

      )
    })}
  }


  let pending = buildStatusBox(props.potholes.filter(pothole => pothole.status === 'pending'));
  let inProgress = buildStatusBox(props.potholes.filter(pothole => pothole.status === 'inProgress'));
  let done = buildStatusBox(props.potholes.filter(pothole => pothole.status === 'done'));


    return (
      <div className='status-board'>
        <h2 className='status-board-title'>Status Board</h2>
        <h3 className='status-board-title'>Pending</h3>
        <section className='status-box'>
          {pending}
        </section>
        <hr />
        <h3 className='status-board-title'>In Progress</h3>
        <section className='status-box'>
          {inProgress}
        </section>
        <hr />
        <h3 className='status-board-title'>Done</h3>
        <section className='status-box'>
          {done}
        </section>
      </div>
    )

}

export default StatusBoard;
