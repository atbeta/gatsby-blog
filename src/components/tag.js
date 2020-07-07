import React from 'react'
import styled from '@emotion/styled'

/** @jsx jsx */
import { jsx } from 'theme-ui'

const Tag = ({ name }) => (
  <span>{name}</span>
)

// const Tag = styled.span`
//   margin-right: 10px;
//   font-size: 12px;
//   color: #a0a8bd;
//   border: 1px solid transparent;
//   background: rgba(160, 168, 189, .2);
//   border-radius: 15px;
//   padding: 3px 15px;
//   &:hover {
//     color: red;
//   }
// `

export default Tag