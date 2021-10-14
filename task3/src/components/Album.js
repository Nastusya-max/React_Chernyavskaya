import { useCallback } from "react";

function Album({ album }) {
  const { title } = album;
  const albumClickHandler = useCallback((album) => {console.log(album) }, []);

  return <li onClick={() => albumClickHandler(album)}>{title}</li>
}

export default Album;