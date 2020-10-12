import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { termoBusca: ''};

    // Metodo de callback que recebe o termo da busca
    onTermSubmit = (term) => {
        console.log ("O Termo de Busca é: " + term);
    };

    render () {

        return (
            <div className="ui container">
                <SearchBar
                    onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
};

export default App;