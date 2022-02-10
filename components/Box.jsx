const Box = ({children, flex}) => {
    return (
        <div className="box" style={{flex: flex}}>
            {children}
        </div>
    )
}

export default Box
