import React from 'react';
import { Typography, Button } from '@material-ui/core';

const UserList = (props) => {
	const {users, handleDeleteUser} = props

	return (
		<div>
			{users.length === 0 ? (
					<Typography>No users yet...</Typography> 
			): (
				<div>
					{users.map(u => (
						<div style={{marginTop: 15, display: 'flex'}}>
							<div style={{flexDirection:'column'}}>
								<Typography>Name: {u.firstName} {u.lastName}</Typography>
								<Typography>Email: {u.email}</Typography>
								<Typography>Notes: {u.note}</Typography>	
							</div>
							<div style={{marginLeft: 15}}>
								<Button variant="contained" color="primary" onClick={() => handleDeleteUser(u.id)}>
									Remove
								</Button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export {UserList}