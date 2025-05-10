import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const links = [
    {path : '/', title : 'Home'},
    {path : '/product', title : 'Product'},
    {path : '/card', title : 'Card'},
    {path : '/login', title : 'Login'},
  ]
  return (
    <Box sx={{
      bgcolor : 'gray',
      pt : 2.5,
      pb : 2.5,
      display : 'flex',
      justifyContent : 'space-around',
      position : 'sticky',
      top : '0px',
      zIndex : 100,
       
    }}>
      {
        links.map((link) =>(
          <Link  style={{
            textDecoration : 'none',
            color : 'blue',
            fontFamily : 'sans-serif',
            fontSize : '25px',
          
            
           
          }}
          key={link.path} to={link.path}>{link.title}</Link>
        ))
      }
    </Box>
  )
}

export default Navbar
