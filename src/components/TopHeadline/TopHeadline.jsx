import React, { useEffect, useState } from 'react';
import News from '../News/News';
const TopHeadline = () => {
    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-04-13&sortBy=publishedAt&apiKey=ff15b901c81b41b6a0dae2f96edd1087'
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles.slice(0, 20)))
    }, [])
    const [articles, setArticles] = useState([]);
    return (
        <>
            <h4>Top headline: {articles.length}</h4>
            {
                articles.map(article => <News article={article}></News>)
            }
        </>
    );
};

export default TopHeadline;