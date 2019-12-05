import React from 'react';
import LabelValue from "../label-value-component";

export default function PersonnalInfo (props) {
  return (
      <div style={styles.personalInfoContainer}>
        <span style={styles.personalTitle}>Personal</span>
        <LabelValue label={"Age"} value={props.age} />
        <LabelValue label={"Height"} value={props.height} />
        <LabelValue label={"Weight"} value={props.weight} />
      </div>
  );
};

const styles = {
  personalInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 30px 10px 10px',

  },
  personalTitle: {
    font: "20px Arial",
    paddingBottom: 5,
    color: 'rgba(0,0,0,.84)'
  }

};
