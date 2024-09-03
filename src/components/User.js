import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
       
        
        
    }

    render(){
        const {userData}=this.props;
        const {name,location,jobDesc,contact}=userData;

        return (
            
            <div className='user-card'>
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <h3>coantact: {contact}</h3>
                <h3>Job Description: {jobDesc}</h3>
               
            </div>
        );
    }
}
export default User;