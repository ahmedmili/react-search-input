import { useState } from 'react';
import './App.css';
import {Users} from "./usersData"

function App() {

  const [query, setQuery] = useState("");   // create variabel that we will research 
  // console.log(query);
  return (
    <div className="App">
        <input type="text" placeholder='search ...' onChange={e => setQuery(e.target.value)} className="search" /> {/*charging values to the variable state */}
        <ul className="list">
          {/*
              -- 1st we have to filter data and search for users that have the variabels include in
              -- 2nd we have to write all of them (using mapping)
          */}
        {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map( user =>(
         <li key={user.id} className="listItems">{user.first_name}</li> 
  ))}
        </ul>
    </div>
  );
}

export default App;
