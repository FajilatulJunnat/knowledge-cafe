
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
const[bookmarks,setbookmarks]=useState([])
const hendleBookMark= blog =>{
  const newbookMarks=[...bookmarks,blog]
  setbookmarks(newbookMarks)
}

const [readingtime,setreadingtime]=useState(0)
const hendleMarkAsRead=time=>{
  console.log('reading time',time)
  let newReadingTime=readingtime+time
  setreadingtime(newReadingTime)
}


  return (
    <div className='container mx-auto'>
     
     <Header></Header>
     <main className='grid md:grid-cols-3 grid-cols-1 gap-4 '>
     <Blogs hendleBookMark={hendleBookMark} hendleMarkAsRead={hendleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
     </main>
      
    </div>
  )
}

export default App
