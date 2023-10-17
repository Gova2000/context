// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,

        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChange0 = () => {
        onToggleShowContent()
      }

      const onChange1 = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChange2 = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller">
          <h1>Layout</h1>
          <ul className="div">
            <li>
              <input
                checked={showContent}
                id="input1"
                type="checkbox"
                onChange={onChange0}
              />
              <label htmlFor="input1">content</label>
            </li>

            <li>
              <input
                checked={showLeftNavbar}
                id="input2"
                type="checkbox"
                onChange={onChange1}
              />
              <label htmlFor="input2">Left Navbar</label>
            </li>

            <li>
              <input
                checked={showRightNavbar}
                id="input3"
                type="checkbox"
                onChange={onChange2}
              />
              <label htmlFor="input3">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
