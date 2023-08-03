import React from 'react';
import 'google-fonts';

const Header = () => {
  const headerStyle = {
    width: '1440px',
    height: '429px',
    flexShrink: 0,
    backgroundImage: "url('https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/431c8315940ed37a3d6d257ff74e067ce41e6879.webp')",
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontFamily: 'Inika Serif, sans-serif', // Change font-family to Inika Serif
  };

  const titleContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 'fit-content', // Set width to fit the content
    maxWidth: '90%', // Limit the maximum width to 90% of the container
  };

  const titleStyle = {
    fontSize: '59.7px',
    fontWeight: 400,
    lineHeight: 'normal',
    color: '#FFF500', // Change color to #FFF500
    fontFamily: 'Inika', // Change font-family to Inika
  };

  const subtitleStyle = {
    fontSize: '59.7px',
    fontWeight: 400,
    lineHeight: 'normal',
    color: '#FFF', // Change color to #FFF
    fontFamily: 'Inika', // Change font-family to Inika
  };

  return (
    <div style={headerStyle}>
      <div style={titleContainerStyle}>
        <h1 style={titleStyle}>Where Nature Meets Innovation</h1>
        <h1 style={subtitleStyle}>Cultivating a Flourishing Tomorrow</h1>
      </div>
    </div>
  );
}

export default Header;
