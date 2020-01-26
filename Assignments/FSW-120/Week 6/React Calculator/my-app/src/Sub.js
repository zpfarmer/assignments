import React from 'react'

function subValues() {
    let num1, num2, res;
    num1 = Number(document.Sub.txtNum1.value)
    num2 = Number(document.Sub.txtNum2.value)
    res = num1 - num2;

    document.sub.txtres.value=res
    
}

function Sub() {
    return (
        <div>
            <form>
                First number:<input type="number" className="txtNum1"></input>
                Second number:<input type="number" className="txtNum2"></input>
                Result: <input className="textres"></input>
                <input type="button" value="Calculate" onClick={subValues()}></input>
                
            </form>
        </div>
    
            
    )
}

export default Sub
