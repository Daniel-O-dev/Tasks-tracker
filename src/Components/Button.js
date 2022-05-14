import React from 'react';
import PropTypes from 'prop-types';


const Button = ({colour, text, onClick}) => {



    return (

       <div>         
               <button onClick={onClick} style = {{backgroundColor:colour}} className='btn'>{text}</button>
        </div>
    );
};


Button.defaultProps = {
    Colour: 'Blue',
};

Button.propTypes = {
    Colour: PropTypes.string.isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default Button; 