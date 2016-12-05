import axios from 'axios';
import React from 'react';
import SongSelector from '../components/SongSelector';

export default class SongSelectorContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			songs: [],
			selectedSongId : 0
		}
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentDidMount() {
		axios.get('/api/songs/')
			.then(res => res.data)
			.then(songs => {
				this.setState({songs})
		})
	}

	handleChange(event) {
		this.setState({selectedSongId: event.target.value});
	}

	submit(event) {
		event.preventDefault();
		this.props.addToPlaylist(this.props.playlistId, this.state.selectedSongId);
	}

	render() {
		return <SongSelector songs={this.state.songs} handleChange={this.handleChange} submit={this.submit} />
	}


}