import React, {useState} from 'react';
import axios from "axios"


const MainBar = () =>  {
    const [posts, setPosts] = useState([])

    React.useEffect(() => {
        const fetchData = async () => {            
            try {
                const {data} = await axios.get('/weatherforecast')
            setPosts(data)
            }
            catch (error) {
                console.log(error)
            }
        } 
        fetchData()
    }, [])
    
    return (
   
        <div>
           {posts.map( post => (
               <div key={post.id}>
                   <div>Date:<span>{post.date}</span></div>
                   <div>TemperatureC:<span>{post.temperatureC}</span></div>
                   <div>TemperatureF:<span>{post.temperatureF}</span></div>
                   <div>Summary:<span>{post.summary}</span></div>
               </div>
           ))}
        </div>
      );
  }
  
  export default MainBar;