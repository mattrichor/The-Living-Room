const PostCard = (props) => {
    return (
      <div className="entityCard">
        <div className="img-wrapper">
          <img className="img"src={props.image} alt={""} />
        </div>
        <div className="posts flex-col">
          <h2 className="post-title">{props.title}</h2>
          <h6 className="time">{props.time}</h6>
          <p className="post-author"> by {props.author}</p>
          <h3 className='post-text'> {props.description}</h3>
          <p>Likes: {props.likes}</p>
        </div>
      </div>
    )
  }
  export default PostCard