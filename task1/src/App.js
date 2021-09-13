import './App.css';
import Content from './components/Content';
import UserInfo from './components/UserInfo';

function App({ user }) {
  return (
    <div className="app">
      <div class="app__container">
        <UserInfo user={user} />
        <Content description={user.description} />
      </div>
    </div>
  );
}

export default App;
