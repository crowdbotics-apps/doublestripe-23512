import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn21187544Navigator from '../features/SignIn21187544/navigator';
import Dashboard12187543Navigator from '../features/Dashboard12187543/navigator';
import SignUp23187542Navigator from '../features/SignUp23187542/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn21187544: { screen: SignIn21187544Navigator },
Dashboard12187543: { screen: Dashboard12187543Navigator },
SignUp23187542: { screen: SignUp23187542Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
