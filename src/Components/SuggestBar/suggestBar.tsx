import React from 'react';
import { usePoiContext } from '../Maparea/PoiContext';

// bootstrap bits
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SuggestBar: React.FC = () => {
    const { data } = usePoiContext();

    return (
        <aside className='flex flex-col items-center justify-center bg-blue-dark rounded-md pt-4 px-4'>
            {data.slice(0, 5).map((place, index) => (
                <Card key={index} className="w-100 mb-4 p-4" style={{backgroundColor:'#FFB703'}}>
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