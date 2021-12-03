import React, {useState, useEffect } from 'react';
import servise from "../../services/services";

const MainBar = () =>  {
    // const [posts, setPosts] = useState([])

    const [servises] = useState(new servise());

    useEffect ( () => {
        servises.getTable('/weatherforecast')
        .then((response) => {
            console.log(response)
        })
    },  )

    // const getTabs = () => {
    //     servises.getTable('/weatherforecast')
    //     .then((response) => {
    //         console.log(response)
    //     })
    // }
    
    return (
        <div>
            {/* <button onClick={getTabs}></button>*/}
            <p>{}</p>
        </div>
      );
  }
  
  export default MainBar;