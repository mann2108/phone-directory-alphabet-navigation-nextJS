import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FullWidthTabs from '../../components/cover-card-content';
import { CallReceived } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      overflow: 'hidden'
    },
  }),
);

export default function SimpleCollapse() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [myStyle, setMyStyle] = React.useState({});
  const [contentHeight, setContentHeight] = React.useState('40%');
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = () => {
    setChecked((prev) => !prev);
    !checked ? setMyStyle({ marginTop: '40%', marginLeft: '50%' }) : setMyStyle({ marginTop: '0', marginLeft: '50%' });
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const handleChange2 = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setMyStyle({
      marginLeft: '50%',
      marginTop: '40%',
    });
  }, []);
  return (
    <div style={{overflow: 'hidden'}}>
      <SwipeableViews
      style={{ height: '100vh' }}
      axis={theme.direction === 'rtl' ? 'y-reverse' : 'y'}
      index={value}
      onChangeIndex={handleChangeIndex}
      >
      <div className={classes.container}>
        {/* <Collapse in={checked} collapsedHeight={100}> */}
          <div style={{backgroundColor: 'Grey', height: '100vh', width: '100vw', marginLeft: 'auto', marginRight: 'auto' }}>
          <button onClick={handleChange} style={myStyle}>Click Me</button>
          </div>
        {/* </Collapse> */}
      </div>
      <FullWidthTabs />
      </SwipeableViews>
    </div>
  );
}