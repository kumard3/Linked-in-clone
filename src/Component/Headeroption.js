import React from 'react'
import "./Headeroption.css"
function Headeroption({Icon,title }) {
    return (
        <div className="headeroption">
            {Icon && <Icon className='headeroption_icon'/>}
            <h3>{title}</h3>
            
        </div>
    )
}

export default Headeroption
