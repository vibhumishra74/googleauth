import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './blog.css'
import BlogCard from './BlogCard';
import BlogCards from './BlogCards';
import { async } from '@firebase/util';


export default function Blog() {

    const[data,setData] = useState({})
    const[loader,setloader] = useState(false)
    const[errormsg,setErrormsg] = useState('')
    const[error,setError] = useState(false)

    useEffect(()=>{
        setloader(true)
        let url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-11-07&sortBy=publishedAt&apiKey=967673f7893446798c7c25654b949432';
        // let url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-11-07&sortBy=publishedAt&apiKey=967673f7893446798c7c25654b949432';
      let getdata = async()=>{
        let respo =  await axios.get(url)
           .then((data)=>   {
            setData(data.data)
            setloader(false)
           })
           .catch(e=>{
            setloader(false)
            console.log('error>>',e.response.data.message)
            setErrormsg(e.response.data.message)
            setError(true)
        })
        } 
        getdata()
    },[])
// console.log('data 21',data)
  return (
    loader?<p>loading...</p>: error?errormsg: <div className='blog_container'>
        <h1>Featured Artikel</h1>
       { Object.keys(data).length> 0 && <div className='blog_container_parent'>
            <div style={{flex:.6}}>
                <img src={`${(data && data?.articles?.[0])?.urlToImage}`} style={{height:250,width: "100%",
    objectFit:' contain',marginBottom:20 }} />
                <p className='publishedat'>{(data?.articles[0]).publishedAt}</p>
                <h1>{(data?.articles[0])?.title}</h1>
                {/* <p>{(data?.articles[0])?.description}</p> */}
                <p>{(data?.articles?.[0])?.content}</p>
            </div>
            <div className='right_section' 
            // style={{flex:.4}}
            >
                {data.articles.slice(0,3).map(e=>{

                return <BlogCard img={`${e?.urlToImage}`} title={e?.title} date={e?.publishedAt} />
            })}
            </div>
        </div>}
        <div style={{border:"1.5px solid black",marginTop:5}} />
        {Object.keys(data).length>0 && <div className='blogcards_container'>
        {data.articles.map(e=>{

return <BlogCards img={`${e?.urlToImage}`} title={e?.title} date={e?.publishedAt} />
})}
        </div>}
    </div>
  )
}
