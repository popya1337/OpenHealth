import React, {useState} from 'react'
import { TextField } from '@material-ui/core'

const UserForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [note, setNote] = useState("")

    return (
        <>
            <TextField 
                error={}
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </>
    )
}

export {UserForm}