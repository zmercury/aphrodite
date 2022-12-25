import styled from "styled-components";
var viewportHeight = window.innerHeight;

console.log(viewportHeight);



export const SideContainer = styled.div` 
    position: absolute;
    width: 35vw;
    height: calc(100vh);
    right: 0;
    background: rgba(0, 0, 0, 0.15);
    /* border-radius: 16px; */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.3px);
    -webkit-backdrop-filter: blur(13.3px);

    box-shadow: 100px 50px 50px 50px #fff;
    `;

export const Menu = styled.div` 
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 15%;
    height: 4em;
    background-color: orange;
`;

export const SearchBar = styled.div` 
    width: 85%;
    height: 4em;

    display: flex;
    justify-content: center;
    align-items: center;

.searchInput{
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    vertical-align: baseline;
    font-weight: 400;
    line-height: 1.29;
    letter-spacing: .16px;
    border-radius: 0;
    outline: 2px solid transparent;
    outline-offset: -2px;
    width: 70%;
    position: relative;
    top: 20%;
    height: 60%;
    border: none;
    border-bottom: 1px solid #8d8d8d;
    background-color: transparent;
    color: #fff;
    transition: background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);  

    &::placeholder {
        font-size: 1.1em;
        color: #ffffff40;
    }
}
`;

export const Details = styled.div`  
    width: 100%;
    height: calc(100% - 4em);
`;

