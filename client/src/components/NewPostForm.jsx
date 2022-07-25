const NewPostForm = (props) => {


  

  const newPost = props.newPost


    return (
<div> <h2>New Post</h2>
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      value={newPost.title}
      placeholder="Title"
      onChange={props.onChange}
    ></input>
    <br></br>
    <input
      type="text"
      value={newPost.author}
      placeholder="Author"
      onChange={props.onChange}
    ></input>
    <br></br>
    <input
      type="text"
      value={newPost.description}
      placeholder="Description"
      onChange={props.onChange}
    ></input>
    <br></br>
     <button className="submit" type="submit"> Submit</button>
  </form>
</div>
)
 }
    export default NewPostForm