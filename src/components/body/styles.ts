import styled from 'styled-components';

export const Main = styled.main`
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 70px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

