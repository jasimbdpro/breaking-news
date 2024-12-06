import News from '../News/News';
import { useEffect, useState } from 'react';
const TopHeadline = () => {
    console.log(data.articles)
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/jasimbdpro/breaking-news/main/src/news-article.json")
            .then(res => res.json())
            .then(d => setData(d))

    }, [])


    return (
        <>
            <h4>Top headline: {data.articles.length}</h4>
            {
                data && data.articles.map(article => <News key={article.index} article={article}></News>)
            }
        </>
    );
};

export default TopHeadline;