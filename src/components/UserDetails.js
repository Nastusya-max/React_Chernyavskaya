function UserDetails({ user }) {
  const { name, username, email, address: { city }, company: { catchPhrase } } = user;

  return (
    <div className="user-details__component">
      <div className="text">Name: {name};</div>
      <div className="text">Username: {username};</div>
      <div className="text">Email: {email};</div>
      <div className="text">City: {city}.</div>
      <div className="text">Catch phrase: {catchPhrase}.</div>
    </div>
  );
}

export default UserDetails;