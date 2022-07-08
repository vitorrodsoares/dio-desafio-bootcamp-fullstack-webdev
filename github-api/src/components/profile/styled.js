import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: spece-between;
    margin-left: 8px;
    height: 200px;

    h1{
        font-size: 32px;
        font-weight: bold;
    }
    
    h3{
        font-size: 18px;
        font-weight: bold;
    }

    h4{
        font-size: 16px;
        font-weight: bold;
    }
    
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

    h3{
        margin-right: 8px;
    }
    a { 
        margin-left: 8px;
        color: blue;
        font-weight: bold;
    }

`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
      }
`;

export const WrapperImage = styled.img`
    width: 200px;
    border-radius:50%
`;


