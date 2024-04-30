import LandbotChat from './LandbotChat';
import React, {useState} from 'react';
import "./App.css";

function App(){
  const [inputs, setInputs] = useState({ currentDest: '', finalDest: '' });
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleChange = (event) => {
    setInputs({...inputs, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.currentDest + "_" + inputs.finalDest);

    const changeBackground = {
      "Rush Rhees_Hylan": "/images/rush-hylan.jpg",
      "Hylan_Rush Rhees": "/images/rush-hylan.jpg",
      "Rush Rhees_Wilco": "/images/wilco-rush.jpg",
      "Wilco_Rush Rhees": "/images/wilco-rush.jpg",
      "Hylan_Wilco": "/images/hylan-wilco.jpg",
      "Wilco_Hylan": "/images/hylan-wilco.jpg",
    };
    const key = inputs.currentDest + "_" + inputs.finalDest;
    const image = changeBackground[key] || "/images/urcampus.jpg";
    setBackgroundImage(image);
    console.log("Key: ", key);
    console.log("Image URL: ", image);
  };

  return (
    <div className="App">
      <img src={backgroundImage} alt="" className="backgroundImage"/>
      <div className="queryBox">
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className='inputBox'>
            <input 
              className="inputText"
              type="text"
              name="currentDest"
              value={inputs.currentDest}
              onChange={handleChange}
              placeholder="Where are you now?"
            />
            <input 
              className="inputText"
              type="text"
              name="finalDest"
              value={inputs.finalDest}
              onChange={handleChange}
              placeholder="Where do you want to go?"
            />
            <button className="goButton" type="submit">Go</button>
          </div>
        </form>
      </div>
      <div >
        <LandbotChat />
      </div>
    </div>  
  )
}
export default App;
