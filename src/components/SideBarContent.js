import React from 'react'
import PropTypes from 'prop-types'
import MaterialTitlePanel from './MaterialTitlePanel'
import { Link } from 'react-router-dom'

const styles = {
  sidebar: {
    width: 256,
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white'
  }
}

const SideBarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar

  return (
    <MaterialTitlePanel title="Application Name" style={style}>
      <div style={styles.content}>
        <Link to='/'style={styles.sidebarLink}>Home</Link>
        <Link to='/roster'style={styles.sidebarLink}>About</Link>
        <div style={styles.divider} />
        <Link to='/player'style={styles.sidebarLink}>Player</Link>
        <Link to='/schedule'style={styles.sidebarLink}>Schedule</Link>
      </div>
    </MaterialTitlePanel>
  )
}

SideBarContent.propTypes = {
  style: PropTypes.object
}

export default SideBarContent
