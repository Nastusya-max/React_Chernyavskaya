import { useForm } from "react-hook-form";
import Modal from "./Modal";

import { addNewPhotos } from '../../store/actionCreators/photos'
import { useDispatch, useSelector } from "react-redux";

function FormPhoto({ active, setActive }) {
  const addPhotos = useSelector(({ addPhotos }) => addPhotos);
  const fetchPhotos = useSelector(({ fetchPhotos }) => fetchPhotos);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (addPhotos.length) {
      data['id'] = addPhotos[addPhotos.length-1].id + 1
      console.log(data['id'])
    } else {
      data['id'] = fetchPhotos.length
    }
    dispatch(addNewPhotos(data))
  };

  return <div>
    <Modal active={active} setActive={setActive}>
      <h3>Title: photo</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("albumId")} placeholder="albumId"></input>
        <input {...register("url")} placeholder="url"></input>
        <button type="submit">Add photo</button>
      </form>
    </Modal>
  </div>
}

export default FormPhoto;