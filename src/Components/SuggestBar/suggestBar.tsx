import React from 'react';
import { usePoiContext } from '../Maparea/PoiContext';

// bootstrap bits
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SuggestBar: React.FC = () => {
    const { data } = usePoiContext();

    return (
        <aside className='bg-blue-dark rounded-md'>
            {data.slice(0, 5).map((place, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" alt={`${place.name} image`} />
                    <Card.Body>
                        <Card.Title>{place.name}</Card.Title>
                        <Card.Text>
                            User Rated: {place.rating}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
        </aside>
    );
};

export default SuggestBar;