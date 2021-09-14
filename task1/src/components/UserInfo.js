import Avatar from './Avatar'
import UserDetails from './UserDetails'

function UserInfo({ user, avatar }) {
  return <div className="user__details">
    <Avatar avatar={avatar} />
    <UserDetails  user={user}/>
  </div>
}

export default UserInfo;