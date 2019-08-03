import React, { useState, useEffect } from 'react';
import { Card, Statistic } from 'semantic-ui-react';

const SampleCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(counter => counter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Card color="blue" centered>
            <Card.Content textAlign="center">
                <Card.Description>
                    <Statistic>
                        <Statistic.Value>{count}</Statistic.Value>
                        <Statistic.Label>Count</Statistic.Label>
                    </Statistic>
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default SampleCounter;
