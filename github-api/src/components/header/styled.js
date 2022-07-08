import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 12px;

input {
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 8px;
    margin-right: 8px;
    height: 38px;
    font-weight: 500;
    padding: 8px;

}

button {
    background-color: #225ed8;
    border-radius: 8px;
    border: 1px solid black;
    padding: 8px 16px;
    margin: 0 8px;
    color: #fff;
    font-weight: bold;

    &:hover{
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        background-color: #2c5282;
        
    }
}
`;