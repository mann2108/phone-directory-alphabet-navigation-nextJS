import React from 'react';
import { Tabs, Tab } from '@tarragon/swipeable-tabs';
function coverCard() {
  const [selectedTab, setSelectedTab] = React.useState('0');
  const changeTab: (selectedTab: {
    label: string;
    key: string | number;
  }) => void = (updatedTab: any) => {
  setSelectedTab(updatedTab.label);
  };
  return (
    <Tabs
      value={selectedTab}
      onChange={changeTab}
      blacklistedElement={{
        identifierType: "className",
        identifierName: "hole-in-the-middle"
      }}
      tabBarCSS={`font-size: 1.2rem;
      color: "red";
      font-weight: bold;
      margin: 0 20px 10px;`}
      styleProps={{
        fontFamily: "Roboto",
        barColor: "transparent",
        selectedHeaderTextColor: "#1890ff",
        headerTextColor: "hsla(0,0%,100%,.45)",
        activeInkBarColor: "#1890ff",
        inkBarColor: "hsla(0,0%,100%,.45)",
        size: "medium"
      }}
    >
      <Tab label="Tab 1" key={0}>
        <div>Tab 1 Content</div>
      </Tab>
      <Tab label="Tab 2" key={1}>
        <div>Tab 2 content</div>
      </Tab>
      <Tab label="Tab 3" key={2}>
        <div>Tab 3 content</div>
      </Tab>  
      <Tab label="Tab 4" key={3}>
        <div>Tab 4 content</div>
      </Tab>
    </Tabs>
  );
}
export default coverCard;