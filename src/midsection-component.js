import React from 'react';

function Midsection(props){
    return (
        <div style={{height:'50px', width:'199.5px', backgroundColor:'#C7C6C1', textAlign:'center', fontSize:'22px',fontWeight:'bold', borderBottom:'0.5px solid gray',borderTop:'0.5px solid gray', borderRight:'0.5px solid gray', color:'black'}}>
            <p>{props.name}</p>
        </div>
    )
}

export default Midsection