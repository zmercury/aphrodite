import styled from "styled-components";


export const WeatherWidget = styled.div`  
    z-index: 12;
    width: 29em;
    height: 8em;
    
    position: absolute;
    bottom: 5em;
    left: 5em;

    display: flex;
    flex-direction: row;

    color: #fff;
`;

export const WidgetOne = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .temprature {
        font-size: 8em;
    }
`;

export const WidgetTwo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    
    justify-content: flex-end;
    align-items: center;
    
    .cityName{
        font-size: 3.4em;
    }
    
    `;

export const WidgetThree = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    
    justify-content: flex-end;
    /* justify-content: center; */
    align-items: center;

    .weatherStatus {
    }
`;