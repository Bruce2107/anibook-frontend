import { combineReducers } from 'redux';
import theme from './Theme';
import mobileScreen from './MobileScreen';
import sidebar from './Sidebar';
import pagination from './Pagination';

const reducers = combineReducers({
  theme, mobileScreen, sidebar, pagination,
});

export default reducers;
