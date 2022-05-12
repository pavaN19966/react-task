import React, { Component } from 'react';
import axios from 'axios'

export default class  extends Component {

      constructor(props) {
        super(props)
      
        this.state = {
            users:[],
            error:''
        }
      }
       componentDidMount=()=>
       {
           axios.get('https://jsonplaceholder.typicode.com/users')
             .then(response=>{
                 this.setState({users:response.data})
             })
             .catch(error=>{
                this.setState({errorMsg:'Error Retriving Data'})
             })
                
       }
  render() {
     const {users,errorMsg}=this.state
     const id=users.map((users)=><p key={users.id}>{users.id}</p>)
     const name=users.map((users)=><p key={users.id}>{users.name}</p>)
     const username=users.map((users)=><p key={users.id}>{users.username}</p>)
     const email=users.map((users)=><p key={users.id}>{users.email}</p>)
      const address=users.map((users)=><p key={users.id}>{users.address.street},{users.address.suite},{users.address.city},{users.address.zipcode}</p>)
     const phone=users.map((users)=><p key={users.id}>{users.phone}</p>)
     const website=users.map((users)=><p key={users.id}>{users.website}</p>)
    const company=users.map((users)=><p key={users.id}>{users.company.name},{users.company.catchPhrase},{users.company.bs}</p>)
   return (
      <div>
          <table className="table table-bordered">
              <thead className="text-danger">
                  <tr>
                    <th>S.No</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                     <th>ADDRESS</th> 
                    <th>PHONE</th>
                    <th>WEBSITE</th>
                    <th>COMPANY</th> 
                  </tr>
              </thead>
               <tbody>
                   <tr>
                       <td>{id}</td>
                       <td>{name}</td>
                       <td>{username}</td>
                       <td>{email}</td>
                       <td>{address}</td> 
                       <td>{phone}</td>
                       <td>{website}</td>
                        <td>{company}</td> 
                   </tr>
               </tbody>
               {errorMsg?<div>{errorMsg}</div>:null}
          </table>
      </div>
    )
  }
}
