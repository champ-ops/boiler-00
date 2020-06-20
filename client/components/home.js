import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Main from './main'

const Home = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios('/api/v1/category').then(({ data }) => setCategories(data))
  }, [])
  return (
    <div>
      <Route exact path="/" component={() => <Main categories={categories} />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
