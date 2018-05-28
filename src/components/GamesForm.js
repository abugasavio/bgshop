import React, {Component} from 'react';

class GamesForm extends Component {
    state = {
        name: '',
        description: ''
    }

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="">Description</label>
                    <textarea
                        name="description"
                        onChange={this.handleChange}
                        cols="30"
                        rows="10"
                        placeholder="Description"></textarea>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

export default GamesForm;