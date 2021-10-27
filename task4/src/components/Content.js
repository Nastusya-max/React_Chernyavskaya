import { useEffect } from "react";
import Album from "./Album";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { albumsFetchDataSuccess } from "../store/actionCreators/albums";

function Content() {

  const content = useSelector(state => state);
  const dispatch = useDispatch();

  function getAlbums(src) {
    return dispatch => {
      axios.get(src)
        .then(res => dispatch(albumsFetchDataSuccess(res.data)));
    }
  }

  useEffect(() => {
    dispatch(getAlbums('https://jsonplaceholder.typicode.com/albums'));
  }, [dispatch]);

  const uhjj = () => {
    content.fetchAlbums.albums && console.log(content.fetchAlbums.albums)
      // content.albums.albums.map(album => console.log(album.id))
    
    // content.albums && console.log(content.albums)
  }

  return <div className="user__details">
    {/* {uhjj()} */}
    {/* <ul className='content__component text'>{content.albums.length && content.albums[0].map(album => console.log(album))}</ul> */}
    <ul className='content__component text'>{content.fetchAlbums.albums && <Album album={content.fetchAlbums.albums} />}</ul>
  </div>
}

export default Content;