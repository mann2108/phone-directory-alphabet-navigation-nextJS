import React from 'react';
import FullWidthTabs from '../../components/cover-card-content';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
export default function SimpleCollapse() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(true);
  return (
    <div style={{overflow: 'hidden'}}>
      <SwipeableViews
      axis={theme.direction === "rtl" ? "y-reverse" : "y"}
      containerStyle={{height: '100vh'}}
      enableMouseEvents
      resistance
      >
        <div style={{ backgroundColor: 'Grey', height: '100vh', width: '100vw' }}>
          swipe up
        </div>
        <FullWidthTabs />
      </SwipeableViews>
    </div>
  );
}