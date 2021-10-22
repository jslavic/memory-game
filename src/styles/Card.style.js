import styled from "styled-components";

/**
 * Provides styling for cards and card images
 */

const CardImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 8px;
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: 1px 1px 5px black;
    background-color: #ffffff;

    & :hover {
        width: 210px;
        height: 210px;
    }

    & :active {
        width: 200px;
        height: 200px;
    }
`;

export { StyledCard, CardImage }