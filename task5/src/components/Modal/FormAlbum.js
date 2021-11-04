import { useForm } from "react-hook-form";
import Modal from "./Modal";

import { addNewAlbums } from '../../store/actionCreators/albums';
import { addNewPhotos } from '../../store/actionCreators/photos';
import { useDispatch, useSelector } from "react-redux";

function FormAlbum({ active, setActive, dataType }) {
  const addAlbums = useSelector(({ addAlbums }) => addAlbums);
  const fetchAlbums = useSelector(({ fetchAlbums }) => fetchAlbums);
  const addPhotos = useSelector(({ addPhotos }) => addPhotos);
  const fetchPhotos = useSelector(({ fetchPhotos }) => fetchPhotos);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmitAlbum = (data) => {
    document.querySelector('#title-label').innerHTML = 'Enter the title of the album (required)';
    data['userId'] = 1;
    if (addAlbums.length) {
      if (addAlbums.filter(item => item.title === data.title).length) {
        document.querySelector('#title-label').innerHTML = 'Album with the same name already exists';
      } else {
        data['id'] = addAlbums[addAlbums.length - 1].id + 1;
        dispatch(addNewAlbums(data));
      }
    } else {
      data['id'] = fetchAlbums.length + 1;
      dispatch(addNewAlbums(data));
    }
  };

  const onSubmitPhoto = (data) => {
    document.querySelector('#albumTitle-label').innerHTML = 'Enter the title of the album (required)';
    if (addAlbums.length) {
      if (addPhotos.length) {
        data['id'] = addPhotos[addPhotos.length - 1].id + 1
      } else {
        data['id'] = fetchPhotos.length + 1;
      }

      if (addAlbums.filter(item => item.title === data.albumTitle).length) {
        data['albumId'] = addAlbums.filter(item => item.title === data.albumTitle).map(albim => albim.id);
        dispatch(addNewPhotos(data));
      } else {
        document.querySelector('#albumTitle-label').innerHTML = 'There is no album with that name';
      }
    } else {
      document.querySelector('#albumTitle-label').innerHTML = 'There is no album with that name';
    }
  };

  return <div>
    <Modal active={active} setActive={setActive}>
      {dataType === 'album' ?
        <>
          <h3>Title: album</h3>
          <form onSubmit={handleSubmit(onSubmitAlbum)}>
            <label id='title-label' htmlFor="title">Enter the title of the album (required)</label>
            <input id='title' {...register("title")} placeholder="Title" required></input>
            <button type="submit">Add album</button>
          </form>
        </>
        :
        <>
          <h3>Title: photo</h3>
          <form onSubmit={handleSubmit(onSubmitPhoto)}>
            <input id='albumTitle' {...register("albumTitle")} placeholder="album title" required></input>
            <label id='albumTitle-label' htmlFor="albumTitle">Enter the title of the album (required)</label>
            <input id='url' {...register("url")} placeholder="url" required></input>
            <label id='url-label' htmlFor="url">Enter the url of the photo (required)</label>
            <button type="submit">Add photo</button>
          </form>
        </>
      }
    </Modal>
  </div>
}

export default FormAlbum;