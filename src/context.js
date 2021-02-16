import React, { createContext, useState, useEffect } from "react";
import items from "./data";

const RoomContext = createContext();

const RoomProvider = (props) => {
  const initialState = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  const [values, setValues] = useState(initialState);

  const formatData = (items) => {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured === true);
    setValues({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }, []);

  return (
    <RoomContext.Provider value={{ ...values }}>
      {props.children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
