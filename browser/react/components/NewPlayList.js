import React, {Component} from 'react';


const NewPlayList = ({onSubmit, handleInput, playlistName, disabled, nameWarning, lengthWarning}) => {
    return(
        <div className="well">
        { nameWarning ?
        <div className="alert alert-warning">Please enter a name</div>
        : null }
        { lengthWarning ?
        <div className="alert alert-warning">Title is too long</div>
        :null}
  <form className="form-horizontal" onSubmit={onSubmit}>
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input value={playlistName} className="form-control" type="text" onChange={handleInput}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button disabled={disabled} type="submit" className="btn btn-success">Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
    )
}

export default NewPlayList;