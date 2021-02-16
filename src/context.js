import React, {createContext} from 'react'

const RoomContext = createContext()

 const RoomProvider = (props) => {

    const initialState = {

    }
    return (
        <RoomContext.Provider value={'hello'}>
            {props.children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer
export {RoomProvider, RoomConsumer, RoomContext}