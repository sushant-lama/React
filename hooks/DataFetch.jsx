import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DataFetch = () => {
    let [posts, setPosts] = useState([])
    let [length, setLength] = useState(20)
    useEffect(() => {
        //promise async
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            return response.json()
        })
        .then(data => setPosts(data.slice(0,length)))
        .catch((error) => {console.log(error)})
    }, [length])

  return (
      <div>
        {
            //if not unique (post, index)
            posts.map( (post) => {
                return <div className='p-5 shadow-2xl rounded-2xl' key={post.id}>
                    {/* <h2>{post.id}. {post.title}</h2>
                    <p>
                        {post.body}
                    </p> */}
                    <Link to={`/post/${post.id}`}>{post.id}. {post.title}</Link>
                </div>
            } )
        }
        {
            length < 100 ?
            <button onClick={() => setLength(length+20)}>Show more...</button>
            :
            <div>All posts loaded!</div>
        }
       
            {/* // length>20 ? */}
            {/* <button onClick={() => setLength(length-20)} disabled= {length<=20}>Show Less</button> */}
            {/* // :
            // <div>cannot show less</div> */}

        {length > 20 && (
          <button onClick={() => setLength(length - 20)}>
            Show Less
          </button>
        )}
        
      </div>
  )
}

export default DataFetch