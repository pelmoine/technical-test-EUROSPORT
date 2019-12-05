import React from 'react';
import LabelValue from "../label-value-component";
export default function ProfessionalInfo (props) {
  return (
      <div style={styles.professionalInfoContainer}>
        <span style={styles.professionalTitle}>Professional</span>
        <LabelValue label={"Rank"} value={props.rank} />
        <LabelValue label={"Points"} value={props.point} />
        <LabelValue label={"Last Results"} value={props.totalWin + 'W - ' + props.totalLost + 'L'} />
      </div>
  );
}

const styles = {
  professionalInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 30px 10px 10px',

  },
  professionalTitle: {
    font: "20px Arial",
    paddingBottom: 5,
    color: 'rgba(0,0,0,.84)'

  }
};
