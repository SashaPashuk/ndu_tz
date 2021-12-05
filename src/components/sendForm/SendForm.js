import React, {useState} from "react";
import axios from "axios";
import "./sendForm.scss"

const SendForm = ({formState}) => {
  
  const [date, setDate] = useState('')
  const[temperatureC, setTemperatureC] = useState()
  const[temperatureF, setTemperatureF] = useState()
  const[summary, setSummary] = useState('')

    const handleSubmit = () => {
        axios.get('https://localhost:44331/weatherforecast/post/')
            console.log('{"res":”ok”}')
          } 


    const handlDChange = (event) =>{
        setDate(event.target.value);
    }
    const handleTCChange = (event) =>{
      setTemperatureC(event.target.value);
    }
    const handleTFChange = (event) =>{
    setTemperatureF(event.target.value);
    }
    const handleSChange = (event) =>{
    setSummary(event.target.value);
    }


    return(
       <>
         <div className={'sendForm__wrapper'}>
            <div>
              <span>Date:</span>
              <span>TemperatureC:</span>
              <span>TemperatureF:</span>
              <span>Summary:</span>
            </div>
             <form  className={'sendForm__list'} >
              <input 
              type='text' 
              value={date}
              onChange={handlDChange}
              placeholder={formState ? formState.date.slice(0, 10) : ''}/>
              <input 
              type='text' 
              value={temperatureC}
              onChange={handleTCChange}
              placeholder={formState ? formState.temperatureC : ''}/>
              <input 
              type='text' 
              value={temperatureF}
              onChange={handleTFChange}
              placeholder={formState ? formState.temperatureF : ''}/>
              <input 
              type='text'
              value={summary} 
              onChange={handleSChange}
              placeholder={formState ? formState.summary : ''}/>
            <button onSubmit={handleSubmit}>send data</button>
             </form>
           </div>
       </>
    )
}

export default SendForm;