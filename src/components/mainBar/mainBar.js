import React, {useState} from 'react';
import axios from "axios"
import "./mainBar.scss"

const MainBar = ({handleEditClick}) =>  {
    const [posts, setPosts] = useState([]);

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
        <div className={'wrapper'}> 
          <div className={'inner'}>
          <ul className={'list_main'}>
              <li>Date</li>
              <li>TemperatureC</li>
              <li>TemperatureF</li>
              <li>Summary</li>
          </ul>
          {posts.map ( post => (
              <ul key={post.id} className={'list_item'}>
                  <li>{post.date.slice(0, 10)}</li>
                  <li>{post.temperatureC}</li>
                  <li>{post.temperatureF}</li>
                  <li>{post.summary}</li>
                  <button  className={'btn_edit'} onClick={() =>handleEditClick(post)}/>
              </ul>
          ))}
          </div>
        </div>
      );
  }
  
  export default MainBar;