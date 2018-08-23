import React,{Component} from 'react' 
import { withData } from '../context'
class Child2 extends Component{
    
    render(){
        return(
                <div>
                    <h1>Child2</h1>
                    {/* <h2>Context API:HOC:{this.props[0].func()}</h2>
                    {console.log(this.props[1].data)} */}
                 </div>

        )
    }
}

export default withData(Child2)