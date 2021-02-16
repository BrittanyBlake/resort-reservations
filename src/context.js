import React, {createContext, useState} from 'react'

const RoomContext = createContext()

 const RoomProvider = (props) => {

     const initialState = {
         greeting: 'hello',
         name: 'Brittany'
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