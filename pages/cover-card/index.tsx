import React from 'react';
import FullWidthTabs from '../../components/cover-card-content';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
export default function SimpleCollapse() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(true);
  const [myStyle, setMyStyle] = React.useState({});
  const [contentHeight, setContentHeight] = React.useState('40%');
  const handleChange = () => {
    setChecked((prev) => !prev);
    !checked ? setMyStyle({ marginTop: '40%', marginLeft: '50%' }) : setMyStyle({ marginTop: '0', marginLeft: '50%' });
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
      axis={theme.direction === "rtl" ? "y-reverse" : "y"}
      containerStyle={{height: '100vh'}}
      enableMouseEvents
      resistance>
        <div style={{backgroundColor: 'Grey', height: '100vh', width: '100vw', marginLeft: 'auto', marginRight: 'auto' }}>
          swipe up
        </div>
        <FullWidthTabs />
        </SwipeableViews>
    </div>
  );
}