function Photos({photo}) {
  const {url} = photo;
  return <img className='album-img' alt='album-img' src={url}></img>
}

export default Photos;