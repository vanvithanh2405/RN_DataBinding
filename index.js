/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginScreen from './screen/login/LoginScreen';
import DataBidingScreen from './screen/databiding/DataBidingScreen';
import NewFeedScreen from './screen/newfeed/NewFeedScreen';
import demoProps from './screen/demoProps/demoProps';
import {name as appName} from './app.json';
import NewFeedStyles from './screen/newfeed/styles/NewFeedStyles';

AppRegistry.registerComponent(appName, () => NewFeedScreen);
