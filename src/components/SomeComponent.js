//  HERE I AM USING CLASS BASED COMPONENT WHICH IS OLD METHOD, NOW AFTER INTRODUCING HOOKS WE USE 
//  FUNCTIONAL COMPONENTS (topic covered here are: props, state, callback, constructor, function, components(class based and function based), arrow function)



// import React from 'react';
// class SomeComponent extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0,
//         }
//     }
//     increment=()=>{
    //callback function using here
//         this.setState(()=>({
//             count:this.state.count + 1,
//         }))
//     }
//     render(){
//         return(
//             <div style={{textAlign:"center",padding:"30px"}}>
//                 <button onClick={()=>this.increment()}>click me</button>
//                 <p>{this.state.count}</p>
//             </div>
//         )
//     }
// }
// export default SomeComponent;

// HERE THIS CODE IS BASED ON FUNCTIONAL COMPONENTS USING HOOKS AND STATE MANAGEMENT IN REACT
// SomeComponent.js
import React, { useState } from 'react';

function SomeComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div style={{ textAlign: "center", padding: "30px" }}>
            <button onClick={increment}>Click me</button>
            <p>{count}</p>
        </div>
    );
}

export default SomeComponent;
