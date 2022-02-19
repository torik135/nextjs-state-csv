import { createContext, useState } from 'react'
import dataList from '../data/data'


export const contextData = createContext()

const DataContext = ({ children }) => {


  const [data, setData] = useState(dataList)

  return (
    <contextData.Provider value={{ data, setData }}>{children}</contextData.Provider>
  )
}

export default DataContext