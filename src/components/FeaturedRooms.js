import React, {useContext} from 'react'
import {RoomContext} from '../context'

 const FeaturedRooms = () => {

  const value = useContext(RoomContext);
  console.log(value)
    return (
      <div>
        <p> hello from featured rooms</p>
      </div>
    );
}

export default FeaturedRooms;