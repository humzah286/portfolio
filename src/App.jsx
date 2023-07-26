
import projects from './assets/projects.json'
import messages from './assets/messages.json'

import background from './assets/background.png'
import profilePic from './assets/profile.jpeg'
import wallpaper from './assets/wallpaper.jpg'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


function App() {

// console.log("projects :>> ", projects)

  return (
    <>
        <Navbar />
        <Home background={background} profilePic={profilePic} />
        <About wallpaper={wallpaper} />
        <Projects projects={projects}/>
        <Contact messages={messages}/>
        <Footer />
    </>
  )
}

export default App
