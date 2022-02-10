const Toast = ({text, openToast}) => {

    return <>
        <div className="toast" onDoubleClick={openToast}>
            <i>click twice to close</i>
            <hr/>
            {text}
        </div>
    </>
}

export default Toast
