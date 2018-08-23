import React,{Component} from 'react' 
import GrandChild from './GrandChild'
class Child extends Component{
    render(){
        return(
            <div>
                <h1>Child</h1>
                <GrandChild/>
            </div>
        )
    }
}

export default Child