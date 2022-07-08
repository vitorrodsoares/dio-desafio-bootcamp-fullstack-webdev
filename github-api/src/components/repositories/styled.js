import styled from "styled-components";
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 100%;
margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
border-radius: 16px;
border: 1px solid #ccc;
padding: 16px;
user-select: none;
cursor: pointer;
z-index: 99999;
background-color: #fff;
margin-right: 2px;

&:focus{
    outline: none;
    
}

&.is-selected{
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom: 1px solid white;
  
}
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
display: none;
min-height: 40vh;
padding: 16px;
border: 1px solid #ccc;
box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
margin-top: -5px;

&.is-selected{
    display: block;

}
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;

`;