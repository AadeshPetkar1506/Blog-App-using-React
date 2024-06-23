import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../data"

function BlogView() {

  const {id} = useParams()

  const selectedBlog = blogs.find((blogsObject)=>blogsObject.id===id)

  return (
    <div>
      <h1>{selectedBlog.Title}</h1>
      <p>
        <img src={selectedBlog.Author.Avatar} alt="Author" height="100px" /> 
        {selectedBlog.Author.Name} | {selectedBlog.Date}

      </p>
      <p className="blogview-content">{selectedBlog.Content}</p>
     
    </div>
  )
}

export default BlogView