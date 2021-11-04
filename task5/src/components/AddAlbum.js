import React, { useState } from "react";
import FormAlbum from "./Modal/FormAlbum";

function AddAlbum() {
  const [formActive, setformActive] = useState(false);
  const [dataType, setDataType] = useState(null);

  return <div className='addAlbum-container'>
    <button onClick={() => {setformActive(true); setDataType('album')}}>Add album</button>
    <button onClick={() => {setformActive(true); setDataType('photo')}}>Add photo</button>
    <FormAlbum  active={formActive} setActive={setformActive} dataType={dataType}/>
  </div>
}

export default AddAlbum;