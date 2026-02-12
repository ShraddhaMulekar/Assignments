import React from 'react'

const UserData = ({usersData}) => {
    console.log({usersData})
  return (
    <div>
        {
            usersData.map(user=>(
                <>
                    <h2>{user.name.firstname}</h2>
                    <p>{user.email}</p>
                </>
            ))
        }
    </div>
  )
}

export default UserData