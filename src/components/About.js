import User from "./User.js"
const About=()=>{
    const userData = [{
        name: "Akshay Saini",
        contact: "74854666412",
        location: "Bengaluru",
        jobDesc: "React Developer",
      },{
        name: "Abhishek Kumar",
        contact: "9625754736",
        location: "Delhi",
        jobDesc: "junior developer",
      }];
    
    return (
        <div >helllo ohh you are trying to reach us
        <div className="user-container">
           { userData.map((user)=>(
            <User key={user.id} userData={user}/>
           ))}
        </div>
        </div>
    );
};

export default About;