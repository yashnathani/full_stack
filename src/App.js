import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';


function App() {
 
 

const [inp, setInp] = useState(
  {
    name: "",
    gen: "",
    ph: '',
    usn: "",
    age: ''
  }
);


const [shldisv, setShldisv]= useState(false);

const handlechange = (event) => {
 const newObject = {
  ...inp,
  name: event.target.value
  //usn: inp.usn,
  //gen: inp.gen,
  //ph: inp.ph,
  //age: inp.age
 }

 setInp(newObject)
}
const handledata = () => {
  setShldisv(true);
}
//const namee = () => {
//return ()
//}




  return (
    <div className="App">
      <input placeholder="name" onChange={handlechange} value={inp.name}/>


      {
        shldisv
        ?
        <h1>{inp.name}</h1>
        :
        null
      }


      
      <button onClick={handledata}> show name</button>

    </div>
  );
}

export default App;
