import Button from '../Button'
import Nav from '../header/Nav'

const Data = ({datalist, onToggle, onDelete}) => {
    return (
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
    )
}

export default Data
