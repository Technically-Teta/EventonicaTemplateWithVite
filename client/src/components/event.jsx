import Card from 'react-bootstrap/Card';

const EventCard = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Date: {!props.eventtime ? "TBD" : null}</Card.Subtitle>
                <Card.Text>
                    Location: {props.location}
                    <br />
                    Description: {props.description}
                    <br />
                    Category: {props.category}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EventCard;