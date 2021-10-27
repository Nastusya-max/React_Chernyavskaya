import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import store from '../store/store'

import Button from "./Button";
import Photos from "./Photos";

import { photosFetchDataSuccess } from "../store/actionCreators/photos";
import { setActiveAlbum } from "../store/actionCreators/albums";

function Album({ album }) {

  const content = useSelector(state => state);
  const dispatch = useDispatch();

  // const { title } = album;

  // const [activeAlbum, setActiveAlbum] = useState(null);
  // const [photos, setPhotos] = useState([]);
  // const [isOpenAlbum, setIsOpenAlbum] = useState(true);

  // const albumClickHandler = useCallback((album) => { setActiveAlbum(album); }, []);
  // const closeAlbum = useCallback(() => { setPhotos([]) }, []);

  // useEffect(() => {
  //   if (activeAlbum) {
  //     console.log(activeAlbum)
  //     const fetchData = async () => {
  //       fetch(`https://jsonplaceholder.typicode.com/albums/${activeAlbum.userId}/photos`).then((res) => {
  //         return res.json();
  //       }).then(photos => setPhotos(photos));
  //     };
  //     fetchData();
  //   }
  // }, [activeAlbum, isOpenAlbum])

  // return <div className='content-container'>
  //   {photos.length ?
  //     <div className='album-container'>
  //       <Button album={album} closeAlbum={closeAlbum} />
  //       <div className='img-container'>
  //         {photos.map(photo => <Photos photo={photo} key={photo.id} />)}
  //       </div>
  //     </div>
  //     : <li onClick={() => { setIsOpenAlbum(!isOpenAlbum); albumClickHandler(album) }} >{title}</li>}
  // </div>



  const albumClickHandler = useCallback((album) => {
    dispatch(setActiveAlbum(album));
  }, []);

  // const albumClickHandler = (album) => {
  //   dispatch(setActiveAlbum(album));




  //   // const activeAlbum = store.getState().activeAlbum
  //   // // console.log(store.getState().photos)
  //   // // if (activeAlbum) {
  //   //   // console.log(store.getState())
  //   //    dispatch(getPhotos(`https://jsonplaceholder.typicode.com/albums/${activeAlbum.userId}/photos`))

  //   //   //  console.log(store.getState())
  //   // // }
  //   // setTimeout( () => console.log(store.getState()), 1000);

  // }

  function getPhotos(src) {
    return dispatch => {
      axios.get(src)
        .then(res => dispatch(photosFetchDataSuccess(res.data)));
    }
  }

  useEffect(() => {
    if (store.getState().activeAlbum.userId) {
      dispatch(getPhotos(`https://jsonplaceholder.typicode.com/albums/${store.getState().activeAlbum.userId}/photos`));
      // console.log(store.getState().photos.length);
    }
    // dispatch(getPhotos(`https://jsonplaceholder.typicode.com/albums/${store.getState().activeAlbum.userId}/photos`));
  }, [dispatch, store.getState().activeAlbum]);


  return <div className='content-container'>
    {/* {store.getState().photos.length ?
      <div className='album-container'>
        <Button album={album} closeAlbum={closeAlbum} />
        <div className='img-container'>
          {store.getState().photos.map(photo => <Photos photo={photo} key={photo.id} />)}
        </div>
      </div>
      : album.map(album => <li key={album.id} onClick={() => { albumClickHandler(album) }}> {album.title} </li>)} */}

    {album.map(album => <li key={album.id} onClick={() => { albumClickHandler(album) }}>  { (store.getState().photos.length && store.getState().activeAlbum.id == album.id)?  
     <div className='img-container'>
     {store.getState().photos.map(photo => <Photos photo={photo} key={photo.id} />)}
   </div>
    : album.title} </li>)}

  </div>
}
// content.fetchAlbums.albums.map(album => 
export default Album;