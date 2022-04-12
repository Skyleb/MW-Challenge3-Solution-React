import Container from './Container'

// const iconLocations = ['./Talkie.png', './Rabbit.png', './Shield.png']

const Content = ({ superList, dedupe, showMessage, containerContents }) => {

  return (
    <div className='content'>
      {containerContents.map((containerContent, i) => (<Container key={'container' + containerContent.id} icon={containerContent.iconPath} heading={containerContent.title} text={containerContent.content} />))}
      
      <div className='textArea'>
        <h1><u>Heading</u> One</h1>
        <p>Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <a className='dedupe' onClick={superList.length > 0 ? showMessage : dedupe}>this link</a> is clicked. If the operation has been completed already, notify the user that this has already been done. </p>
      </div>
        {superList.length > 0 ?
        <div className='listArea'>
          <h3>List</h3>
          {superList.map((name, i) => (<p key={'superListName' + i}>{name}</p>))}
        </div> 
        : ''
        }
    </div>
  )
}

export default Content