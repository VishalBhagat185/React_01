import Card from './Componects/Card'
import './App.css'
import Tukaram from './assets/Tukaram.jpg'
import S from './assets/S.jpg'
import Shivaji from './assets/Shivaji.jpg'
import Mauli from './assets/Mauli.jpg'

function App() {

  return (
    <div className='Containser'>
     <Card name="Sant Tukaram Maharaj" image={Tukaram} />
     <Card name="Sant Mauli Mahraj" image={Mauli} />
     <Card name="Shri Shivaji Maharaj" image={Shivaji} />
     <Card name="Shri Sambhaji Maharaj" image={S} />
   </div>
  )
}

export default App
