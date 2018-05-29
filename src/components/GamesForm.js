import React, {Component} from 'react';
import ReactImageFallback from 'react-image-fallback';
import PropTypes from 'prop-types';

class GamesForm extends Component {
    state = {
        name: '',
        description: '',
        price: 0,
        duration: 0,
        players: '',
        featured: true,
        publisher: 0,
        thumbnail: ""
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    handleStringChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    handleNumberChange = e => this.setState({
        [e.target.name]: parseInt(e.target.value, 10)
    })

    handleCheckboxChange = e => this.setState({
        [e.target.name]: e.target.checked
    })

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <div className="field">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                value={this.state.name}
                                onChange={this.handleStringChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="">Description</label>
                            <textarea
                                name="description"
                                onChange={this.handleStringChange}
                                cols="30"
                                rows="10"
                                placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div className="four wide column">
                        <ReactImageFallback
                            src={this.state.thumbnail}
                            fallbackImage="http://via.placeholder.com/250x250"
                            className="ui image"/>
                    </div>
                </div>
                <br/>
                <div className="field">
                    <label htmlFor="">Thumbnail</label>
                    <input
                        type="text"
                        name="thumbnail"
                        placeholder="thumbnail"
                        value={this.state.thumbnail}
                        onChange={this.handleStringChange}/>
                </div>

                <div className="three fields">
                    <div className="field">
                        <label htmlFor="">Price(in cents)</label>
                        <input
                            type="number"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleNumberChange}/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Duration(in min)</label>
                        <input
                            type="text"
                            name="duration"
                            value={this.state.duration}
                            onChange={this.handleNumberChange}/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Players</label>
                        <input
                            type="text"
                            name="players"
                            value={this.state.players}
                            onChange={this.handleStringChange}/>
                    </div>

                </div>
                <div className="inline field">
                    <input
                        type="checkbox"
                        id="featured"
                        name="featured"
                        checked={this.state.featured}
                        onChange={this.handleCheckboxChange}/>
                    <label htmlFor="featured">Featured?</label>
                </div>
                <div className="field">
                    <select name="publishers" id="publishers" onChange={this.handleNumberChange}>
                        <option value="">Choose Publisher</option>
                        {this
                            .props
                            .publishers
                            .map(publisher => (
                                <option value={publisher._id} key={publisher._id}>{publisher.name}</option>
                            ))}
                    </select>
                </div>
                <div className="ui large buttons">
                    <button className="ui button" type="submit">Submit</button>
                    <div className="or"></div>
                    <button className="ui button" onClick={this.props.hideGameForm}>Cancel</button>
                </div>
            </form>
        )
    }
}

GamesForm.propTypes = {
    hideGameForm: PropTypes.func.isRequired
};

export default GamesForm;