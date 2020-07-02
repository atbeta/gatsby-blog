import PropTypes from "prop-types"
import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const PostCard = (props) => {
  return (
  <div>
    <img src={props.cover.publicURL}></img>
    <h2>{props.title}</h2>
    <div sx={{color: `textMuted`}}>{props.excerpt}</div>
    <div>{props.created_at}</div>
    <div>{props.author.username}</div>
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
