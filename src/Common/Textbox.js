import React from 'react'

const Textbox = ({ value, onChange }) => {
    return (
        <div>
            <input value={value} onChange={onChange} />
        </div>
    )
}

export default Textbox
