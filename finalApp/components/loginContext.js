import React, { useState } from "react";
import ValueProvider from './ValueContext';
import MainPage from './MainPage'

const App = () => {
  const data = {name:"no one", email:"non@none.com"}

  return (
    <ValueProvider value={data}>
        <MainPage/>
    </ValueProvider>
  )
}

export default App