import { useEffect } from "react";
import Album from "./Album";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { albumsFetchDataSuccess } from "../store/actionCreators/albums";
import { photosFetchDataSuccess } from "../store/actionCreators/photos";

function Content() {

  const content = useSelector(state => state);
  const dispatch = useDispatch();

  function getAlbums(src) {
    return dispatch => {
      axios.get(src)
        .then(res => dispatch(albumsFetchDataSuccess(res.data)));
    }
  }

  function getPhotos(src) {
    return dispatch => {
      axios.get(src)
        .then(res => dispatch(photosFetchDataSuccess(res.data)));
    }
  }

  useEffect(() => {
    dispatch(getAlbums('https://jsonplaceholder.typicode.com/albums'));
    dispatch(getPhotos('https://jsonplaceholder.typicode.com/photos'));
  }, [dispatch]);


  return <div className="user__details">
    <ul className='content__component text'>{content.fetchAlbums.map(album => <Album album={album} key={album.id} />)}</ul>
  </div>
}

export default Content;