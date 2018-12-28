import React from 'react';
import Summary from '../Main/Summary';
import Profile from '../Main/Profile';
import CreateProject from '../Main/CreateProject/CreateProject';
import Advisors from '../Main/Advisors';
import CurrentProject from '../Main/CurrentProject';
import EditProject from '../Main/EditProject';
import Notifications from '../Main/Notifications';
import Reports from '../Main/Reports';
import SendReminder from '../Main/SendReminder';


const mainComponents = [<Profile />, <Summary />, <CurrentProject />, <Advisors />, <Reports />, <Notifications />, <CreateProject />, <EditProject />, <SendReminder />]

const Main = (props) => {
  console.log(props)
  const { dashboardTab } = props
  return (
    mainComponents[dashboardTab]
  )
}

export default Main;