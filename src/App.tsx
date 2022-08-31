import React from "react"
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import { AppStateProvider } from "./states/AppStates"

import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
import Login from "./pages/Login"
import Table from "./pages/Table"
import Upload from "./pages/Upload"
import Admin from "./pages/Admin"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/' element={<Login />}></Route>
            <Route path='/table' element={<Table />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/home' element={<Home />}></Route>
            <Route path='/:pokemon' element={<Pokemon />}></Route>
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </QueryClientProvider>
  )
}

export default App
