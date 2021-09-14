function UserDetails({ user }) {
  const { name, username, email, company: { companyName } } = user;

  return <div class="user-details__component text">
    <div class="text">Name: {name};</div>
    <div class="text">Username: {username};</div>
    <div class="text">Email: {email};</div>
    <div class="text">Name of company: {companyName}.</div>
  </div>
}

export default UserDetails;