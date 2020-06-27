import React from "react"


function TodoItem() {
    return(
        <div>
            <input type="checkbox" />
            <label> Salt</label>
        </div>
    )
}

function App() {
    return (
        <div>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App