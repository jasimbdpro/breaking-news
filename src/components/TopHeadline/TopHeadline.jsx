import News from '../News/News';
import { useEffect, useState } from 'react';
const TopHeadline = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/jasimbdpro/breaking-news/main/src/news-article.json")
            .then(res => res.json())
            .then(d => setData(d.articles))
    }, [])


    return (
        <>
            <h4>Top headline: {data && data.length}</h4>
            {
                data && data.map(article => <News key={article.id} article={article} />)
            }
        </>
    );
};

export default TopHeadline;