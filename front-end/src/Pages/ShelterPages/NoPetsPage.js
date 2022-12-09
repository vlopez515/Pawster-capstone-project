import React from 'react';
import dogASCII from '../../assets/dogASCII.png';

export default function NoPetsPage() {
    return (
        <>
            <h3 className='text-center'> No Pets Found.</h3>
            <br/>
            <br/>
            <img src={dogASCII} />
            <br/>
            {/* <button>Add some</button> */}
       </>
    )
}


