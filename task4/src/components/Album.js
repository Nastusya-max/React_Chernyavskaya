import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import Photos from "./Photos";

import { setActiveAlbum } from "../store/actionCreators/albums";

function Album({ album }) {

  const content = useSelector(state => state);
  const dispatch = useDispatch();

  const albumClickHandler = useCallback((album) => {
    if (!content.activeAlbum.length) {
      dispatch(setActiveAlbum(album));
    } else {
      let isActive = content.activeAlbum.filter(item => item.id === album.id)
      !isActive.length && dispatch(setActiveAlbum(album))
    }
  }, [content.activeAlbum, dispatch]);


  return <div className='content-container'>
    {<li key={album.id} >
      {content.activeAlbum.filter(item => item.id === album.id).length ?
        <div className='album-container'>
          <Button album={album} />
          <div className='img-container'>
            {content.photos.filter(item => item.albumId === album.id).map(photo => <Photos photo={photo} key={photo.id} />)}
          </div>
        </div>
        : <div className='title-container' onClick={() => albumClickHandler(album)}>{album.title}</div>} </li>}
  </div>
}

export default Album;