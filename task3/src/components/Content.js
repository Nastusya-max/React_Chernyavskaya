import React from "react";
import Album from "./Album";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/albums').then((res) => {
      return res.json();
    }).then(data => this.setState({ albums: data }));
  }

  render() {
    return <div className="user__details">
     <ul className='content__component text'>{this.state.albums.map(album => <Album album={album}  key={album.id}/>)}</ul> </div>
  }
}

export default Content;