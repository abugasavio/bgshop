import React, {Component} from 'react';

class GamesForm extends Component {
    state = {
        name: ''
    }
    handleNameChange = e => this.setState({name: e.target.value})

    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label htmlFor=""></label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

export default GamesForm;