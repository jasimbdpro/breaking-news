import { Card } from 'react-bootstrap';

const News = (props) => {
    const { headline, content } = props.article
    console.log(props.article)
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