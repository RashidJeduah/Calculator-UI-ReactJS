import React from 'react';

function Sidesection(props) {
    return (
        <div style={{height:'50px', width:'199.5px', backgroundColor:'tomato',PaddingBottom:'', textAlign:'center', fontSize:'22px',fontWeight:'bold', borderBottom:'0.5px solid gray',borderTop:'0.5px solid gray', borderRight:'0.5px solid gray', color:'white'}}>
            <p>{props.name}</p>
        </div>
    )
}

export default Sidesection