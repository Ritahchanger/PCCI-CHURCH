import { Fragment } from "react"
import "./Home.scss"
import Header from "../../Components/Header/Header"
import About from "../../Components/About/About"

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <About/>
    </Fragment>
  )
}

export default Home