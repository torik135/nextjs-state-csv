import {useState} from 'react'

import Header from './header/Header'
import Footer from './Footer'

import Box from './Box'
import Toast from './Toast'

import DataList from './data/DataList'
import AddData from './data/AddData'
import Text from './Text'

import SaveCSV from './save/SaveCSV'

import dataList from '../data/data'

const Container = () => {
    const [data, setData] = useState(dataList)
    const [toast, setToast] = useState(false)
    const [toastText, setToastText] = useState('')

    const toggleCheck = (dataId) => {
        setData(data.map(
            (d) => d.dataId == dataId ? {...d, check: !d.check} : d)
        )
    }

    const deleteFunc = (dataId) => {
        setData(data.filter((d) => d.dataId !== dataId))
        setToast(true)
        setToastText(`data id: ${dataId} deleted`)
    }

    const onAdd = (d) => {
        const dataId = Math.floor(Math.random() * 10000) + 1
        const newData = {dataId, ...d}

        setData([newData, ...data])
        setToast(true)
        setToastText(`data id: ${dataId} created`)
    }

    return (
        <div className="global-container">
            {toast ? 
                <Toast text={toastText} openToast={() => setToast(!toast)}/>
            : null}


            <Header/>

            <div className="container">
                
                
                <Box flex={2} height="400px">
                    <Text>
                        <h4>FORM</h4>
                    </Text>
                    <hr/>
                    <AddData onAdd={onAdd} />
                </Box>
            
            
                <Box flex={1} height="400px">
                    <Text>
                        <h4>INFO</h4>
                    </Text>
                    <hr/>

                    <p>Works better on desktop view</p>
                        
                    <SaveCSV data={data}/>
                    
                </Box>
            </div>
            
            <div className="container">
    
                <Box flex={1} minWidth="100%" height="550px">
                    <Text>
                        <h4>LIST</h4>
                    </Text>
                    <hr/>
                    {data.length > 0 ? 
                        <DataList
                        datalist={data}
                        onToggle={toggleCheck}
                        onDelete={deleteFunc}
                        />
                        
                        : <p>no data</p>}
                </Box>
                
            </div>

            

            <Footer/>
        </div>
    )
}

export default Container
