import React from 'react'

const Action = ({className,type,handleClick}) => {
  return (
    <button className={className} onClick={handleClick}>
        {type}
    </button>
  )
}

export default Action