import "./home.css"
import blogs from "../../data"
import BlogCard from "../../components/BlogCard/BlogCard"
function Home() {

  return (
   <>
   <div className="blogs-Container">
   {
    blogs.map((blogObject, i) =>{
        const {
          id,
          Title,
          Content,
          Author,
          Name,
          Categories,
        }=blogObject

        return(
            <BlogCard 
            key={i}
            id={id}
            Title={Title}
            Content={Content}
            Author={Author}
            Name={Name}
            Categories={Categories}
        />)
    })
   }
   </div>
   </>
  )
}

export default Home