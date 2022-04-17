import React from "react"
import './DisplayModal.css'

const DisplayModal = (props) => {
    
    
    return (
       <section className="display-modal">
           <div className="message-container">
            <button className="modal-button" onClick={() => props.changeMessage('')}>X</button>
                <div className="message">
                    <h3 >{props.message.message || props.message.error}</h3>
                </div>
           </div>
       </section> 
    )
}

export default DisplayModal