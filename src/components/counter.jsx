import styled from "styled-components"

const Div = styled.div `
    padding:5px;
    background: #FFF7DF;
    position: absolute;
    top: 10px;
    left: 20px;
`

const Counter = ({count})=>{
    return(
        <Div className="count-number">
            <span>You have {count} {count < 2 ? "task" : "tasks"}</span>
        </Div>
    )
}

export default Counter