import { useEffect } from "react";
import Album from "./Album";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios"

function Content() {
  // const [albums, setAlbums] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     fetch('https://jsonplaceholder.typicode.com/albums').then((res) => {
  //       return res.json();
  //     }).then(data => { setAlbums(data); });
  //   };
  //   fetchData();
  // }, []);


  const content = useSelector(state => state);
  const dispatch = useDispatch();

  function getData(src) {
    return dispatch => {
      axios.get(src)
        .then(res => {
          dispatch({
            type: "FETCH_DATA",
            data: res.data
          });
        }
        );
    };
  }

  useEffect(() => {
    dispatch(getData('https://jsonplaceholder.typicode.com/albums'));
  }, [dispatch]);

  return <div className="user__details">
    <ul className='content__component text'>{content.data && content.data.map(album => <Album album={album} key={album.id} />)}</ul>
  </div>
}

export default Content;