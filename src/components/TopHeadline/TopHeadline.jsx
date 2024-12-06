import News from '../News/News';
import data from '../../news-article.json'
const TopHeadline = () => {
    console.log(data.articles)

    return (
        <>
            <h4>Top headline: {data.articles.length}</h4>
            {
                data.articles.map(article => <News key={article.index} article={article}></News>)
            }
        </>
    );
};

export default TopHeadline;