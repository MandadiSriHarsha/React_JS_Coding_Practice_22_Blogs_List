import './index.css'

const BlogItem = props => {
  const {data} = props
  return (
    <li className="blog-item">
      <div className="title-date-container">
        <h1 className="blog-item-heading">{data.title}</h1>
        <p className="blog-item-date">{data.publishedDate}</p>
      </div>
      <p className="blog-item-description">{data.description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
