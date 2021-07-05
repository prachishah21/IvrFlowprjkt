import React from 'react'
const Hello = () => {
    // return(
    //     <div>
    //         <h1> Hello Prachi</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        null,
        React.createElement('h1',null,'Hello Prachi')
    )
}
export default Hello