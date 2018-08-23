import React,{Component} from 'react' 
import Child2 from './Child2'
class Child1 extends Component{
    render(){
        return(
            <div>
                <h1>Child1</h1>
                {(this.props.data)?(<h3>{this.props.data}</h3>):(<div>No Props Recived</div>)}
                <Child2/>
            </div>
        )
    }
}

export default Child1