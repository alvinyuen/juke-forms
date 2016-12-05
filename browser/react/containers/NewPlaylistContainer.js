import React, {Component} from 'react';
import axios from 'axios';
import NewPlayList from '../components/NewPlayList';




export default class NewPlayListContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            edited: false,
            input: '',
            disabled: true,
            nameWarning: false,
            lengthWarning: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    handleInput(event){
        console.log('playlist name:', event.target.value);
        if(!event.target.value.length && this.state.edited){
            this.setState({nameWarning: true,
                        disabled:true});
        }

        if(event.target.value.length>0 && event.target.value.length <= 16){
            this.setState({
                disabled:false,
                nameWarning: false,
                lengthWarning: false});

        }
        if(event.target.value.length>16){
            this.setState({lengthWarning: true,
                            disabled: true});
        }
        this.setState({input: event.target.value});
        this.setState({edited: true});
    }

    

    onSubmit(event){
        event.preventDefault();
        console.log('value of the form:', this.state.input);
        this.props.postPlaylist(this.state.input);
        this.setState({input: ""});
        this.setState({edited: false});
    }

    render(){


        return(
            <div>
                <NewPlayList
                    handleInput={this.handleInput}
                    onSubmit={this.onSubmit}
                    playlistName={this.state.input}
                    disabled ={this.state.disabled}
                    lengthWarning={this.state.lengthWarning}
                    nameWarning={this.state.nameWarning}
                />
            </div>
        );

    }

}