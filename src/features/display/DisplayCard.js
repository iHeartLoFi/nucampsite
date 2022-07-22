import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({item}) => {
    const {image, name, description} = item;
    return (
        <Card>
            <CardImg src={image} name={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;