import { Button, ButtonProps, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

type Props =  ButtonProps & {
    loading?: boolean
    to?: string
} 
   


export function CustomButton ({children, loading, to, ...otherProps}: Props)  { 
 
        const button  = (
        <ButtonStyled {...otherProps}>
        {loading && (
            <Spinner animation= "border" role="status" size="sm" className="me-2">
                <span className="visually-hidden"> Carregando...</span>
            </Spinner>
        )}
        {children}
        </ButtonStyled>
    )
    if (to) {
        return (
            <LinkContainer to={to}>
                {button}
            </LinkContainer>
        )
    }
    return button
}
const ButtonStyled = styled(Button)`
border-radius:100px;
font-weight: 500;
padding-left: 50px;
padding-right: 50px;
${props => props.size ==='lg' && `
    font-size: 1.125rem;
`}
${props => (props.variant === 'primary' || !props.variant) && `
background-color: #069016;
border-color:#069016;
&:hover {
    background-color: #02ff20;
    border-color: #02ff20;
}
`}
${props => props.variant === 'outline-primary' && `
color: #069016;
border-color:#069016 ;
&:hover {
    background-color: #02ff20;
    border-color: #02ff20;
}
`}
`