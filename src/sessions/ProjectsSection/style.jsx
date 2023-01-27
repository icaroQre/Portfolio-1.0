import styled from "styled-components";

export const Container = styled.div`

    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 20%;

    @media (max-width: 1025px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2rem 0;
    }

`