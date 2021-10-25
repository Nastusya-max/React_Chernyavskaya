import './App.css';
import Content from './components/Content';
import UserInfo from './components/UserInfo';

function App({ user }) {

  return (
    <div className="app">
      <div className="app__container">
        <UserInfo user={user} />
          <Content />
      </div>
    </div>
  );
}

export default App;
