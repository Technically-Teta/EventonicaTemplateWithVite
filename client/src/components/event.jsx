import Card from 'react-bootstrap/Card';

const EventCard = (props) => {
    //HOW DO I ADD A TIME TEMPLATE?

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : null}</Card.Subtitle>
                <Card.Text>
                    Location: {props.location}
                    <br />
                    Description : {props.eventdescription}
                    <br />
                    Category: {props.category}
                    <br />

                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EventCard;