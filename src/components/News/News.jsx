import { Button, Card } from 'react-bootstrap';

const News = (props) => {
    const { headline, content } = props.article
    console.log("yes")
    return (

        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>
                    <h3>
                        {headline}
                    </h3>
                </Card.Title>
                <Card.Text>
                    {
                        content
                    }
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default News;