const Box = ({children, flex, minWidth}) => {
    return (
        <div className="box" style={{flex: flex, minWidth: minWidth}}>
            {children}
        </div>
    )
}

export default Box
