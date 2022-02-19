import Button from '../Button'
import Nav from '../header/Nav'

import DataContext from '../../context/DataContext'
import {contextData} from '../../context/DataContext'
import {useContext} from 'react'

const Data = ({onToggle, onDelete}) => {


    const {data, setData} = useContext(contextData)
/*
    console.log(typeof data)
    console.log(data)
    console.log('keys', Object.keys(data))
    console.log('values', Object.values(data))
    let dataVal = Object.values(data)
    console.log(dataVal)
*/	

	
    return (
		<div>
		{data.map((datalist, index) => (
		
        <div className={`data ${datalist.check ? 'bool' : ''}`}>
            <h4>
                {datalist.title} - {datalist.dataId} - {datalist.check ? 'true' : 'false'}
                <Nav>

                <Button
                    text="delete"
                    color="red"
                    textBtn="yellow"
                    textBtnSize="16px"
                    onClick={() => onDelete(datalist.dataId)}
                    />
                <Button
                    text={datalist.check ? 'uncheck' : 'check'}
                    color="green"
                    textBtn="yellow"
                    textBtnSize="16px"
                    onClick={() => onToggle(datalist.dataId)}
                    />
                </Nav>
                </h4>
            <p>{datalist.text}</p>
        </div>
		) )}
		</div>
        )
}

export default Data
