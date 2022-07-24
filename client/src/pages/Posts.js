// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'

// const Posts = () => {
//   const [postDetails, setPostDetails] = useState('')

//   const BASE_URL = 'http://localhost:3001/api'

//   const { postId } = useParams()

//   useEffect(() => {
//     const getPostDetails = async () => {
//       await axios.get(`${BASE_URL}/${postId}`).then((res) => {
//         setPostDetails(res.data)
//         console.log(res.data)
//       })
//     }
//     getPostDetails()
//   }, [])

//   return (
//     <div className="details-card">
//       <div className="img-wrapper">
//         <img
//           className="img-detail"
//           src={postDetails.image != null ? postDetails.image : ''}
//           alt={'postDetails.name'}
//         />
//       </div>
//       <div className="info-wrapper flex-col">
//         <h3> {postDetails.title != null ? postDetails.title : ''}</h3>
//         <p>Diet: {postDetails. != null ? postDetails.diet : ''}</p>
//         <p>
//           Quantity:
//           {postDetails.quantity != null ? postDetails.quantity : ''}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Posts
