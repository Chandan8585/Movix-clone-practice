import React, { Children } from 'react'

const ContentWrapper = (Children) => {
  return (
    <div className='contentWrapper'>
      {Children}
    </div>
  )
}

export default ContentWrapper
