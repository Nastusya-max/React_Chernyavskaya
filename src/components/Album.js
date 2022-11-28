import { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import Button from "./Button";
import Photos from "./Photos";
import { Context } from '../index';
import { setActiveAlbum } from "../store/actionCreators/albums";

function Album({ album }) {
  const activeAlbums = useSelector(({ activeAlbums }) => activeAlbums);
  const fetchPhotos = useSelector(({ fetchPhotos }) => fetchPhotos);
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
    user.isAuth ? link = `${history.location.pathname}/${album.id}` : link = `/albums/${album.id}`
    return link;
  }
  let albums = JSON.parse(localStorage.getItem('userAlbums'))
  let photos = JSON.parse(localStorage.getItem('userPhotos'))
  return (
    <div className='content-container'>
      {<li className='li-album' key={album.id} >
        {activeAlbums.filter(item => item.id === album.id).length ?
          <div className='album-container'>
            <Button album={album} />
            <div className='img-container'>
              {(albums && albums.filter(item => item.id === album.id).length) ?
                (photos && photos.filter(item => +item.albumId === album.id).length) ?
                  photos.filter(item => +item.albumId === album.id).map(photo => <Photos photo={photo} key={photo.id} />)
                  : 'Please, add a photo to album'
                : fetchPhotos.filter(item => item.albumId === album.id).map(photo => <Photos photo={photo} key={photo.id} />)
              }
            </div>
          </div>
          : <div className='title-container'>
            <Link to={checAuthLink()} className='album-title'>{album.title}</Link>
            <button className='btn-photos' onClick={() => albumClickHandler(album)}>photos</button>
          </div>
        }
      </li>}
    </div>
  );
}

export default Album;