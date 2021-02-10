import React, { Component } from 'react'
import Hero from "../components/Hero";
export class SingleRoom extends Component {
    render() {
        return (
          <div>
            <Hero hero="roomsHero" />
            hello from single room page
          </div>
        );
    }
}

export default SingleRoom
