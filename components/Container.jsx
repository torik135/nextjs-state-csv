import {useState} from 'react'

import Box from './Box'
import Header from './header/Header'
import Footer from './Footer'

import DataList from './form/DataList'
import AddData from '../components/form/AddData'
import Text from './Text'

import dataList from '../data/data'

const Container = () => {
    const [data, setData] = useState(dataList)

    const toggleCheck = (dataId) => {
        setData(data.map((d) => d.dataId == dataId ? {...d, check: !d.check} : d)
        )
        console.log(dataId)
    }

    const deleteFunc = (dataId) => {
        setData(data.filter((d) => d.dataId !== dataId))
        console.log(dataId)
    }

    console.log(deleteFunc)

    return (
        <div>
            <Header/>

            <div className="container">
                
                
                <Box flex={1}>
                    <Text>
                        <h4>FORM</h4>
                    </Text>
                    <hr/>
                    <AddData/>
                </Box>
            
            
            
                <Box flex={2}>
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
