import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/albums').then((res) => {
      return res.json();
    }).then(data => this.setState({ albums: data }))
  }

  render() {
    return <div className="user__details">
      <div className="content__component text">{this.state.albums.map(album => <li key={album.id}>{album.title}</li>)}</div>
    </div>
  }
}

export default Content;