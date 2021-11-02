import React, { useState } from "react";
import FormAlbum from "./Modal/FormAlbum";
import FormPhoto from "./Modal/FormPhoto";


function AddAlbum() {
  const [formAlbumActive, setformAlbumActive] = useState(false)
  const [formPhotoActive, setformPhotoActive] = useState(false)


  return <div className='addAlbum-container'>
    <button onClick={() => setformAlbumActive(true)}>Add album</button>
    <button onClick={() => setformPhotoActive(true)}>Add photo</button>
    <FormAlbum  active={formAlbumActive} setActive={setformAlbumActive}/>
    <FormPhoto  active={formPhotoActive} setActive={setformPhotoActive}/>
  </div>
}

export default AddAlbum;