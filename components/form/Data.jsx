import Button from '../Button'

const Data = ({datalist, onToggle}) => {
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
                />
                </h4>
            <p>{datalist.text}</p>
        </div>
    )
}

export default Data
