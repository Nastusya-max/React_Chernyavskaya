import Avatar from './Avatar'
import UserDetails from './UserDetails'

function UserInfo({ user }) {
  return <div className="user__details">
    <Avatar />
    <UserDetails user={user} />
  </div>
}

export default UserInfo;