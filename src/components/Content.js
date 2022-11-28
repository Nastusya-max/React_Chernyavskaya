import Album from "./Album";
import AddAlbum from "./AddAlbum";
import { useSelector } from "react-redux";
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import React, { useContext } from "react";

const Content = observer(() => {
  const addAlbums = useSelector(({ addAlbums }) => addAlbums);
  const fetchAlbums = useSelector(({ fetchAlbums }) => fetchAlbums);
  const { user } = useContext(Context)
  const userAlbums = () => {
    if (localStorage.getItem('userAlbums')) {
      return JSON.parse(localStorage.getItem('userAlbums'));
    } else {
      return false;
    }
  }

  return (
    user.isAuth ?
      <div className="user__details">
        <AddAlbum />
        {(JSON.parse(localStorage.getItem('userAlbums')) || addAlbums.length) ?
          <div>
            <ul className='content__component '>
              <p>Your albums:</p>{userAlbums().length ?
                userAlbums().map(album => <Album album={album} key={album.id} />)
                : <Album album={userAlbums()} key={userAlbums().id} />}
            </ul>
            <ul className='content__component '>{fetchAlbums.map(album => <Album album={album} key={album.id} />)}</ul>
          </div>
          : <ul className='content__component '>{fetchAlbums.map(album => <Album album={album} key={album.id} />)}</ul>
        }
      </div>
      : <div className="user__details">
        <ul className='content__component '>{fetchAlbums.map(album => <Album album={album} key={album.id} />)}</ul>
      </div>
  );
})

export default Content;