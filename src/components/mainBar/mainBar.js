import React, {useState} from 'react';
import axios from "axios"
import "./mainBar.scss"
import "../modal/Modal"


const MainBar = () =>  {
    const [posts, setPosts] = useState([])
    const [modalActive, setModalActive] = useState(true)

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

    const handleEditClick = () => {
        return(console.log("edit_button"))
    }

    const handleAddClick = () => {
        return( console.log('add_button'))
         
    }
    
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
                  <button  className={'btn_edit'} onClick={handleEditClick}></button>
              </ul>
          ))}
          </div>
          <button className={'btn_add'} onClick={handleAddClick}>ADD</button>
        </div>
      );
  }
  
  export default MainBar;

//   axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })

