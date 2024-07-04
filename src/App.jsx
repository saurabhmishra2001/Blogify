
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth/auth'
import { login,logout } from './store/authSlice' 
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

function App() {

  const [loading,setLoading]=useState(true)

  const dispatch =useDispatch()

  useEffect(()=>{
    authService.getCutrrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[dispatch])
  return !loading ? (
    <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
          <main>
         TODO: {/* TODO:<Outlet/> */}
         <Outlet/>
          </main>
          <Footer/>
     
      </div>
    </div>
  ) : (
    <div className='min-h-sc'>Test not loading</div>
  )
}

export default App
