const CheckBox = ({checked, value, onChange}) => {
    return (
        <div>
            <input
                type="checkbox"
                value={value}
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}

export default CheckBox
