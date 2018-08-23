import React,{ createContext } from 'react'

export const { Provider,Consumer} = createContext()

export const withData = Component =>
 props => <Consumer>
     {value => <Component{...value}{...props}/>}
 </Consumer>

 export default withData()