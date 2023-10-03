import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Hyperlink = styled(Link)`
display: block;
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


export { Hyperlink };
