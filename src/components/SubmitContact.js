import { useState } from 'react'
import validator from 'validator'

const SubmitContact = ({ onAdd }) => {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailStyle, setEmailStyle] = useState('')
  const [emailErrMsgStyle, setEmailErrMsgStyle] = useState('errorMsgInvis')

  // let emailErrorStyle = {
  //   borderColor: 'red',
  //   backgroundColor: 'black',
  // }

  const onSubmit = (e) => {
    e.preventDefault()

    if(!validateEmail()){
      return
    }

    onAdd({ first_name, last_name, title, email, message })

    setFirstName('')
    setLastName('')
    setTitle('')
    setEmail('')
    setMessage('')

  }

  const validateEmail = () => {
    if(validator.isEmail(email)){
      setEmailStyle('')
      setEmailErrMsgStyle('errorMsgInvis')
      return true
    }
    else {
      setEmailStyle('emailError')
      setEmailErrMsgStyle('errorMsgVis')
      return false
    }
  }



  return (
    <form className='submitContactForm' onSubmit={onSubmit} noValidate>
      <h2>Heading Two</h2>
      <div className='form-control'>
        <input type='text' placeholder='First Name' value={first_name} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      
      <div className='form-control'>
        <input type='text' placeholder='Last Name' value={last_name} onChange={(e) => setLastName(e.target.value)} />
      </div>

      <div className='form-control'>
        <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className='form-control'>
      <label className={emailErrMsgStyle}>Required</label>
        <input type='email' placeholder='Email' onBlur={validateEmail} className={emailStyle} value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        
      </div>

      <div className='form-control form-control-paragraph'>
        <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
      </div>

      <div className='form-control-button'>
        <input type='submit' className='btn btn-block' value='Save Contact' />
      </div>
    </form>
  )
}

export default SubmitContact