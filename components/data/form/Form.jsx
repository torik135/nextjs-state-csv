import { useState } from "react"

import Input from "./Input"
import CheckBox from "./CheckBox"

const Form = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [check, setCheck] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title){
            alert('Form cannot be empty!')
        } else {
            onAdd({title, text, check})
        }

        

        setTitle('')
        setText('')
        setCheck(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>

            <div className="form-control">
                <label>Title</label>
                <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
            </div>
            
            <div className="form-control">
                <label>Text</label>
                <Input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
            </div>
            
            <div className="form-control form-control-check">
                <label>Check</label>
                <CheckBox
                    type="checkbox"
                    value={check}
                    checked={check}
                    onChange={(e) => setCheck(e.currentTarget.checked)}
                    />
            </div>
            <br/><br/>

            <input type="submit" value="submit" className="btn btn-block"/>

        </form>
    )
}

export default Form
