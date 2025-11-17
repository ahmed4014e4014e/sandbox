
import React from 'react'
import Title from '../components/Title'
// eslint-disable-next-line
import { useState } from 'react'


export default function EsignatureApp() {

  const [name, setName] = useState("Your signature");
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.35rem 0",

  }

  return (
    <div className='container text-center'>

      <Title classes={"title"} text={name} />
      <Title classes={"title-main"} text={!date ? "DoB" : date} />


      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, dolorum distinctio repellendus neque dolorem commodi pariatur assumenda tempore numquam impedit. Consequuntur dolor est aliquid soluta harum ratione rerum aliquam dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate numquam incidunt ipsam modi laboriosam vel doloribus voluptatum nisi? Ipsa magnam ad aspernatur at rerum dolor quam officiis maxime porro nemo.</p>



      <footer className='d-flex' style={{ justifyContent: "space-around", position: "relative", top: "40vh" }}>

        <input type="date" value={date} onChange={handleDateChange} style={inputStyle} />
        <input type="text" value={name} onChange={handleNameChange} style={inputStyle} />

      </footer>


    </div>
  )
}
