import React from 'react'
import {Button} from 'react-bootstrap'
import {add,getAll,reset}  from '../../services/playerService';

class ServerTest extends React.Component {
    testMethod = ()=>{
        add({name:"Test Data","Description":"Test Data"})
        .then(data=>{console.log(data)})
        add({name:"Test Data2","Description":"Test Data"})
        .then(data=>{console.log(data)})
        getAll();
        reset();
        console.log(getAll());

        
    }
    render(){
        return <Button variant = 'primary' onClick={this.testMethod}>TEST YOUR SHIT HERE</Button>;
    }
}
 export default ServerTest