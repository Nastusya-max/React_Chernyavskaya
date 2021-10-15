import { useState, useCallback, useEffect } from "react";
import Button from "./Button";
import Photos from "./Photos";

function Album({ album }) {
  const { title } = album;
  const [activeAlbum, setActiveAlbum] = useState(null);
  let [photos, setPhotos] = useState([]);
  const [closedAlbum, setClosedAlbum] = useState(null);

  const albumClickHandler = useCallback((album) => { setActiveAlbum(album);}, []);
  const buttonClickHandler =  useCallback((album) => { setClosedAlbum(album)}, []);

  useEffect(() => {
    // console.log('activeAlbum');
    if (activeAlbum) {
      console.log(activeAlbum);
      const fetchData = async () => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${activeAlbum.userId}/photos`).then((res) => {
          return res.json();
        }).then(photos => {
          setPhotos(photos);
          // console.log(photos)
        });
      };
      fetchData();
    }
  }, [activeAlbum])

  useEffect(() => {
    if (closedAlbum) {
      console.log(closedAlbum);
      setPhotos([]);
    }
  }, [closedAlbum])

  return <div className='content-container'>
    {photos.length ?
      <div>
        <div onClick={() => buttonClickHandler(album)}><Button /></div>
        <div className='img-container'>
          {photos.map(photo => <Photos photo={photo} key={photo.id} />)}
        </div>
      </div>
      : <li onClick={() => {albumClickHandler(album); }}>{title}</li>}
  </div>
}

export default Album;