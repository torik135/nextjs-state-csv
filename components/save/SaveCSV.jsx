import { CSVLink } from 'react-csv'
import Button from '../Button'

const SaveCSV = ({data}) => {
    return (
        <div>
            {data.length ? 
            
            <CSVLink
                data={data}
                filename="data_download.csv"
                target="_blank"
            >
                <Button
                    text="save CSV"
                    color="blue"
                />
            </CSVLink>
            
            : <p>no data</p>}
        </div>
    )
}

export default SaveCSV
