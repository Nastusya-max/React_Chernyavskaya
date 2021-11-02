import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import Photos from "./Photos";

import { setActiveAlbum } from "../store/actionCreators/albums";

function Album({ album }) {
  // const content = useSelector(state => state);
  const activeAlbums = useSelector(({ activeAlbums }) => activeAlbums);
  const fetchPhotos = useSelector(({ fetchPhotos }) => fetchPhotos);
  const addAlbums = useSelector(({ addAlbums }) => addAlbums);
  const addPhotos = useSelector(({ addPhotos }) => addPhotos);

  const dispatch = useDispatch();

  const albumClickHandler = useCallback((album) => {
    if (!activeAlbums.length) {
      dispatch(setActiveAlbum(album));
    } else {
      let isActive = activeAlbums.filter(item => item.id === album.id)
      !isActive.length && dispatch(setActiveAlbum(album))
    }
  }, [activeAlbums, dispatch]);


  return <div className='content-container'>
    {<li key={album.id} >
      {activeAlbums.filter(item => item.id === album.id).length ?
        <div className='album-container'>
          <Button album={album} />
          <div className='img-container'>
            {addAlbums.filter(item => item.id === album.id).length ? 
            addPhotos.length ?
            addPhotos.filter(item => item.albumId === album.id).map(photo => <Photos photo={photo} key={photo.id} />)
            : 'Please, add a photo to the album'
            : fetchPhotos.filter(item => item.albumId === album.id).map(photo => <Photos photo={photo} key={photo.id} />)}
          </div>
        </div>
        : <div className='title-container' onClick={() => albumClickHandler(album)}>{album.title}</div>}
    </li>}
  </div>
}

export default Album;