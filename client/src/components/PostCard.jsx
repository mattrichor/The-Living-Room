const PostCard = (props) => {
    return (
      <div className="entityCard">
        <div className="img-wrapper">
          <img className="img"src={props.image} alt={""} />
        </div>
        <div className="info-wrapper flex-col">
          <h2>{props.title}</h2>
          <h6 className="time">{props.time}</h6>
          <p className="author"> by {props.author}</p>
          <h3 className='text'> {props.description}</h3>
          <p>Likes: {props.likes}</p>
        </div>
      </div>
    )
  }
  export default PostCard