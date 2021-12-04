import React from "react";
import axios from "axios";
import "./sendForm.scss"

const SendForm = ({formState}) => {
   
    
const handleSubmit = (event) => {

        event.preventDefault();
        axios.post('https://localhost:44331/weatherforecast/post')
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }

    // const handleChange = (event) => {
    //     console.log(event.target.value)
    //     setData(event.target.value);
    // }

    return(
       <>
         <div className={'sendForm__wrapper'}>
            <div>
              <span>Date:</span>
              <span>TemperatureC:</span>
              <span>TemperatureF:</span>
              <span>Summary:</span>
            </div>
             <form  className={'sendForm__list'} onClick={handleSubmit} >
              <input type='text' placeholder={formState ? formState.date.slice(0, 10) : ''}/>
              <input type='text' placeholder={formState ? formState.temperatureC : ''}/>
              <input type='text' placeholder={formState ? formState.temperatureF : ''}/>
              <input type='text' placeholder={formState ? formState.summary : ''}/>
             <input type='submit'/>
             </form>
           </div>
       </>
    )
}

export default SendForm;