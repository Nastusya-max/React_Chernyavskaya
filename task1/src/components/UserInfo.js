import Avatar from './Avatar'
import UserDetails from './UserDetails'

function UserInfo({ user, avatar }) {
  return <div className="user__details">
    <Avatar avatar={avatar} />
    {/* <UserDetails name={user.name} username={user.username} email={user.email} companyName={user.company.name} /> */}
    <UserDetails  user={user}/>
  </div>
}

export default UserInfo;