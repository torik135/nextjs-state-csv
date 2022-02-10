const Button = ({text, color, textBtn, textBtnSize, onClick}) => {
    return <>

        <button 
            className="btn" 
            style={{
                backgroundColor: color, 
                color: textBtn,
                fontSize: textBtnSize
            }}
            onClick={onClick}
        >
            {text}
        </button>        
    
    </>
    
}

export default Button
