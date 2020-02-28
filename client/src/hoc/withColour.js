// this is a custom Higher Order Component
import React from 'react'

const withColour = (WrappedComponent)=>{
  const colours = ['red', 'orange', 'green', 'blue', 'purple', 'gray'];
  const randomColour = colours[Math.floor(Math.random()*5)];
  const className = randomColour + '-text';

  return (props)=>{
    return(
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default withColour
