import React from 'react'
import { connect } from 'react-redux'
import { map, identity } from 'ramda'

const Students = props => {
  const li = student => <li key={student.id}>{JSON.stringify(student)}</li>
  return (
    <div className='pa4'>
      <h2>Students</h2>
      <ul>
        {map(li, props.students)}
      </ul>
    </div>
  )
}

// state => state
const connector = connect(identity)

export default connector(Students)
