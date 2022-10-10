import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import { Lige } from "../interfaces/LigeInterface"
import { getByLige } from "../services/getLiges"

interface AppState {
  lige: Lige
}

const Home = () => {
  const [lige, setLige] = useState<AppState['lige']>();

  useEffect(() => {
    getByLige().then(setLige)
  }, [])
  
  console.log(lige?.games)

  return (
    <Cards/>
  )
}

export default Home