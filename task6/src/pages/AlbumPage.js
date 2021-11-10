import React from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import Album from "../components/Album";

const AlbumPage = () => {
  const { albumId } = useParams();
  const fetchAlbums = useSelector(({ fetchAlbums }) => fetchAlbums);
  const albums = JSON.parse(localStorage.getItem('userAlbums'));
  return (<div className="app">
    <div className="app__container">
      <div className="user__details">
        <ul className='content__component '>
          {albums.length && albums.filter(item => item.id === +albumId).length ?
            albums.filter(item => item.id === +albumId).map((album) => <Album key={album.id} album={album} />)
            : fetchAlbums.length && fetchAlbums.filter(item => item.id === +albumId).map((album) => <Album key={album.id} album={album} />)
          }
        </ul>
      </div>
    </div>
  </div>
  );
}

export default AlbumPage;