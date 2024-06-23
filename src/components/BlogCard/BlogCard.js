import { Link } from "react-router-dom"
import  "../../data"
import "./BlogCard.css"

function BlogCard({id,Title,Content,Author,Date,Categories}) {
  return (
    <Link className="blog-card" to={`/blog/${id}`}>
    <h2 className="blog-Title">{Title}</h2>
    <p className="blog-content-preview" >
        {Content.substring(0,85)}....
    </p>
    <div className="Author-card">
        <img src={Author.Avatar} alt="Author" className="Author-Avatar"/>
        <span className="Author-Name">{Author.Name}</span>
        <span className="Blog-Date">{Date}</span>
    </div>
    {Categories.map((category,i)=>{
        return <span key={i} className="category-badge">{category}</span>
    })}
    </Link>
  )
}
export default BlogCard