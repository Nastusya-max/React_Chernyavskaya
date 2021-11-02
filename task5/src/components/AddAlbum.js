import { useCallback } from "react";
import { useDispatch } from "react-redux";
// import { addNewAlbums } from "../store/actionCreators/albums";
import { addPhotos } from "../store/actionCreators/photos";

// import albums from '../constants/albums.json';
import photos from '../constants/photos.json';

import React, { useState } from "react";
import FormAlbum from "./Modal/FormAlbum";
import FormPhoto from "./Modal/FormPhoto";


function AddAlbum() {
  const dispatch = useDispatch();
  const [formAlbumActive, setformAlbumActive] = useState(false)
  const [formPhotoActive, setformPhotoActive] = useState(false)

  // const addPhotoHandler = useCallback(() => { dispatch(addPhotos(photos)) }, [dispatch]);

  return <div className='addAlbum-container'>
    <button onClick={() => setformAlbumActive(true)}>Add album</button>
    <button onClick={() => setformPhotoActive(true)}>Add photo</button>
    <FormAlbum  active={formAlbumActive} setActive={setformAlbumActive}/>
    <FormPhoto  active={formPhotoActive} setActive={setformPhotoActive}/>
  </div>
}

export default AddAlbum;