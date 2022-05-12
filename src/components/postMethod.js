import React, { Component } from 'react';
import axios from 'axios';

export default class PostMethod extends Component {
     constructor(props) {
       super(props)
     this.state = {
        userid:'',
          id:'',
          title:'',
          body:''
       }
     }
     changeHandler=(event)=>
     {
         this.setState({
             [event.target.name]:event.target.value
         })
           console.log(this.state.id)
     }
     submitHandler=(event)=>
     {
         event.preventDefault();
         axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
         .then(response=>{
            alert('data inserted successfully')
            //console.log(response)
        })
         .catch(error=>{
             alert('Error is Occured')
             //console.log(error)
         })
     }
  render() {
      const {userid,id,title,body}=this.state
    return (
      <div>
         <form onSubmit={this.submitHandler} className="text-center forms"> 
         <div className='form-group'>
                <label>USERID</label>
             <input type="text" name="userid" value={userid} onChange={this.changeHandler} className="form-control" />
              </div>             
             <div className='form-group'>
                <label>ID</label>
             <input type="text" name="id" value={id} onChange={this.changeHandler} className="form-control" />
              </div>
              <div className='form-group'>
                <label>TITLE</label>
             <input type="text" name="title" value={title} onChange={this.changeHandler} className="form-control" />
              </div>
              <div className='form-group'>
                <label>BODY</label>
             <input type="text" name="body" value={body} onChange={this.changeHandler} className="form-control" />
              </div> 
              <button type="submit" className="btn btn-primary">SUBMIT</button>


         </form>
      </div>
    )
  }
}
