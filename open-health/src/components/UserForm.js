import React, {useState} from 'react'
import { TextField, Button } from '@material-ui/core'
import _ from 'lodash'
import {isRequired, mustBeValidEmail} from 'utils/validators'
import {v4} from 'uuid'

const UserForm = (props) => {
	const { handleAddUser } = props
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [note, setNote] = useState("")

	const canSubmit = () => {
		return _.isEmpty(firstName) ||
		_.isEmpty(lastName) ||
		_.isEmpty(email) ||
		_.isEmpty(note) ||
		mustBeValidEmail(email) !== ""
	}

	const handleOnClick = () => {
		handleAddUser({
			id: v4(),
			firstName,
			lastName,
			email,
			note
		})
		resetForm()
	}

	const resetForm = () => {
		setFirstName("")
		setLastName("")
		setEmail("")
		setNote("")
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column'}}>
			<div style={{ marginTop: 10, marginBottom: 10}}>
				<FormField
					label="First Name"
					value={firstName}
					setVal={setFirstName}
					validators={[isRequired]}
				/>
			</div>

			<div style={{ marginTop: 10, marginBottom: 10}}>
				<FormField
					label="Last Name"
					value={lastName}
					setVal={setLastName}
					validators={[isRequired]}
				/>
			</div>
		
			<div style={{ marginTop: 10, marginBottom: 10}}>
				<FormField
					label="Email"
					value={email}
					setVal={setEmail}
					validators={[isRequired, mustBeValidEmail]}
				/>
			</div>

			<div style={{ marginTop: 10, marginBottom: 10}}>
				<FormField
					label="Note"
					value={note}
					setVal={setNote}
					validators={[isRequired]}
				/>
			</div>

			<Button 
				disabled={canSubmit()}
				variant="contained" 
				color="primary"
				onClick={handleOnClick}
			>
				Add User
			</Button>
		</ div>
	)
}

// Component to help control the individual state of a textfield
const FormField = (props) => {
	const {
		value,
		label,
		validators, 
		setVal,
	} = props
	const [errMsg, setErrMsg] = useState("")

	function validate(){
		validators.every(validator => {
			const err = validator(value)
			if(err !== "") {
				setErrMsg(err)
				return false
			}
			setErrMsg("")
			return true
		})
	}

	return (
		<TextField 
				size="medium"
				error={!_.isEmpty(errMsg)}
				label={label}
				variant="outlined"
				required
				value={value}
				onChange={e => setVal(e.target.value)}
				onBlur={validate}
				helperText={!_.isEmpty(errMsg) && errMsg}
		/>
	)
}

export {UserForm}