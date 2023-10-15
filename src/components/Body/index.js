// Write your code here
import Header from '../Header'
import Footer from '../Footer'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(showContent, showLeftNavbar, showRightNavbar)
      return (
        <div className="body">
          <Header />
          <div className="align">
            {showLeftNavbar && (
              <div className="Left">
                <h1>Left Navbar Menu</h1>
                <div className="lay1">
                  <p>item 1</p>
                  <p>item 2</p>
                  <p>item 3</p>
                  <p>item 4</p>
                </div>
              </div>
            )}
            {showContent && (
              <div className="content">
                <h1>Content</h1>
                <p className="para">
                  Lorem ipsum dolor sit amet, kjbjkkjvkvhj,bvhjv,
                  hvhjvjhv,hjvhjmvjhmv,jfhjgjhchgf
                </p>
              </div>
            )}
            {showRightNavbar && (
              <div className="Right">
                <h1>Right Navbar Menu</h1>
                <div className="lay1">
                  <div className="ads">
                    <p>Ad1</p>
                  </div>
                  <div className="ads">
                    <p>Ad2</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Footer />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
