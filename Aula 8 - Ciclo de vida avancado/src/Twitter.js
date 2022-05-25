import React, { useEffect, useState, memo } from "react"

//shouldnt component update?
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

function Twitter (props) {
  const { loading } = props
  const [tweet, setTweet] = useState('title')

  //component did mount?
  useEffect(() => { 
    const { posts, loading } = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
  },[])

  //component did update?
  useEffect(() => {
    console.log('componentDidUpdate', loading)
  }, [loading])

  //component will unmount?
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: fui removido')
    }
  }, [])

  const handleTweet = () => {
    setTweet('tweet atualizado')
  }

  console.log('tweet atualizado', tweet)
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      tests
    </div>
  )
}

export default memo(Twitter, areEqual)