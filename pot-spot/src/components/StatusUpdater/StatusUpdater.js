import React from 'react'

const StatusUpdater = (props) => {

    return (
        <div>
            <button className="change-status" onClick={() => props.changeStatus(props.pothole)}> Change Status </button>
        </div>
    )
}


export default StatusUpdater;
