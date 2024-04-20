import { useEffect, useState } from 'react';
import './background.css';

export default function background() {
    const generateBoxShadows = (numShadows) => {
        let shadows = [];
        for (let i = 0; i < numShadows; i++) {
            shadows.push(`${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`);
        }
        return shadows.join(", ");
    };

    const Stars = ({ id, size, speed, numberOfStars }) => {
        const [boxShadows, setBoxShadows] = useState('');

        useEffect(() => {
            setBoxShadows(generateBoxShadows(numberOfStars));
        }, [numberOfStars]);

        return (
            <div
                id={id}
                style={{
                    width: size,
                    height: size,
                    animation: `animStar ${speed}s linear infinite`,
                    boxShadow: boxShadows,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    content: '""'
                }}
            />
        );
    };

    return (
        <>
            <Stars id="stars" size="1px" speed={50} numberOfStars={700} />
            <Stars id="stars2" size="2px" speed={100} numberOfStars={200} />
            <Stars id="stars3" size="3px" speed={150} numberOfStars={100} />
        </>
    )
}