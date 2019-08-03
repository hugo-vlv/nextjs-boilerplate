import React from 'react';
import styled from 'styled-components';
import {
    Grid, Message, List, Icon,
} from 'semantic-ui-react';

import { SampleCounter } from '../components';

const HomeWrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const HomeGrid = styled(Grid)`
    &&&&& {
        flex: 0 0 100%;
    }
`;

const MessageLink = styled.a`
    font-weight: bold;
`;

const Home = () => (
    <HomeWrapper>
        <HomeGrid padded>
            <Grid.Row centered>
                <Grid.Column textAlign="center" width={8}>
                    <Message icon color="blue">
                        <Icon name="react" loading />
                        <Message.Content>
                            <Message.Header>NextJS SSR Boilerplate</Message.Header>
                            <Message.List>
                                <Message.Item>
                                    <MessageLink href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">
                                        NextJS
                                    </MessageLink>
                                </Message.Item>
                                <Message.Item>
                                    <MessageLink href="https://react.semantic-ui.com" rel="noopener noreferrer" target="_blank">
                                        Semantic UI (React)
                                    </MessageLink>
                                </Message.Item>
                                <Message.Item>
                                    <MessageLink href="https://www.styled-components.com/" rel="noopener noreferrer" target="_blank">
                                        Styled Components
                                    </MessageLink>
                                </Message.Item>
                                <Message.Item>
                                    <MessageLink href="https://github.com/airbnb/javascript" rel="noopener noreferrer" target="_blank">
                                        Airbnb style Javascript
                                    </MessageLink>
                                </Message.Item>
                            </Message.List>
                        </Message.Content>
                    </Message>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <SampleCounter />
                </Grid.Column>
            </Grid.Row>
        </HomeGrid>
    </HomeWrapper>
);

export default Home;
