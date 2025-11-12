import { useState, createContext, useContext } from 'react'
import './App.css'
import RandCatID from './RandCatID';

const catsViewed = [];


export default function App() {
  
  return (
    <>
      <RandCatID/>
    </>
  )
}

export {catsViewed};