import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
