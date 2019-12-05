import React from 'react';

export default function ProfilePicture(props) {

  return (

      <div style={styles.profilPictureContainer}>
        <img
            src={props.profil}
            alt="profil"
            style={styles.profilPicture}
        />
          <img
              src={props.country}
              alt="country flag"
              style={styles.profilCountryPicture}
          />
      </div>
  );
};


const styles = {
  profilPictureContainer: {
    position: 'relative',
    display: 'flex',
  },

  profilPicture: {
  },

  profilCountryPicture: {
    maxWidth:'30%',
    height:'auto',
    opacity: '0.9',
    filter: 'alpha(opacity=50)',
    position: 'absolute',
    right: 0,
    bottom: 0,
  }
};
