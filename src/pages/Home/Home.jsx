import { Fragment } from "react"
import "./Home.scss"
import Header from "../../Components/Header/Header"
import About from "../../Components/About/About"
import Event from "../../Components/Events/Event"

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <About/>
        <Event/>
    </Fragment>
  )
}

export default Home