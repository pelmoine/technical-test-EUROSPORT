import React from 'react';
export default function IdentityInfo (props) {
  return (
      <div style={styles.identiyContainer}>
        <span style={styles.identity}>{props.firstname} {props.lastname}</span>
      </div>
  );
};

const styles = {
  identiyContainer: {
    display: 'flex',
    paddingLeft: 10
  },
  identity: {
    font: "25px Arial",
    textAlign: "center",
    color: 'rgba(0,0,0,.84)',
  }
};
