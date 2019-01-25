import React from 'react';

const BloggetLogo = () =>
  <video className='logo' name='media' controls={false} autoPlay muted loop>
    <source src='./logo/logo_grey.webm' type='video/webm' />
    <source src='./logo/logo_grey.mp4' type='video/mp4' />
  </video>

export default BloggetLogo;