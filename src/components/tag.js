import React from 'react'
import { Styled } from 'theme-ui'

/** @jsx jsx */
import { jsx } from 'theme-ui'

const Tag = ({ name }) => (
  <Styled.div 
    as="span"
    sx={{
      mr: 5,
      py: 4,
      px: 6,
      bg: 'tagBackground',
      color: 'secondary',
      fontSize: 0,
      borderRadius: 'md',
      ':hover': {
        color: 'primary',
        bg: 'background',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'primary'
      }
    }}
  >{name}</Styled.div>
)

export default Tag