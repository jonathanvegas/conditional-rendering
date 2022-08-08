import { useState } from 'react';
import Loading from './Loading';
import Loaded from './Loaded';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [objectExample, setObjectExample] = useState({name:"name of object"}); //don't need this
  const [userName, setUserName] = useState("Jonathan");
  const numbers = [1,2,3,4,5,6,7,8,9,0];
  //const ternary = isLoaded ? 'YES 😃' : 'NO 😭'

  return (
    <div className="App">
      <h1>Username is: {userName !== "" ? userName : "Guest"} </h1>
      <h1>Username is: {userName || "Guest"} </h1>
      <h1>{
          isLoaded && 
          <>
            {numbers.map((num)=>{
              return num + " & "
            })}
            this is really Loaded
            <Loaded />
          </>
        }</h1>

      <button onClick={()=> {
        setIsLoaded(!isLoaded)
      }}>Change Loaded</button>
      <h1>{objectExample.name}</h1>
      <h1> {isLoaded ? 'YES 😃' : 'NO 😭'} </h1>
      {
        isLoaded
        ?
        <Loaded />
        :
        <Loading />
      }
      <h1>isLoaded = {String (isLoaded)}</h1>
    </div>
  );
}

export default App;
