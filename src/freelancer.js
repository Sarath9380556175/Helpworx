import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../src/signup.css'
import {motion} from 'framer-motion'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border:'6px solid black',
    background:'DeepSkyBlue'
  }
};



class Freelancer extends React.Component{
  constructor()
  {
    super();
    this.state=
    {
      islogin:false,
      email:undefined,
      password:undefined,
      gender:undefined,
      logindetails:[],
      IsuserLoggedIn:false,
      iscreatingaccount:false,
      name:undefined,
      emails:undefined,
      passwords:undefined,
      genders:undefined,
      mobilenumber:undefined,
      signupdetails:{},
      skr:undefined,
      IsGoogleuserLoggedIn:false,
      googleusername:undefined,
      isuserwanttologin:false,
      facebookusername:undefined,
      isfacebookuserloggedIn:false,
      image:undefined,
      googleimage:undefined,
      restaurants:[],
      getsignupdetails:[],
      mails:undefined,
      otp:undefined,
      pawd:[],
      ispasswordverified:false
      
    }
  }

  componentDidMount()
  {
    const number=(Math.random(123456,654321).toFixed(6)/100*100000000);

    console.log(number)


    sessionStorage.clear();
    axios({
      url:'https://peaceful-hollows-65127.herokuapp.com/signups',
      method:'GET',
      headers:{'content-Type':'application/json'}
    }).then(res=>this.setState({getsignupdetails:res.data.signupdetails, mails:res.data.signupdetails.map((item)=>{return item.email}), pawd:res.data.signupdetails.map((item)=>{return item.password})}))
    .catch(error=>console.log(error))  
  }
   

    handlemail=(event)=>{
   const name=event.target.name;
   const value=event.target.value;
   this.setState({[name]:value})
    }

    
    handleaccount=(state,value)=>{
        this.setState({[state]:value,isuserwanttologin:false,islogin:false})
          }


    handlepassword=(event)=>{
      const name=event.target.name;
      console.log(name);
const value=event.target.value;
console.log(value)
this.setState({[name]:value})
       }


     

       handlename=(event)=>{
         const name=event.target.name;
         console.log(name)
         const value=event.target.value;
         console.log(value)
         this.setState({[name]:value})
       }

       handleemails=(event)=>
       {
         
        const name=event.target.name;
        console.log(name);
        const value=event.target.value;
        console.log(value);
        this.setState({[name]:value})
       }

       handlepasswords=(event)=>
       {
         
        const name=event.target.name;
        console.log(name);
        const value=event.target.value;
        console.log(value);
        this.setState({[name]:value,ispasswordverified:true})
       }

       handlemobilenumber=(event)=>{
         const name=event.target.name;
         console.log(name);
         const value=event.target.value;
         console.log(value)
   this.setState({[name]:value})
       }

       handlegenders=(gender)=>{
         console.log(gender)
         this.setState({genders:gender})
      
       }

       handlesubmit=()=>{
        const {name,emails,passwords,genders,mobilenumber,mails}=this.state;
        console.log(mails)
        const allu=mails.indexOf(emails)
   
        axios({
          
          url:'https://peaceful-hollows-65127.herokuapp.com/signup',
          method:'POST',
          headers:{'content-Type':'application/json'},
         
          data:
          {
          name:name,
          email:mails[allu]!== emails ? emails : alert('User with this email address already exist'),
          password:passwords,
          mobilenumber:mobilenumber,
          gender:genders
          }
        
        })
        .then(res=>this.setState({signupdetails:res.data.signup}))

        .catch(error=>console.log(error))

      this.props.history.push('/thank')
        
       }

    render()
    {
        
        const {iscreatingaccount}=this.state;
        return(
        <div>

     <div className="headers">
    <div className="text-white mt-1 mr-2" style={{border:'4px double red',padding:'4px 4px 4px 4px',display:'inline-block',float:'right'}} onClick={()=>this.handleaccount('iscreatingaccount',true)}>signup</div>
</div>

<Modal

isOpen={iscreatingaccount}
style={customStyles}
>

<div className="text-center">
                <div>Signup form</div>
    <div onClick={()=>this.handleaccount('iscreatingaccount',false)} style={{float:'right',marginTop:'-49px',fontSize:'20px',fontStyle:'italic',color:'gold',marginRight:'-16px'}}>close</div>

              <form style={{border:'4px double orangered'}} onSubmit={this.handlesubmit}>
       <i className="fas fa-user"></i>&nbsp;&nbsp;<input type="text" name="name"  required  onChange={this.handlename}  placeholder="Name of the Freelancer"/><br/><br/>
       <i className="fas fa-envelope"></i>&nbsp;&nbsp;<input type="email" name="emails"   required  onChange={this.handleemails}  placeholder="Email"/><br/><br/>
       <i className="fas fa-lock"></i>&nbsp;&nbsp;<input type="password" name="passwords" id="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  placeholder="Password"   required  onChange={this.handlepasswords} /><br/><br/>
       &#9743;&nbsp;<input type="tel" name="mobilenumber"  required onChange={this.handlemobilenumber} placeholder="Mobile Number"/><br/><br/>
       Gender:<i className="fas fa-male"></i>&nbsp;<input type="radio" name="genders" required  onChange={()=>this.handlegenders('male')}/>&nbsp;Male&nbsp;&nbsp;
       <i className="fas fa-male"></i>&nbsp;<input type="radio" name="genders" required   onChange={()=>this.handlegenders('female')}/>&nbsp;Female&nbsp;&nbsp;
       <i className="fas fa-male"></i>&nbsp;<input type="radio" name="genders" required    onChange={()=>this.handlegenders('others')}/>&nbsp;Others<br/><br/>

       <motion.button className="btn btn-primary"   animate="mkp" whileHover="hover">Submit</motion.button>
      
              </form>
           
              </div>

</Modal>



        </div>
        );
    }
}

export default Freelancer;