import {
  BrowserRouter as Router,
  Route,
  Routes,
  // NavLink,
} from "react-router-dom"
// import Card from "./shared/Card"
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"

import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
// import Card from "./shared/Card"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./Components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          {/* <FeedbackItem /> */}
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            {/* <Card>Hello My App</Card> */}

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          {/* <Card>
          <NavLink to={"/"} activeClassName='active'>
            Home
          </NavLink>
          <NavLink to={"/about"} activeClassName='active'>
            About
          </NavLink>
        </Card> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
