import PropTypes from "prop-types"
import { Link } from 'gatsby'
import { FaRegBookmark, FaCalendarAlt, FaUser } from 'react-icons/fa'

/** @jsx jsx */
import { jsx, Image } from "theme-ui"

import Tag from './tag'

const PostCard = (props) => {
  
  return (
  <div>
    <Image src={props.cover.publicURL} variant="cover"></Image>
    <div>
      {props.tags.map(tag => <Tag name={tag.name}/>)}
    </div>
    <Link sx={{color: `text`}} css={{textDecoration: 'none'}} to={props.url}><h1>{props.title}</h1></Link>
    <div sx={{color: `secondary`}}>{props.excerpt}</div>
    <div><FaCalendarAlt className="fa-icon" />{props.created_at}</div>
    <div><FaUser className="fa-icon" />{props.author.username}</div>
  </div>)
}

PostCard.propTypes = {
  author: PropTypes.shape({
    username: PropTypes.string
  }),
  cover: PropTypes.shape({
    publicURL: PropTypes.string
  }),
  tags: PropTypes.array,
  title: PropTypes.string,
  content: PropTypes.string,
  excerpt: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string,
  public: PropTypes.bool,
  created_at: PropTypes.string
}

PostCard.defaultProps = {
  author: {
    username: ''
  },
  cover: {
    publicURL: ''
  },
  tags: [],
  title: '',
  content: '',
  excerpt: '',
  id: '',
  url: '',
  public: true,
  created_at: ''
}

export default PostCard
