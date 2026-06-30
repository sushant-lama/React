import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './Second'
import LetConstVar from './pages/LetConstVar'
import RevisionLayout from './components/layouts/RevisionLayout'
import PageNotFound from './pages/PageNotFound'
import Layout from './components/layouts/Layout'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Servicespage from './pages/Servicespage'
import Contactpage from './pages/Contactpage'
import Counter from '../hooks/Counter'
import Classroom from './pages/Classroom'
import DataFetch from '../hooks/DataFetch'
import Posts from '../hooks/Posts'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element= {<Layout/>}>
          {/*landing page*/}
          <Route index element = {<Homepage/>}/>
          {/* or
          <Route path='/' element= {<First/>} /> */}

          <Route path= '/about' element={<Aboutpage/>} />
          <Route path= '/services' element={<Servicespage/>} />
          <Route path= '/contact' element={<Contactpage/>} />
          <Route path= '/counter' element={<Counter/>} />

          <Route path ='/second' element= {<Second/>} />

          <Route path ='/classroom' element= {<Classroom/>} />
          <Route path ='/posts' element= {<DataFetch/>} />

          {/* dynamic route */}
          <Route path='/post/:id' element ={<Posts/>}/>

          <Route path= '/revision' element= {<RevisionLayout/>}>
              <Route path ='topic1' element= {<LetConstVar/>} />
              {/* <Route path= 'first' element= {<First/>} /> */}
              <Route index element= {<First/>} />
          </Route>

          <Route path='*' element= {<PageNotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes