// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  comp1 = () => {
    this.setState(prev => ({showContent: !prev.showContent}))
  }

  comp2 = () => {
    this.setState(prev => ({showLeftNavbar: !prev.showLeftNavbar}))
  }

  comp3 = () => {
    this.setState(prev => ({showRightNavbar: !prev.showRightNavbar}))
  }

  render() {
    const {showLeftNavbar, showContent, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,

          showRightNavbar,
          onToggleShowContent: this.comp1,
          onToggleShowLeftNavbar: this.comp2,
          onToggleShowRightNavbar: this.comp3,
        }}
      >
        <div className="controller">
          <h1>Layout</h1>
          <div className="div">
            <div>
              <input id="input1" type="checkbox" onChange={this.comp1} />
              <label htmlFor="input1">content</label>
            </div>

            <div>
              <input id="input2" type="checkbox" onChange={this.comp2} />
              <label htmlFor="input2">Left Navbar</label>
            </div>

            <div>
              <input id="input3" type="checkbox" onChange={this.comp3} />
              <label htmlFor="input3">Right Navbar</label>
            </div>
          </div>
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default ConfigurationController
