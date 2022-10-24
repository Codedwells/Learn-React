import React from 'react'

const Input = (props) => {
    var styles ={
        margin:'20px'
    }
  return (
 <div>
       <input type="text"
            placeholder='Type here...'
            onChange={(e)=>props.change(e)}
            style={styles}
    />
    <input type='text'
        placeholder='Type again here...'
        onChange={(e)=>props.change(e)}
        style={styles}
    />
 </div>
  )
}

export default Input