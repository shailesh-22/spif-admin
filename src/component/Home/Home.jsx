import React from 'react'
import Drawers from '../Sidebar/Drawers';
// import Header from '../../Sidebar/Header'
// import Menu2 from '../../Sidebar/Menu2'
import Box from '@mui/material/Box';




const Home = () => {
  return (
 <>

 <Box sx={{ display: 'flex' , marginTop:"50px"}}>
 <Drawers/>

 <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

  <div>
  <h1>Home</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur distinctio cupiditate reiciendis minus recusandae consectetur. Minus ipsa ipsam fugiat, laudantium nam repellendus! Ducimus odit laboriosam non dicta quas fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae fugiat numquam odio quod, quam vero fuga, illum similique, nemo obcaecati laboriosam porro earum vel sunt provident maiores magnam velit!</p>
  </div>

  </Box>

 </Box>

 </>
  )
}

export default Home