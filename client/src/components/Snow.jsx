import React from 'react'

const Snow = () => {
    const snows = new Array(25).fill('❅')

    return (
        <div className="snowflakes" aria-hidden="true">
            {snows.map(s => <div className="snowflake">{s}</div>)}
        </div>
    );
}

export default Snow