import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-list-container">
      {blogsList.map(eachitem => (
        <BlogItem data={eachitem} key={eachitem.id} />
      ))}
    </ul>
  )
}

export default BlogList
