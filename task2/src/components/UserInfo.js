import Avatar from './Avatar'
import UserDetails from './UserDetails'

function UserInfo({ user }) {
  return <div className="inf-container">
    <Avatar />
    <UserDetails user={user} />
  </div>
}

export default UserInfo;