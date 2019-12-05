import React, {useEffect,useState} from 'react';
import ProfilePicture from './components/picture-components/index';
import IdentityInfo from './components/identity-info-components/index'
import PersonalInfo from './components/personal-info-components/index';
import ProfessionalInfo from './components/professional-info-components/index';

export function findNumberOfDigitInArray(array, digit) {
  return array.filter(x => x === digit).length;
}

export function round(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export default function Profile(props) {
  const {player} = props;
  const [playerWeight, setPlayerWeight] = useState(0);
  const [totalWin, setTotalWin] = useState(0);
  const [totalLost, setTotalLost] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  function updateDimensions() {
    let newWindowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    setWindowWidth(newWindowWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  useEffect(() => {
    setPlayerWeight(round((player.data.weight/1000) , 2));
  },[player.data.weight]);

  useEffect(() => {
    setTotalLost(findNumberOfDigitInArray(player.data.last, 0));
    setTotalWin(findNumberOfDigitInArray(player.data.last, 1));
  },[player.data.last]);

  return (
      <div style={styles.mainContainer}>
        <div style={styles.profilContainer}>
          {windowWidth > 385 &&
          <ProfilePicture
              profil={player.picture}
              country={player.country.picture}
          />}
          <div style={styles.infoContainer}>
            <IdentityInfo
                firstname={player.firstname}
                lastname={player.lastname}
            />
            <div style={styles.secondaryInfoContainer}>
              <PersonalInfo
                  age={player.data.age}
                  height={player.data.height}
                  weight={playerWeight}
              />
              <ProfessionalInfo
                  rank={player.data.rank}
                  point={player.data.points}
                  totalWin={totalWin}
                  totalLost={totalLost}
              />
            </div>
          </div>
        </div>
      </div>

  );
};

const styles = {

    mainContainer: {
    display: 'flex',
    maxWidth: 500,
  },
  profilContainer: {
    display: 'flex',
    border: 0,
    borderRadius: 8,
    boxShadow: '0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15)',
    overflow: 'hidden',
    height: '140px',
    margin: '20px'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  secondaryInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
};
