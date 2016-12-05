import React from 'react';
import Songs from './Songs';
import axios from 'axios';
import SongSelectorContainer from '../containers/SongSelectorContainer';

export default class Playlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playlist: ""
		}
	}

	componentWillReceiveProps(nextProps) {
		this.selectPlaylist(nextProps.routeParams.playlistId)
	}

	componentDidMount() {
		this.selectPlaylist(this.props.routeParams.playlistId)
	}

	selectPlaylist (playlistId) {
      axios.get(`/api/playlists/${playlistId}`)
      .then(res => res.data)
      .then(playlist => this.setState({playlist}));
  }

	render() {
		let playlist = this.state.playlist;
	return <div>
	  <h3>{ playlist.name }</h3>
	  <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
	  { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
	  <hr />
	<SongSelectorContainer playlistId={playlist.id} addToPlaylist={this.props.addToPlaylist}/>
	</div>
	}
}