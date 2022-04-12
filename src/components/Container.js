const Container = ({icon, heading, text}) => {
  return (
    <div className='container'>
      <div className='imgBox' ><img src={icon}/></div>
      <h1>{heading}</h1>
      <p>{text}</p>
      <button className='btn'>Learn More</button>
    </div>
  )
}

export default Container