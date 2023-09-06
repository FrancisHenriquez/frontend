import React from 'react'
import './SideDrawer.css'
import { ReactDOM } from 'react'
import { createPortal } from 'react-dom'

export const SideDrawer = () => {
  const content = <aside className='side-drawer'>{props.children }</aside>
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
  
};
