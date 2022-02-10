import Box from './Box'
import Header from './header/Header'
import Footer from './Footer'

import DataList from './form/DataList'
import AddData from '../components/form/AddData'
import Heading from './header/Heading'

const Container = () => {
    return (
        <div>
            <Header/>

            <div className="container">
                
                
                <Box flex={1}>
                    <Heading>
                        <h4>FORM</h4>
                    </Heading>
                    <hr/>
                    <AddData/>
                </Box>
            
            
            
                <Box flex={2}>
                    <Heading>
                        <h4>LIST</h4>
                    </Heading>
                    <hr/>
                    <DataList/>
                </Box>
                

            </div>
            

            <Footer/>
        </div>
    )
}

export default Container
