import React,{Component} from 'react'
import Child from './Child'
class Parent extends Component{
    render(){
        return(
            <div>
                <h1>Parent</h1>
                <Child/>
            </div>
           
        )
    }
}

export default Parent