import React, { useEffect, useState } from 'react'
import './Team.scss'
import axios from 'axios'


interface userContent {
  id : number , 
  image: string,
  firstName: string , 
  lastName : string , 
  company : {department : string}
}

const API__URL: string = 'https://dummyjson.com'

const Team:React.FC = () => {

    const [usersData , setusersData] = useState<null | userContent[]> (null)


    useEffect(() => {
        axios
           .get(`${API__URL}/users?limit=4`)
           .then(res => setusersData(res.data.users))
           
    } , [])

    
    
    let UserCard : JSX.Element[] | undefined = usersData?.map((user : userContent) => 
      <div key={user.id} className="team__card">
          <img src={user.image} alt="" />
          <h2>{user.firstName} {user.lastName}</h2>
          <p>{user.company.department}</p>
       </div>
    )
    


  return (
    <>
      <div className="team">
        <div className="container">
            <div className="team__title">
               <h1>Meet our team</h1>
            </div>
            <div className="team__cards">
                {UserCard}
            </div>
        </div>
      </div>
    </>
  )
}

export default Team