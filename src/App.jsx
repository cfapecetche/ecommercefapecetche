  
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
     <div className = "App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'}/>

     </div>
      
    </>
  )
}

export default App

