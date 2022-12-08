import React from 'react'
import './blogcard.css';

export default function BlogCard({img, date, title}) {
  return (
    <>
    <div className='blogcard'>
    <img src={img} style={{height:80,width:120}} />
    <div>

    <p className='publishedat'>{date}</p>
    <p className='blogcards_title'>{title}</p>
    </div>
</div>
    <hr className='hrr'/>
    </>
  )
}
