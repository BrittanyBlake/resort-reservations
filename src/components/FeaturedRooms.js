import React, {useContext} from 'react'
import {RoomContext} from '../context'

 const FeaturedRooms = () => {
const { featuredRooms : rooms } = useContext(RoomContext)
  //const {name, greeting} = useContext(RoomContext);
  console.log('rooms',rooms)
    return (
      
      <div>
        <p> from featured rooms</p>
      </div>
    );
}

export default FeaturedRooms;