import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom'
import '../src/thankyou.css'
class Thankyou extends React.Component{
    render()
    {
        return(
            <div>
                <Bounce left cascade><div className="text-center mt-3" style={{fontSize:'15px',color:'yellow'}}>Employeer successfully created account in our application</div></Bounce>
                
                <Zoom left cascade><div className="mt-3 text-center text-white" >Thankyou :)</div></Zoom>
            
            </div>
        )
    }
}

export default Thankyou;