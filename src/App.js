import React from 'react';
import './App.css';
import { useMoralis } from "react-moralis";
import { Home } from './views/home';
import Routing from './Router/route'





export default function App() {
  const { isAuthenticated } = useMoralis();
  console.log("isAuthenticated: ", isAuthenticated);


  if (!isAuthenticated) {
    return <Home />
  }


  return (
    <>
      <Routing />
    </>
  )



}






