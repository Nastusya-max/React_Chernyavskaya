import React, { useState } from "react";
import Form from "./Form/Form";
import dataTypeContext from "../context/dataTypeContext";

function AddAlbum() {
  const [formActive, setformActive] = useState(false);
  const [dataType, setDataType] = useState(null);

  return <div className='addAlbum-container'>
    <button onClick={() => { setformActive(true); setDataType('album') }}>Add album</button>
    <button onClick={() => { setformActive(true); setDataType('photo') }}>Add photo</button>
    <dataTypeContext.Provider value={dataType}>
      <Form active={formActive} setActive={setformActive} />
    </dataTypeContext.Provider>
  </div>
}

export default AddAlbum;