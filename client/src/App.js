import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BACKEND_URL from "./config";


function App() {

  const [item, setItem] = useState("");


  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(BACKEND_URL + "/blogs/" );
      setItem(res.data);

    };
    getData();

  }, []);

  return (
    <div className="App">
     {!item ? "loading..." : (
       item.localeCompare((item)=> {
         return(
           <div className="">
             <ul>
               <li>{item.title}</li>
             </ul>
           </div>
         )
       })
     )}
    </div>
  );
}

export default App;
