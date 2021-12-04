import React, {useState} from "react"
import './App.css';
import MainBar from "./components/mainBar/MainBar"
import Header from "./components/header/Header"
import Modal from "./components/modal/Modal"
import SendForm from "./components/sendForm/SendForm"

function App() {


const [modalActive, setModalActive] = useState(false)
const [formState, setFormState] = useState(null)

const handleEditClick = (post) => {
  setFormState(post)
  setModalActive(true)
}

  return (
    <div className="App">
     <Header />
     <MainBar handleEditClick={handleEditClick} />
     <button className={'add_btn'} onClick={() => setModalActive(true)} >add data</button>
     <Modal active={modalActive} setActive={setModalActive}>
        <SendForm formState={formState}/>
     </Modal>
    </div>
  );
}

export default App;
