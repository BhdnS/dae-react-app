import Context from './Context/Context.jsx'
import Layout from './UI/Layout/Layout.jsx'
import CursorObserver from './components/CursorObserver/CursorObserver.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Section from './components/Section/Section.jsx'

const App = () => {
  return (
    <>
      <Context>
        <Layout>
          <Header />
          <Main />
          <Section />
          <Footer />
          <CursorObserver />
        </Layout>
      </Context>
    </>
  )
}

export default App
