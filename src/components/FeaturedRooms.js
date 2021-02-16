import React, {useContext} from 'react'
import {RoomContext} from '../context'

 const FeaturedRooms = () => {

  const {name, greeting} = useContext(RoomContext);
  console.log(greeting)
    return (
      <div>
        <p> {greeting} {name} from featured rooms</p>
      </div>
    );
}

export default FeaturedRooms;