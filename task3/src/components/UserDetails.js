function UserDetails({ user }) {
  const { name, username, email, company: { companyName } } = user;

  return <div className="user-details__component">
    <div className="text">Name: {name};</div>
    <div className="text">Username: {username};</div>
    <div className="text">Email: {email};</div>
    <div className="text">Name of company: {companyName}.</div>
  </div>
}

export default UserDetails;