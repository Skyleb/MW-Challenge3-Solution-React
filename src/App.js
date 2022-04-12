import Header from './components/Header'
import Content from './components/Content'
import Contact from './components/Contact'
import AlertMessage from './components/AlertMessage'
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  // Controls showing/hiding AlertMessage component
  const [messageShown, setMessageShown] = useState(false)
  // Accessor functions
  const showMessage = () => setMessageShown(true)
  const hideMessage = () => setMessageShown(false)

  // Global superList and Namelists arrays
  const [superList, setSuperList] = useState([])
  const [nameLists, setNameLists] = useState([
    [
      'Matt Johnson',
      'Matt Johnson',
      'Bart Paden',
      'Ryan Doss',
      'Jared Malcolm'
    ],
    [
      'Matt Johnson',
      'Bart Paden',
      'Bart Paden',
      'Jordan Heigle',
      'Jordan Heigle',
      'tyler Viles'
    ]
  ])

  const [containerContents, setContainerContents] = useState([])

  useEffect(() => {
    const getContainerContents = async () => { 
      const containerContentsFromServer = await fetchContainerContents()
        setContainerContents(containerContentsFromServer)
  }
  
  getContainerContents()
  }, [])

  // Fetch ContainerContent
  const fetchContainerContents = async () => {
    // const res = await fetch('https://api.mwi.dev/content/home')
    const res = await fetch('http://localhost:8000/containercontent')
    const data = await res.json()

    return data
  }

  const [contactContent, setContactContent] = useState([
    {
      id:'',
      title:'',
      content:''
    }
  ])

  useEffect(() => {
    const getContactContent = async () => {
      const contactContentFromServer = await fetchContactContent()
        setContactContent(contactContentFromServer)
    }

    getContactContent()
  }, [])

  // Fetch ContactContent
  const fetchContactContent = async () => {
    // const res = await fetch('https://api.mwi.dev/content/contact')
    const res = await fetch('http://localhost:8000/contactcontainercontent')
    const data = await res.json()

    return data
  }

  

  // Add Contact
  const addContact = async (contact) => {
    console.log(JSON.stringify(contact));

    const res = await fetch(
      // 'https://api.mwi.dev/content/contact', {
        'http://localhost:8000/contactinfo/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
          // 'Content-type': 'multipart/form-data'
        },
        body: JSON.stringify(contact)
      }
    )
    console.log(res);
  }

  // Combines nameLists into a deduplicated, global superList
  const dedupe = () => {
    let tempList = []
    nameLists.forEach((nameList) => {
      nameList.forEach((name) => {
        if(tempList.indexOf(name) === -1){
          tempList = [...tempList, name];
        }
       })
      })
    setSuperList(tempList);
  }



  return (
    <Router>
      {messageShown ? <AlertMessage hideMessage={hideMessage} /> : ''}
      <Header />
      <Routes>
        <Route path='/' element={<Content superList={superList} nameLists={nameLists} dedupe={dedupe} showMessage={showMessage} containerContents={containerContents}/>} />
        <Route path='/contact' element={<Contact onAdd={addContact} contactContent={contactContent}/>} />
      </Routes>
    </Router>
  );
}

export default App;