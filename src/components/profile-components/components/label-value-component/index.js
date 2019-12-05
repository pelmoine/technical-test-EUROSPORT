import React from 'react';

export default function LabelValue (props) {
  return (
      <div style={styles.labelValueContainer}>
        <div style={styles.labelContainer}>
         <span style={styles.label}>{props.label + " :"}</span>
        </div>
        <div style={styles.valueContainer}>
          <span style={styles.value}>&nbsp;{props.value}</span>
        </div>
      </div>
  );
};

const styles = {
  labelValueContainer:{
    display: 'flex',
    font: "12px Arial",
    paddingBottom: 5,
  },
  labelContainer: {

  },
  label: {
    color: 'rgba(0,0,0,.50)'
  },
  valueContainer: {

  },
  value: {
    color: 'rgba(0,0,0,.50)'
  }
};
