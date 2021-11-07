import Album from "./Album";
import AddAlbum from "./AddAlbum";
import { useDispatch, useSelector } from "react-redux";

function Content() {

  const addAlbums = useSelector(({ addAlbums }) => addAlbums);
  const fetchAlbums = useSelector(({ fetchAlbums }) => fetchAlbums);
  const dispatch = useDispatch();

  return (
    localStorage.getItem('isLogin') === 'true' ?

      <div className="user__details">
        <AddAlbum />
        {addAlbums.length ?
          <>
            <div><ul className='content__component '><p>Your albums:</p>{addAlbums.map(album => <Album album={album} key={album.id} />)}</ul>
              <ul className='content__component '>{fetchAlbums.map(album => <Album album={album} key={album.id} />)}</ul></div>
          </>
          : <ul className='content__component '>{fetchAlbums.map(album => <Album album={album} key={album.id} />)}</ul>
        }
      </div>
      : <div className="user__details">
        <ul className='content__component '>{fetchAlbums.map(album => <Album album={album} key={album.id} />)}</ul>
      </div>
  );
}

export default Content;