import React, { useState, useEffect } from "react";
import Album from "./Album";

function Content() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch('https://jsonplaceholder.typicode.com/albums').then((res) => {
        return res.json();
      }).then(data => setAlbums(data));
    };
    fetchData();
  }, []);

  return <div className="user__details">
    <ul className='content__component text'>{albums.map(album => <Album album={album} key={album.id} />)}</ul>
  </div>
}

export default Content;