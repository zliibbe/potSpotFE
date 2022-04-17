import React from "react"
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super()
        this.state = {
            latitude: '',
            longitude: '',
            description: '',
            pictures: []
        }
    }
    
    submitPothole = (event) => {
        event.preventDefault();
        const newPothole = {
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            description: this.state.description,
            pictures: [this.state.pictures]
        }
        this.props.addPothole(newPothole);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({
            latitude: '',
            longitude: '',
            description: '',
            pictures: []
        })
    }

    addPothole = () => {
        this.props.addPothole(this.state)
      }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className='pothole-form'>
                <p>Submit New Pothole:</p>
                <input 
                    type="text"
                    name="latitude"
                    placeholder="Enter Latitude"
                    value={this.state.latitude}
                    onChange={event => this.handleChange(event)}    
                />

                <input 
                    type="text"
                    name="longitude"
                    placeholder="Enter Longitude"
                    value={this.state.longitude}
                    onChange={event => this.handleChange(event)}    
                />

                <input 
                    type="text"
                    name="description"
                    placeholder="Describe pothole"
                    value={this.state.description}
                    onChange={event => this.handleChange(event)}    
                />

                <input 
                    type="text"
                    name="pictures"
                    placeholder="Paste URL of pothole photo"
                    value={this.state.pictures}
                    onChange={event => this.handleChange(event)}    
                />

                <button onClick={event => this.submitPothole(event)}>Submit</button>
            </form>
        )
    }
}

export default Form