import React, {createContext, useState} from 'react';
import items from './data';

const RoomContext = createContext()

 const RoomProvider = (props) => {

     const initialState = {
         rooms:[],
         sortedRooms:[],
         featuredRooms: [],
         loading: true,
     }

    const [values] = useState(initialState)
    return (
      <RoomContext.Provider value={{...values}}>
        {props.children}
      </RoomContext.Provider>
    );
}

const RoomConsumer = RoomContext.Consumer
export {RoomProvider, RoomConsumer, RoomContext}