import { css } from 'styled-components';

export const PageContainer = css`
    height: max-content;
    min-height: 70vh;
    width: 70vw;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
`;

export const PageH2 = css`
    text-transform: uppercase;
    color: #fff;
    font-size: clamp(2rem, 4vw, 4rem);
    letter-spacing: .3rem;
    margin: 2rem 0;
`;