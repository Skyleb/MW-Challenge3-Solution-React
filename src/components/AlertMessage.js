const AlertMessage = ({ hideMessage }) => {
  return (
    <div>
      <div className='dedupeAlert'>

      <div className='alertMessageContainer'>
      <h1>Alert</h1>
      <p>This action has already been performed.</p>
      <button onClick={hideMessage} className='btn'>Okay</button>
    </div>

      </div>
    </div>
  )
}

export default AlertMessage