const Button = ({text, color}) => {
    return <>

        <button 
            className="btn" 
            stye={{backgroundColor: color}}
        >
            {text}
        </button>        
    
    </>
    
}

export default Button
