import styled from "styled-components";


const InputStyle = styled.textarea `
    padding:20px;
    outline:none;
    background:#22263B;
    border:none;
    color:#fff;
    margin-bottom:10px;
    height:150px;
`

const TextArea = ({onChange, name, placeholder, value})=>{
    return(
    <InputStyle 
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
     />
     )
}

export default TextArea