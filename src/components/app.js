import React from 'react';
import SearchBar from './search-bar';
import youtube from '../apis/youtube';


export default class App extends React.Component {

    onTermSubmit = (term) => {
        youtube.get('/search',{
            params: {
                q: term
            }
        });
    };

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
} 