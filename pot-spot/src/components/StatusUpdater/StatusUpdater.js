import React from 'react'

const StatusUpdater = (props) => {

    return (
        <div>
            <button onClick={() => props.changeStatus(props.pothole)}> Change Status </button>
        </div>
    )
}


export default StatusUpdater;
