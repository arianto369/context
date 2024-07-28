import React, { useState , useContext } from 'react'
import { CounterContext } from './context/CounterContext';

import { Link } from 'react-router-dom';

function Home() {
  const {counter , setCounter} = useContext(CounterContext);
  
  return (
    <>

  <button onClick={() =>setCounter(prevState => prevState + 1)}> +</button>
  {counter}

  <Link to='/'> go to app </Link>

    </>
  )
}

export default Home;
