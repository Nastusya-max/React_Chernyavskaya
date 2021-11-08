import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import Album from "../components/Album";

const AlbumPage = () => {
  const { albumId } = useParams();
  const fetchAlbums = useSelector(({ fetchAlbums }) => fetchAlbums);

  // const album = (fetchAlbums && fetchAlbums).filter(item => item.id === +albumId);
  // console.log(album);
  // const { name, username, email, address: { city }, company: { catchPhrase } } = album;
  return (<div className="app">
  <div className="app__container">
    <div className="user__details">
      <ul className='content__component '>
    {fetchAlbums.length && fetchAlbums.filter(item => item.id === +albumId).map((album) => <Album key={album.id} album={album}/>)}</ul>
    </div></div></div>
  );
}

export default AlbumPage;