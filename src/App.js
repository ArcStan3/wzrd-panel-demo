import React from 'react'

import { BrowserRouter, Link, Route } from 'react-router-dom'

import Students from './pages/index'
import StudentForm from './pages/form'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <header className='pa4 bg-purple white-60'>
          <h1>JRS Coding School Students</h1>
          <nav>
            <Link className='pa2 ba bg-white purple br2 link' to='/'>
              Students
            </Link>
            <Link className='pa2 ba bg-white purple br2 link' to='/new'>
              New Student
            </Link>
          </nav>
        </header>
        <main>
          <Route exact path='/' component={Students} />
          <Route path='/new' component={StudentForm} />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
