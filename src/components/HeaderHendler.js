import React, { useEffect } from 'react'
import axios from 'axios';
export default function HeaderHendler() {

    useEffect(() =>
    {
         axios.post('/headertest', { name : "Banti"},
            { headers : {  "userInfo" : "9179391998" } }
         ).then((res) => {
                console.log(res);});
    
    },[]);

    return(
        <div>header</div>
    )
}
