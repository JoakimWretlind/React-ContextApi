import styled from 'styled-components';
import React, { useContext } from 'react'
import { PageContainer, PageH2 } from '../sharedStyling';
import { Link } from 'react-router-dom';
import { CardsData } from '../utils/data'
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

const MainItem = styled.div`
    padding: 1rem 3rem;
    width: 80%;
    background: #1A6194;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    border-radius: .3rem;
    box-shadow: 0 .2rem .4rem rgba(0,0,0,.2);
`

const ListItem = styled.h4`
    text-transform: uppercase;
    margin: 1rem 0;
    color: #fff;
    font-size: clamp(1.6rem, 3vw, 3rem);
    letter-spacing: .1rem;
`

const ButtonContainer = styled.div`
    display: flex;
`

const Buttons = styled(Link)`
    margin: 0 1rem;
    padding: .4rem 1.4rem;
    background-color: #f1f1f1;
    color: #333;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: .3rem;
    letter-spacing: .1rem;
    font-size: 1.2rem;
    transition: .3s ease-out;
    &:hover {
        background: #26B7D4;
        color: #fff;
    }
    &:active{
        background: maroon;
    }
`

const Home = () => {
    const { value, setValue } = useContext(DataContext);

    return (
        <>
            <Container>
                <PageHeader>
                    Home
                </PageHeader>
                {
                    CardsData.map(item => {
                        return (
                            <>
                                <MainItem>
                                    <ListItem key={item.id}>
                                        {item.title}
                                    </ListItem>
                                    <ButtonContainer>
                                        <Buttons
                                            to="/edit"
                                            onClick={() => setValue(item.title)}>
                                            Edit
                                        </Buttons>
                                        <Buttons
                                            to="/view"
                                            onClick={() => setValue(item.info)}>
                                            View
                                        </Buttons>
                                    </ButtonContainer>
                                </MainItem>
                            </>
                        )

                    })
                }

            </Container>

        </>
    )
}

export default Home
