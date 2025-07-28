"Functional Component"

"Functional Component(NameFull function)"
function Customer()
{
    return(
        <h1>Welcome to Functional Component Using Name_Full function...</h1>
    )
}
export default Customer;


"Functional Component(Name_Less function)"
var Customer=function()
{
    return(
        <h1>Using Name_Less function...</h1>
    )
}
export default Customer;


"Functional Component(Arrow function)"
var Customer=()=>
{
    return(
        <h1>Using Arrow function...</h1>
    )
}
export default Customer;




"Class Component"

import React from "react"
class Customer extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Using Class Component...</h1>
            </div>
        )
    }
}
export default Customer;






