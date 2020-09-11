import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import HomeScreens from '../Screens/HomeScreens';
import Options from '../Screens/Options';
import Theme from '../Screens/Theme';

const MealsNavigator = createStackNavigator({
  Home: HomeScreens,
  Options:Options,
  theme:Theme,
});

export default createAppContainer(MealsNavigator);


