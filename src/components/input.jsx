import styled from "styled-components";


const InputStyle = styled.input `
    padding:20px;
    outline:none;
    background:#22263B;
    border:none;
    color:#fff;
    margin-bottom:10px;
`

const Input = ({onChange, type, name, placeholder, value})=>{
    return(
    <InputStyle 
        onChange={onChange} 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
     />
     )
}

export default Input