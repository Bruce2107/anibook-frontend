import { combineReducers } from 'redux';
import theme from './Theme';
import mobileScreen from './MobileScreen';
import sidebar from './Sidebar';

const reducers = combineReducers({
  theme, mobileScreen, sidebar,
});

export default reducers;
