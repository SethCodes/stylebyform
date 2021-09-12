import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BACKEND_URL from "./config";


function App() {

  const [items, setItems] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(BACKEND_URL + "/blogs" );
      setItems(res.data);


    };
    getData();


  }, []);

  return (
    <div className="App">
    <h1>hello</h1>
    {
      items.map((item) => {
        return(
          <div className="">
            <ul>
              <li>{item.title}</li>
            </ul>
          </div>
        )
      })
    }
    </div>
  );
}

export default App;
