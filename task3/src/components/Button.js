import { useState, useCallback, useEffect } from "react";

function Button({ album, closeAlbum }) {
  const [closedAlbum, setClosedAlbum] = useState(null);
  const [isOpenAlbum, setIsOpenAlbum] = useState(true);
  const buttonClickHandler = useCallback((album) => { setClosedAlbum(album) }, []);

  useEffect(() => {
    if (closedAlbum) {
      closeAlbum();
    }
  }, [closedAlbum, isOpenAlbum, closeAlbum])

  return <button onClick={() => { setIsOpenAlbum(!isOpenAlbum); buttonClickHandler(album) }}>{'\u2716'}</button>
}

export default Button;