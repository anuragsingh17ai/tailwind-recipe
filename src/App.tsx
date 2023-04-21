import './App.css'
import Latest_recipe from './components/Latest_recipe'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Trending_recipe from './components/Trending_recipe'
function App() {
  return (
    <div className="text-gray-600 font-body grid md:grid-cols-6 sm:ml-4">
      <div className='col-span-1'>
        <Navbar/>
      </div >
      <div className='px-16 py-6 bg-gray-100 md:col-span-5'>
        <Login/>
        
        <h2 className='text-gray-700 text-6xl font-semibold'>Recipes </h2>
        <h2 className='text-2xl font-semibold '>For Ninjas</h2>
        <Latest_recipe/>
        <Trending_recipe/>
      </div>
    </div>
  )
}

export default App
