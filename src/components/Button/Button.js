import React from 'react';

function Button (props) {
    const { check } = props;

    return <>
        <button onClick={() => check()}>check</button>
    </>
}

export default Button