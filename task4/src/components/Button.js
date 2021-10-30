import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteActiveAlbum } from "../store/actionCreators/albums";

function Button({ album }) {
  const dispatch = useDispatch();
  const buttonClickHandler = useCallback((album) => { dispatch(deleteActiveAlbum(album)) }, [dispatch]);

  return <button onClick={() => buttonClickHandler(album)}>
    {'\u2716'}
  </button>
}

export default Button;