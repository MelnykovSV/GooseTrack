import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
height: 100vh;
padding: 0 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color:#DCEBF7 ;
`;

const Form = styled.form`
	width: 290px;
	margin-bottom: 18px;
	padding: 40px 24px;
	background-color: #fff;
	border-radius: 8px;
	@media screen and (min-width :  375px ) {
	width: 335px;
	}
	@media screen and (min-width :  768px ) {
	width: 480px;
	}
	@media screen and (min-width :  1440px ) {
	width: 480px;
	}
`

const Input = styled.input`
display: block;
padding: 14px;
margin-bottom: 24px;
width:100%;
height: 46px;
border-radius: 8px;
background: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 128.571% */
`
const Heading = styled.h1`
margin: 0;
margin-bottom: 22px;
color: #3E85F3;
text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 133.333% */
`

const InputHeader = styled.label`
display: block;
margin: 0;
margin-bottom: 8px;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
color :#111;
`

const Button = styled.button`
display: flex;
width: 100%;
justify-content: center;
padding: 14px ;
gap: 10px;
border-radius: 16px;
border: none;
background: #3E85F3;
box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 128.571% */
letter-spacing: -0.28px;
cursor: pointer;
transition: background 200ms linear;
:hover,:focus{
	border-radius: 16px;
background: #2B78EF;
box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
}
`

const StyledLink = styled.a`
	color: #3E85F3;
text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 14px; /* 116.667% */
text-decoration-line: underline;
`

const StyledSpan = styled.span`
position: absolute;
left: 10%;
bottom: -30%;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 116.667% */
color:   #E74A3B; 
`
const WrapperInput = styled.div`
	position: relative;
 `

const Hyperlink = styled(Link)`
color: #3E85F3;
text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 133.333% */
text-decoration-line: underline;
transition: color 200ms linear;
&:hover{
	color: #2B78EF;
}
  
`;

export { Container, Form, Input, Heading, InputHeader, Button, StyledLink, StyledSpan, WrapperInput, Hyperlink };
