const Box = ({children, flex, minWidth, height}) => {
    return (
        <div className="box" style={{
            flex: flex, 
            minWidth: minWidth,
            height: height
            }}>
            {children}
        </div>
    )
}

export default Box
