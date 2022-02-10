import Data from "./Data"

const DataList = ({datalist, onToggle}) => {
    return (
        <div>
            {datalist.map((data, index) => (
                <Data
                    key={index}
                    datalist={data}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default DataList
