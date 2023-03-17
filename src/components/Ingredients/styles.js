import styled from 'styled-components'

export const Container = styled.div`
  > p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 140%;
    text-align: center;


    background: ${({theme}) => theme.COLORS.BLUE_300};
    padding: 4px 8px;
    border-radius: 5px;
  }
`
