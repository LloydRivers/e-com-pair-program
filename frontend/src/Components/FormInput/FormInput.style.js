import styled from "styled-components";

export const FormContainer = styled.div`
	position: relative;
	margin: 45px 0;
`


// export const Label = styled.label`
// 	color:grey;
// 		font-size: 16px;
// 		font-weight: normal;
// 		position: absolute;
// 		pointer-events: none;
// 		left: 5px;
// 		top: 10px;
// 		transition: 300ms ease all;

//            	&:focus {
// 			 display:none ;
// 		}

//         &:active{
//             top:-14px ;
//             font-size:12px;
//             color:black;
//         }


// `


export const Input = styled.input`

	background: none;
		background-color: white;
		color:grey;
		font-size: 18px;
		padding: 10px 10px 10px 5px;
		display: block;
		width: 100%;
		border: none;
		border-radius: 0;
		border-bottom: 1px solid grey;
		margin: 25px 0;

        	&:focus {
			outline: none;
                &>label{
                       top:-14px ;
            font-size:12px;
            color:black;
                }


		}

    


`