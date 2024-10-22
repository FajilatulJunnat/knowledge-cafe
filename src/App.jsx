
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {


  return (
    <div className='container mx-auto'>
     
     <Header></Header>
     <main className='grid md:grid-cols-3 grid-cols-1 gap-4 '>
     <Blogs></Blogs>
     <Bookmark></Bookmark>
     </main>
      
    </div>
  )
}

export default App
