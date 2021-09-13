import Avatar from './Avatar'
import UserDetails from './UserDetails'

function UserInfo({ user }) {
  return <div className="user__details">
    <Avatar avatar={user.avatar} />
    <UserDetails name={user.name} username={user.username} email={user.email} companyName={user.company.name} />
  </div>
}

export default UserInfo;