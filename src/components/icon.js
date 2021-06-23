import styled from 'styled-components'

const IconWrapper = styled.div`
    padding:5px;
    margin:5px;
    cursor:pointer;
    transition: all 300ms;
    color:${props => props.danger ?"#FF8888":""};
    
    &:hover{
        transform:scale(1.2);
    }
`

const IconDiv = ({children, color})=>{
    return(
        <IconWrapper color >
            {children}
        </IconWrapper>
    )
}

export default IconDiv