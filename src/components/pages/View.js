import React, { useContext } from 'react'
import styled from 'styled-components';
import { PageContainer, PageH2 } from '../sharedStyling';
import { DataContext } from '../../Context/DataContext';

const Container = styled.div`
    ${PageContainer};
    background: rgba(255,255,255,.3);
    box-shadow: 0.1rem .4rem .8rem rgba(14,17,89, .3);   
`

const PageHeader = styled.h2`
    ${PageH2};
    color: #fff;
`

const Value = styled.h4`
    color: red;
    font-size: 1.8rem;
    letter-spacing: .1rem;
`

const View = () => {
    const { value, setValue } = useContext(DataContext);
    return (
        <Container>
            <PageHeader>View</PageHeader>
            <Value>{value}</Value>
        </Container>
    )
}

export default View
