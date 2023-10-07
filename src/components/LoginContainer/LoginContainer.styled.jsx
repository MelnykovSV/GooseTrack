import styled from '@emotion/styled';




const Container = styled.div`
height: 100vh;
padding: 0 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
 background-color:#DCEBF7 ;

 @media screen and  (min-width: 1440px) {
	background: ${(props) =>
		props.page === 'login'
			? `url(${props.loginBackground}) ;
	background-position-y:75%;
	background-position-x: 90%;
	`
			: `url(${props.registrationBackground});
			background-position-y: 100%;
			background-position-x: 10%;
			`
	};
 background-repeat: no-repeat;
 background-color:#DCEBF7 ;
 background-size:25%
}
`;

export { Container }