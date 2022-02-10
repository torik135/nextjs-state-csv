import Data from "./Data"

const DataList = ({datalist, onToggle, onDelete}) => {
    return (
        <div>
            {datalist.map((data, index) => (
                <Data
                    key={index}
                    datalist={data}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default DataList
