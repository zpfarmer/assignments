import React from 'react'

function Mul() {
    return (
        <div>
            <form>
                First number:<input type="number" className="txtNum1"></input>
                Second number:<input type="number" className="txtNum2"></input>
                Result: <input className="textres"></input>
                <input type="button" value="Calculate" onClick="mulValues()"></input>
            </form>
        </div>
    )
}

export default Mul