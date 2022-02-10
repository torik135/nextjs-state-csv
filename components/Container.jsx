import Box from './Box'
import Header from './header/Header'
import Footer from './Footer'

import DataList from './form/DataList'
import AddData from '../components/form/AddData'

const Container = () => {
    return (
        <div>
            <Header/>
            
            <div>
                <Box>
                    <AddData/>
                </Box>
            </div>
            
            <div>
                <Box>
                    <DataList/>
                </Box>
            </div>

            <Footer/>
        </div>
    )
}

export default Container
