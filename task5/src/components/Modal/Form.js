import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

import { addNewAlbums } from '../../store/actionCreators/albums'
import { useDispatch, useSelector } from "react-redux";

function Form({ active, setActive }) {
  // const content = useSelector(state => state);
  const addAlbums = useSelector(({ addAlbums }) => addAlbums);
  const fetchAlbums = useSelector(({ fetchAlbums }) => fetchAlbums);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => {
    setResult(JSON.stringify(data));
    if (addAlbums.length) {
      data['id'] = addAlbums[addAlbums.length-1].id + 1
      console.log(data['id'])
    } else {
      data['id'] = fetchAlbums.length
    }
    dispatch(addNewAlbums(data))
  };


  return <div>
    <Modal active={active} setActive={setActive}>
      <h3>Title:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("userId")} placeholder="UserId"></input>
        <input {...register("title")} placeholder="Title"></input>
        <p>{result}</p>
        <button type="submit">Add</button>
      </form>
    </Modal>
  </div>
}

export default Form;