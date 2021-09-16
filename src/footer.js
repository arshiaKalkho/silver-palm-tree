import { Component } from "react";


 export default class Footer extends Component{


    render() {
   
        return(
            <div className = "container-fluid footer bg-light ">
                <div className='row' >
                    <div className="col-md-4">
                        arshia
                    </div>
                    <div className="col-md-4">
                        kalkhorani
                    </div>
                    <div className="col-md-4">
                        arshiabdol
                    </div>
                </div>
                    
                <div>
                <a className ="clipboard" href="#" /*onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}*/>arshiabdol@gmail.com</a>
                </div>
            </div>
        )
}
}
