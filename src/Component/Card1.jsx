import React from 'react'

const Card1 = ({ style, data }) => {
    console.log(data)
    return (
        <div style={style} className='card'>Card1 {data}</div>
    )
}

export default Card1