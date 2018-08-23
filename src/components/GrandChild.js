import React,{Component} from 'react' 
import { withData,Consumer } from '../context'
class GrandChild extends Component{
 
// ---------------------------------- Method 1--------------------------------------------
// Value can be used only inside the consumer tags     
//     render(){
//         return(
//         <Consumer>
//             {value => 
//             <div>
//                 <h1>GrandChild</h1>
//                 {console.log('Inside the Consumer Tags',value)}
//             </div>} 
//         </Consumer>
//         )

//     }
// }
// export default GrandChild

//------------------------------------Method 2--------------------------------------------
// Value can be used anywhere inside the component,with help of higher order component
// available in context.js
componentDidMount(){
    console.log("Inside componentDidMount method",this.props)
}
render(){
        return(
                <div>
                    <h1>GrandChild</h1>
                </div>

        )
    }
}
export default withData(GrandChild)