import './form.css';
import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { useContext } from 'react';
import dataTypeContext from '../../context/dataTypeContext';

import { addNewAlbums } from '../../store/actionCreators/albums';
import { addNewPhotos } from '../../store/actionCreators/photos';
import { useDispatch, useSelector } from "react-redux";

function Form({ active, setActive }) {
  const addAlbums = useSelector(({ addAlbums }) => addAlbums);
  const fetchAlbums = useSelector(({ fetchAlbums }) => fetchAlbums);
  const addPhotos = useSelector(({ addPhotos }) => addPhotos);
  const fetchPhotos = useSelector(({ fetchPhotos }) => fetchPhotos);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmitAlbum = (data) => {
    document.querySelector('#title-label').innerHTML = 'Enter the title of the album (required)';
    data['userId'] = 1;
    let userAlbums = []
    if (addAlbums.length) {
      // console.log(addAlbums)
      if (addAlbums.filter(item => item.title === data.title).length) {
        document.querySelector('#title-label').innerHTML = 'Album with the same name already exists';
      } else {
        data['id'] = addAlbums[addAlbums.length - 1].id + 1;
        userAlbums = JSON.parse(localStorage.getItem('userAlbums'))
        userAlbums.push(data)
        localStorage.setItem('userAlbums', JSON.stringify(userAlbums))
        dispatch(addNewAlbums(data));
      }
    } else {
      let albums = JSON.parse(localStorage.getItem('userAlbums'))
      if (albums) {
        if (albums.filter(item => item.title === data.title).length) {
          document.querySelector('#title-label').innerHTML = 'Album with the same name already exists';
        } else {
          data['id'] = albums[albums.length - 1].id + 1;
          userAlbums = JSON.parse(localStorage.getItem('userAlbums'))
          userAlbums.push(data)
          localStorage.setItem('userAlbums', JSON.stringify(userAlbums))
          dispatch(addNewAlbums(data));
        }
      } else {
        data['id'] = fetchAlbums.length + 1;
        userAlbums.push(data)
        localStorage.setItem('userAlbums', JSON.stringify([data]));
        dispatch(addNewAlbums(data));
      }
    }
  };

  const onSubmitPhoto = (data) => {
    let userPhotos = []
    let photos = JSON.parse(localStorage.getItem('userPhotos'))
    let userAlbums = JSON.parse(localStorage.getItem('userAlbums'))
    document.querySelector('#albumTitle-label').innerHTML = 'Enter the title of the album (required)';
    if (userAlbums) {
      if (addPhotos.length) {
        if (addAlbums.filter(item => item.title === data.albumTitle).length) {
          data['albumId'] = addAlbums.filter(item => item.title === data.albumTitle).map(albim => albim.id);
          data['id'] = photos[photos.length - 1].id + 1;
          userPhotos = JSON.parse(localStorage.getItem('userPhotos'))
          userPhotos.push(data)
          localStorage.setItem('userPhotos', JSON.stringify(userPhotos))
          dispatch(addNewPhotos(data));
          console.log(addPhotos)
        }
      } else {
        if (addAlbums.filter(item => item.title === data.albumTitle).length) {
          data['albumId'] = addAlbums.filter(item => item.title === data.albumTitle).map(albim => albim.id);
          if (photos) {
            data['id'] = photos[photos.length - 1].id + 1;
            userPhotos = JSON.parse(localStorage.getItem('userPhotos'))
            userPhotos.push(data)
            localStorage.setItem('userPhotos', JSON.stringify(userPhotos))
            dispatch(addNewPhotos(data));
            console.log(addPhotos)
          } else {
            data['id'] = fetchAlbums.length + 1;
            userPhotos.push(data)
            localStorage.setItem('userPhotos', JSON.stringify([data]));
            dispatch(addNewPhotos(data));
          }
        }
      }
    } else {
      console.log('addPhotos')
    }
  };

  return <div>
    <Modal active={active} setActive={setActive}>
      {useContext(dataTypeContext) === 'album' ?
        <div className='form-container'>
          <form onSubmit={handleSubmit(onSubmitAlbum)}>
            <label id='title-label' htmlFor="title">Enter the title of the album (required)</label><br />
            <input id='title' {...register("title")} placeholder="Title" required></input><br />
            <button className='submit-btn' type="submit">Add album</button>
          </form>
        </div>
        :
        <div className='form-container'>
          <form onSubmit={handleSubmit(onSubmitPhoto)}>
            <input id='albumTitle' {...register("albumTitle")} placeholder="album title" required></input><br />
            <label id='albumTitle-label' htmlFor="albumTitle">Enter the title of the album (required)</label><br />
            <input id='url' {...register("url")} placeholder="url" required></input><br />
            <label id='url-label' htmlFor="url">Enter the url of the photo (required)</label><br />
            <button className='submit-btn' type="submit">Add photo</button>
          </form>
        </div>
      }
    </Modal>
  </div>
}

export default Form;