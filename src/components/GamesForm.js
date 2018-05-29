import React, {Component} from 'react';

const tags = [
    {
        _id: 1,
        name: "dice"
    }, {
        _id: 2,
        name: "economic"
    }, {
        _id: 3,
        name: "family"
    }
]

const genres = [
    {
        _id: 1,
        name: "abstract"
    }, {
        _id: 2,
        name: "euro"
    }, {
        _id: 2,
        name: "emeritrash"
    }
]

class GamesForm extends Component {
    state = {
        name: '',
        description: '',
        price: 0,
        duration: 0,
        players: '',
        featured: true,
        tags: [],
        genre: 1
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

    handleGenreChange = genre => this.setState({genre: genre._id})

    toggleTag = tag => this
        .state
        .tags
        .includes(tag._id)
        ? this.setState({
            tags: this
                .state
                .tags
                .filter(id => id !== tag._id)
        })
        : this.setState({
            tags: [
                ...this.state.tags,
                tag._id
            ]
        });

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
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
                    <label htmlFor="tags">Tags</label>
                    {tags.map(tag => (
                        <div key={tag._id} className="inline field">
                            <input
                                type="checkbox"
                                checked={this
                                .state
                                .tags
                                .includes(tag._id)}
                                onChange={() => this.toggleTag(tag)}/>
                            <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>

                        </div>
                    ))}
                </div>
                <div className="field">
                    <label htmlFor="genres">Genres</label>
                    {genres.map(genre => (
                        <div class="inline field" key={genre._id}>
                            <div class="ui radio checkbox"><input
                                type="radio"
                                name={`genre-{genre._id}`}
                                checked={this.state.genre == genre._id}
                                name="genres"
                                onChange={() => this.handleGenreChange(genre)}/>
                                <label htmlFor={`genre-{genre._id}`}>{genre.name}</label>
                            </div>
                        </div>
                    ))}

                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

export default GamesForm;