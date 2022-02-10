import Button from '../Button'

const Data = ({datalist, onToggle, onDelete}) => {
    return (
        <div 
            className={`data ${datalist.check ? 'bool' : ''}`}
            onDoubleClick={() => onToggle(datalist.dataId)}
        >
            <h4>
                {datalist.title} - {datalist.dataId}
                <Button
                    text="delete"
                    color="red"
                    textBtn="yellow"
                    textBtnSize="16px"
                    onClick={() => onDelete(datalist.dataId)}
                />
                </h4>
            <p>{datalist.text}</p>
        </div>
    )
}

export default Data
