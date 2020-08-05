import React from 'react'
import MediaControlCard from './MediaControlCard'

// For displaying the songs
function Songs(props) {
    const index = props.isActive;
    const names = props.list.filter((event) => event.index === index)
    return (
        <div className="container">
            
            <MediaControlCard name={names[0].name}/>
        </div>
        
    )
}

export default Songs