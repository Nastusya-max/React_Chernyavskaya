import { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import Button from "./Button";
import Photos from "./Photos";
import { Context } from '../index';
import { setActiveAlbum } from "../store/actionCreators/albums";

function Album({ album }) {
  // const content = useSelector(state => state);
  const activeAlbums = useSelector(({ activeAlbums }) => activeAlbums);
  const fetchPhotos = useSelector(({ fetchPhotos }) => fetchPhotos);
  const addAlbums = useSelector(({ addAlbums }) => addAlbums);
  const addPhotos = useSelector(({ addPhotos }) => addPhotos);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useContext(Context);

  const albumClickHandler = useCallback((album) => {
    if (!activeAlbums.length) {
      dispatch(setActiveAlbum(album));
    } else {
      let isActive = activeAlbums.filter(item => item.id === album.id)
      !isActive.length && dispatch(setActiveAlbum(album))
    }
  }, [activeAlbums, dispatch]);

  const checAuthLink = () => {
    let link = '';
    user.isAuth === 'true' ? link = `${history.location.pathname}/${album.id}` : link = `/albums/${album.id}`
    return link;
  }

  return (
    <div className='content-container'>
      {<li className='li-album' key={album.id} >
        {activeAlbums.filter(item => item.id === album.id).length ?
          <div className='album-container'>
            <Button album={album} />
            <div className='img-container'>
              {addAlbums.filter(item => item.id === album.id).length ?
                addPhotos.filter(item => +item.albumId === album.id).length ?
                  addPhotos.filter(item => +item.albumId === album.id).map(photo => <Photos photo={photo} key={photo.id} />)
                  : 'Please, add a photo to the album'
                : fetchPhotos.filter(item => item.albumId === album.id).map(photo => <Photos photo={photo} key={photo.id} />)}
            </div>
          </div>
          : <div className='title-container'>{console.log(`${history.location.pathname}/${album.id}`)}<Link to={checAuthLink()} className='a'>{album.title}</Link><button className='title' onClick={() => albumClickHandler(album)}>photos</button></div>}
      </li>}
    </div>
  );
}

export default Album;