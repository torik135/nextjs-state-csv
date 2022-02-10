import { useState } from "react"
import Form from "./form/Form"

const AddData = ({onAdd}) => {

    return (
        <div>
            <Form onAdd={onAdd} />
        </div>
    )
}

export default AddData
