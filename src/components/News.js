import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '.'
import './newsformat.css'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [search,setSearch]=useState('')
    const [news,setNews]= useState('uganda')

  
    useEffect(() => {
        const getArticles = async () => {
           
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(news)}&apiKey=2792ad6e6b0b43faaa170adbb093b646`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [news])
    
    const searchNews = (event) => {
       if(event.key === 'Enter'){

        setNews(search)
           setSearch('')


       }
      }







    return (
        <div className='newsArea'>
            <h1>The News</h1>
           
             <input
             className='input'
          value={search}
          onChange={event => setSearch(event.target.value)}
          onKeyPress={searchNews}
          placeholder='search for news'
          type="text" />
           <h3>The headlines</h3>
             
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default News