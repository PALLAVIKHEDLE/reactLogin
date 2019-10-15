import React, { Component } from 'react';
import Myform from './Myform';

class Home extends Component{

    submit=(values) =>{
        console.log(values);
    }
    render(){
        return(
        <Myform onSubmit={this.submit}/>
        );
    }

}
 export default Home;