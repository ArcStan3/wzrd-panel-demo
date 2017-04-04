import React from 'react'
import TextField from '../components/text-field'
import { equals, identity } from 'ramda'
import Panel from '../components/panel'
import { connect } from 'react-redux'
import FileInput from 'react-file-input'

const StudentForm = props => {
  return (
    <div className='pa4'>
      {equals(props.panel, 'step1') && (
      <Panel title='Name Information' onNext={e => props.next('step2')}>
        <h2>Name Information</h2>
        <TextField
          label='Name'
          value={props.student.name}
          onChange={e => props.setName(e.target.value)}
              />
        <TextField
          label='Email'
          value={props.student.email}
          onChange={e => props.setEmail(e.target.value)}
              />
      </Panel>
          )}
      {equals(props.panel, 'step2') && (
      <Panel
        title='Address Information'
        onNext={e => props.next('step3')}
        onPrevious={e => props.previous('step1')}
            >
        <h2>Address Information</h2>
        <TextField
          label='Street Address'
          value={props.student.street}
          onChange={e => props.setStreet(e.target.value)}
              />
        <TextField label='City' />
        <TextField label='State' />
        <TextField label='Zip' />
      </Panel>
          )}
      {equals(props.panel, 'step3') && (
      <Panel
        title='Additional Information'
        onPrevious={e => props.previous('step2')}
        onFinish={e => {
          props.add(props.student)
          props.reset()
          props.history.push('/')
        }}
            >
        <h2>Additional Information</h2>
        <FileInput
          name='studentImage'
          accept='.png,.gif,.jpg'
          placeholder='Student Picture'
          className='bg-red ba pa2 br1 b--red black-60'
          onChange={e => {
            let reader = new FileReader()
            reader.addEventListener('load', setImage, false)
            reader.readAsDataURL(e.target.files[0])

            function setImage () {
              props.setImage(reader.result)
            }
          }}
              />
        <img src={props.student.avatar} />
        <TextField
          label='Github UserName'
          value={props.student.github}
          onChange={e => props.setGithub(e.target.value)}
              />
        <div>Skill Component Here</div>
      </Panel>
          )}
    </div>
  )
}

const mapActionsToProps = dispatch => {
  return {
    reset: () => {
      dispatch({ type: 'RESET' })
      dispatch({ type: 'RESET_STUDENT' })
    },
    setImage: image => {
      dispatch({ type: 'SET_STUDENT_IMAGE', payload: image })
    },
    setStreet: street => {
      dispatch({ type: 'SET_STUDENT_STREET', payload: street })
    },
    setGithub: github => {
      dispatch({ type: 'SET_STUDENT_GITHUB', payload: github })
    },
    setEmail: email => {
      dispatch({ type: 'SET_STUDENT_EMAIL', payload: email })
    },
    setName: name => {
      dispatch({ type: 'SET_STUDENT_NAME', payload: name })
    },
    previous: panel => dispatch({ type: 'PREVIOUS', payload: panel }),
    next: panel => dispatch({ type: 'NEXT', payload: panel }),
    add: student => dispatch({ type: 'ADD', payload: student })
  }
}

const connector = connect(identity, mapActionsToProps)

export default connector(StudentForm)
