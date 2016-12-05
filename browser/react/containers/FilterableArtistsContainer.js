import React, {Component} from 'react';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';




export default class FilterableArtistsContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
        this.handleInput = this.handleInput.bind(this);
    }


    handleInput(event){
        this.setState({input: event.target.value});
    }

    render(){

        let filteredArtists = this.props.artists.filter(artist=>{
            return artist.name.match(this.state.input);
        });

        return(
            <div>
                <FilterInput handleInput={this.handleInput}/>
                <Artists artists={filteredArtists} />
            </div>
        );

    }

}