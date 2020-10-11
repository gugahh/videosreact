import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        this.setState({ term: 'Enviou.' });
    };

    render () {
        return (
            <div className="search-bar ui segment">
                <form className="ui form"
                    onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label for="searchStr">Video Search </label>
                        <input type="text" 
                            name="searchStr"
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                    <div>
                        <label>
                            {`Term: ${this.state.term !== '' ? this.state.term : '(vazio)'}`}
                        </label>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;