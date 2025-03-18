import React from 'react'
// rfce -shortcut key
function Book(props) {
  return (
    <div>
         <img src={props.imgLink} alt="image" />
        <p>Book name : {props.name}</p>
        {props.children}
    </div>
  )
}

export default Book
