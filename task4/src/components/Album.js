import { useState, useCallback, useEffect } from "react";
import Button from "./Button";
import Photos from "./Photos";

function Album({ album }) {
  const { title } = album;
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [isOpenAlbum, setIsOpenAlbum] = useState(true);

  const albumClickHandler = useCallback((album) => { setActiveAlbum(album) }, []);
  const closeAlbum = useCallback(() => { setPhotos([]) }, []);

  useEffect(() => {
    if (activeAlbum) {
      const fetchData = async () => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${activeAlbum.userId}/photos`).then((res) => {
          return res.json();
        }).then(photos => setPhotos(photos));
      };
      fetchData();
    }
  }, [activeAlbum, isOpenAlbum])

  return <div className='content-container'>
    {photos.length ?
      <div className='album-container'>
        <Button album={album} closeAlbum={closeAlbum} />
        <div className='img-container'>
          {photos.map(photo => <Photos photo={photo} key={photo.id} />)}
        </div>
      </div>
      : <li onClick={() => { setIsOpenAlbum(!isOpenAlbum); albumClickHandler(album) }} >{title}</li>}
  </div>
}

export default Album;