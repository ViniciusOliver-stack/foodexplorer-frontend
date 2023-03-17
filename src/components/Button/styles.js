import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100% !important;
    height: 4.8rem;
    padding: 12px 24px !important;
    gap: 0.8rem;
    border: 0;
    border-radius: 0.5rem;
    
    font-weight: 500;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.RED_100};
`;
