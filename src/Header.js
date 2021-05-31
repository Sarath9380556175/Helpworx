import React from 'react';
import Bounce from 'react-reveal/Bounce'
class Header extends React.Component{


    employer=()=>{
        this.props.history.push('/signup')
    }

    freelancer=()=>{
        this.props.history.push('/freelancer')
    }

    render()
    {
        return(
            <div className="text-center">
                <Bounce right cascade><div style={{backgroundColor:'red',height:'40px',color:'white'}} className="pt-1">
                Helpworx Technologies
                </div></Bounce>
   <div className="mb-3 mt-3">Are u an Employer or Freelancer?</div>

   <button className="btn btn-success" onClick={this.employer}>Employer</button>&nbsp;
  <button className="btn btn-success" onClick={this.freelancer}>Freelancer</button>           
   </div>
        )
    }
}

export default Header;