import React, {useState} from "react"
import './App.css';
import MainBar from "./components/mainBar/MainBar"
import Header from "./components/header/Header"
import Modal from "./components/modal/Modal"


function App() {

const [modalActive, setModalActive] = useState(true)

  return (
    <div className="App">
     <Header />
     <MainBar />
     <Modal active={modalActive} setActive={setModalActive}/>
     <button onClick={() => setModalActive(true)} ></button>
    </div>
  );
}

export default App;
