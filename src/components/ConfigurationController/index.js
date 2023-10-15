// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(prev => ({showContent: !prev.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prev => ({showLeftNavbar: !prev.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prev => ({showRightNavbar: !prev.showRightNavbar}))
  }

  render() {
    const {showLeftNavbar, showContent, showRightNavbar} = this.state
    console.log(showLeftNavbar, showContent, showRightNavbar)
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,

          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="controller">
          <h1>Layout</h1>
          <div className="div">
            <div>
              <input
                id="input1"
                type="checkbox"
                onChange={this.onToggleShowContent}
              />
              <label htmlFor="input1">content</label>
            </div>

            <div>
              <input
                id="input2"
                type="checkbox"
                onChange={this.onToggleShowLeftNavbar}
              />
              <label htmlFor="input2">Left Navbar</label>
            </div>

            <div>
              <input
                id="input3"
                type="checkbox"
                onChange={this.onToggleShowRightNavbar}
              />
              <label htmlFor="input3">Right Navbar</label>
            </div>
          </div>
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default ConfigurationController
