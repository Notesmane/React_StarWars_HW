import './App.css';
import {useState, useEffect} from 'react';
import React from 'react';


function App() {
  const [ships, setShips] = useState(null)
  // when the page runs, everthing in the curl brackets run
  // everything in the curly brackets is the check
  // everything in the square brackets is whats wrong with it now (dependencies)
  // useEffect(() => {}, []) --  this is an anonymous function
  useEffect(() => {
    async function getAllStarShips() {
      // this just is the fetch part, it also needs to be stored in a variable
      try {
      // below stores it into a variable
      const fetchData = await fetch("https://swapi.dev/api/starships/")
      // we use json becuase when we fetch the data its not readable. we need to turn the data into a json(javascript object notation) so it can be read in the console
        const data = await fetchData.json()
        setShips(data.results)
      } catch (error) {
        console.log(error);
      }
    }
    getAllStarShips();
  }, [])
    console.log(ships)
    // declared the mapping variable, using a boolean
    const mapShips = ships ? ships.map(ship => <h2 className='ship'>{ship.name}</h2>) : <h2>loading...</h2> 

  return (
    <div className="App">
      {mapShips} 
      {/* below is an alternate way to write the above, the const mapShips would be removed as well as the {mapShips}
      {ships ? ships.map(ship => <h2 className='ship'>{ship.name}</h2>) : <h2>loading...</h2>} */}
    </div>
  );
}

export default App;