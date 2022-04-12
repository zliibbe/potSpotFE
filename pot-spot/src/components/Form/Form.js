import React from "react"
import './Form.css'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            latitude: '',
            longitude: '',
            description: '',
            pictures: []
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className='pothole-form'>
                <input 
                    type="text"
                    name="latitude"
                    placeholder="Enter Latitude"
                    value={this.state.latitude}
                    onChange={event => handleChange(event)}    
                ></input>

                <input 
                    type="text"
                    name="longitude"
                    placeholder="Enter Longitude"
                    value={this.state.longitude}
                    onChange={event => handleChange(event)}    
                ></input>

                <input 
                    type="text"
                    name="description"
                    placeholder="Describe pothole"
                    value={this.state.description}
                    onChange={event => handleChange(event)}    
                ></input>

                <input 
                    type="text"
                    name="pictures"
                    placeholder="Paste URL of pothole photo"
                    value={this.state.pictures}
                    onChange={event => handleChange(event)}    
                ></input>
            </form>
        )
    }
}

export default Form