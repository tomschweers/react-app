import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'
import SideBarContent from './SideBarContent'
import Main from './Main'
import '../App.css'
import MaterialTitlePanel from './MaterialTitlePanel'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faHome)

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  content: {
    padding: '16px'
  }
}

const mql = window.matchMedia(`(min-width: 800px)`)

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      docked: mql.matches,
      docked: true,
      open: false
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.onSetOpen = this.onSetOpen.bind(this)
  }

  componentWillMount () {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount () {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetOpen (open) {
    this.setState({ open })
  }

  mediaQueryChanged () {
    this.setState({
      docked: mql.matches,
      open: false
    })
  }

  toggleOpen (ev) {
    this.setState({ open: !this.state.open })

    if (ev) {
      ev.preventDefault()
    }
  }

  render () {
    const sidebar = <SideBarContent />

    const contentHeader = (
      // Layered "bars" icon for better resolution
      <span>
        {!this.state.docked && (
          <span className="fa-layers fa-fw Hamburger">
            <FontAwesomeIcon icon="bars" onClick={this.toggleOpen} />
            <FontAwesomeIcon icon="bars" onClick={this.toggleOpen} />
          </span>
        )}
        <span class="Header"><Link to='/' class="Header-title">Application Name</Link></span>
      </span>

    )

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    }

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <Main />
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    )
  }
}

export default App
