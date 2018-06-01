/* eslint class-methods-use-this: 0 */
import React, {Component} from 'react';
import ReactImageFallback from 'react-image-fallback';
import PropTypes from 'prop-types';
import FormInlineError from './FormInlineError';

class GamesForm extends Component {
    state = {
        data: {
            name: '',
            description: '',
            price: 0,
            duration: 0,
            players: '',
            featured: true,
            publisher: 0,
            thumbnail: ""
        },
        errors: {}

    }

    validate(data) {
        const errors = {}
        if (!data.name) {
            errors.name = 'Name field is required'
        }
        if (!data.players) {
            errors.players = 'Players are required'
        }
        if (!data.publishers) {
            errors.publishers = 'Publisher field is required'
        }
        if (!data.thumbnail) {
            errors.thumbnail = 'Thumbnail are required'
        }
        if (data.price <= 0) {
            errors.price = 'Price has to be > 0'
        }

        if (data.duration <= 0) {
            errors.duration = 'Too short.'
        }

        return errors
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data)
        this.setState({errors})
    }

    handleStringChange = e => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        }
    })

    handleNumberChange = e => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: parseInt(e.target.value, 10)
        }
    })

    handleCheckboxChange = e => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.checked
        }

    })

    render() {
        const {data, errors} = this.state;
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <div
                            className={errors.name
                            ? "field error"
                            : "field"}>
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                value={this.state.name}
                                onChange={this.handleStringChange}/>
                            <FormInlineError content={errors.name} type="error"/>
                        </div>
                        <div
                            className={errors.description
                            ? "field error"
                            : "field"}>
                            <label htmlFor="">Description</label>
                            <textarea
                                name="description"
                                onChange={this.handleStringChange}
                                cols="30"
                                rows="10"
                                placeholder="Description"/>
                            <FormInlineError content={errors.description} type="error"/>
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
                <div
                    className={errors.thumbnail
                    ? "field error"
                    : "field"}>
                    <label htmlFor="">Thumbnail</label>
                    <input
                        type="text"
                        name="thumbnail"
                        placeholder="thumbnail"
                        value={this.state.thumbnail}
                        onChange={this.handleStringChange}/>
                    <FormInlineError content={errors.thumbnail} type="error"/>
                </div>

                <div className="three fields">
                    <div
                        className={errors.price
                        ? "field error"
                        : "field"}>
                        <label htmlFor="">Price(in cents)</label>
                        <input
                            type="number"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleNumberChange}/>
                        <FormInlineError content={errors.price} type="error"/>
                    </div>
                    <div
                        className={errors.duration
                        ? "field error"
                        : "field"}>
                        <label htmlFor="">Duration(in min)</label>
                        <input
                            type="text"
                            name="duration"
                            value={this.state.duration}
                            onChange={this.handleNumberChange}/>
                        <FormInlineError content={errors.duration} type="error"/>
                    </div>
                    <div
                        className={errors.players
                        ? "field error"
                        : "field"}>
                        <label htmlFor="">Players</label>
                        <input
                            type="text"
                            name="players"
                            value={this.state.players}
                            onChange={this.handleStringChange}/>
                        <FormInlineError content={errors.players} type="error"/>
                    </div>

                </div>
                <div
                    className={errors.featured
                    ? "field error inline"
                    : "field inline"}>
                    <input
                        type="checkbox"
                        id="featured"
                        name="featured"
                        checked={this.state.featured}
                        onChange={this.handleCheckboxChange}/>
                    <label htmlFor="featured">Featured?</label>
                    <FormInlineError content={errors.featured} type="error"/>
                </div>
                <div
                    className={errors.publishers
                    ? "field error"
                    : "field"}>
                    <select name="publishers" id="publishers" onChange={this.handleNumberChange}>
                        <option value="">Choose Publisher</option>
                        {this
                            .props
                            .publishers
                            .map(publisher => (
                                <option value={publisher._id} key={publisher._id}>{publisher.name}</option>
                            ))}
                    </select>
                    <FormInlineError content={errors.publishers} type="error"/>
                </div>
                <div className="ui fluid buttons">
                    <button className="ui button primary" type="submit">Submit</button>
                    <div className="or"/>
                    <button className="ui button" onClick={this.props.hideGameForm}>Cancel</button>
                </div>
            </form>
        )
    }
}

GamesForm.propTypes = {
    hideGameForm: PropTypes.func.isRequired,
    publishers: PropTypes.array.isRequired
};

export default GamesForm;