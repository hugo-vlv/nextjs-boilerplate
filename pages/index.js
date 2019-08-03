import React from 'react';
import styled from 'styled-components';
import { Grid, Message } from 'semantic-ui-react';

const HomeWrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Home = () => (
    <HomeWrapper>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Message>This is a NextJS Boilerplate</Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </HomeWrapper>
);

export default Home;
