import React from 'react'

// this is a functional component which is going to return the arrow function
export const Loading = () => {
    return (
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    )
}

// fa-spinner is for the icon
// fa-pulse make it spin
// fa-3x means increase its speed 3 times
// fa-fw means forward direction
// text-primary is for color