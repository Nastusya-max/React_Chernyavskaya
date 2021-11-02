import { useCallback } from "react";
import { useDispatch } from "react-redux";
// import { addNewAlbums } from "../store/actionCreators/albums";
import { addPhotos } from "../store/actionCreators/photos";

// import albums from '../constants/albums.json';
import photos from '../constants/photos.json';

import React, { useState } from "react";
import Form from "./Modal/Form";


function AddAlbum() {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false)

  // const addAlbumHandler = useCallback(() => { dispatch(addNewAlbums(albums)) }, [dispatch]);
  const addPhotoHandler = useCallback(() => { dispatch(addPhotos(photos)) }, [dispatch]);

  return <div className='addAlbum-container'>
    {/* <button onClick={() => addAlbumHandler()}>Add album</button> */}
    <button onClick={() => setModalActive(true)}>Add album</button>
    <button onClick={() => addPhotoHandler()}>Add photo</button>
    <Form  active={modalActive} setActive={setModalActive}/>
  </div>
}

export default AddAlbum;