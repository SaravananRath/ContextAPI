import React,{Component} from 'react'
import Child1 from './Child1'
class Parent extends Component{
    render(){
        return(
            <div>
                <h1>Parent</h1>
                {(this.props.data)?(<h3>{this.props.data}</h3>):(<div>No Props Recived</div>)}
                <Child1 data={this.props.data}/>
            </div>
           
        )
    }
}

export default Parent