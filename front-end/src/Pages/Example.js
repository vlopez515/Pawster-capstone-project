import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;


function Example() {
    const [pets, setPets] = useState([])
    
    useEffect(() => {
      getPets()
    //     axios
    //         .get(`${API}/pets`)
    //         .then((response) => setPets(response.data))
    //         .catch((c) => console.warn("catch", c));
    }, []);
    // console.log(API)
    const getPets = async () => {
      await axios.get(API + `/pets`).then((res) => {
        const data = res.data
        console.log(data)
        setPets(data)
      }).catch((c) => console.warn("catch", c));
    }
  return (
    <div>Example</div>
  )
}

export default Example