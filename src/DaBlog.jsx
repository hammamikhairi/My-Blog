import Blogs from "./Blogs";
import useFetch from "./Hooks/useFetch";

const DaBlog = () => {

  const { data, isPending, error } = useFetch("http://localhost:3001/blogs")
  return (
    <div className="blogs-container">
      {/* <BlogsNavbar /> */}
      <div>
        {isPending ? <h1>loading</h1> : <Blogs blogs={data} /> }
      </div>
    </div>
  );
}

export default DaBlog;
