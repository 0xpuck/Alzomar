import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   right: 30px;
   alignitems: right;
   bottom: 40px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: white;
   `;
export const Chat = styled.div`
   position: fixed; 
   right: 30px;
   alignitems: right;
   bottom: 20px;
   font-size: 3rem;
   z-index: 3;
   cursor: pointer;
   color: green;
   `;