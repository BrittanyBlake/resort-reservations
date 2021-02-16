import React from 'react'
import PropTypes from "prop-types";

const Title = ({title}) => {
    return (
        <div className='section-title'>
            <h4>{title}</h4>
            <div/>
        </div>
    )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title
