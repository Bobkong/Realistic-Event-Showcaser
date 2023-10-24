import {
  makeStyles,
} from '@material-ui/core'
import { TabItem } from './TabItem';
import { useAppState } from '../../../../state';

const useStyles = makeStyles((theme) => ({

  root: {
    width: '100px',
    listStyle: 'none',
    padding: '0px',
    marginTop: '24px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      gap: '24px',
      whiteSpace: 'nowrap',
      overflowX: 'auto',
      paddingLeft: '16px',
      marginBottom: '0px',
      marginTop: '0px',
      '&::-webkit-scrollbar': {
        height: '0px',
      },
    }
  },

}))


export const Tabs = () => {
  const classes = useStyles()
  const {jsonData, curretnTabIndex, setCurrentTabIndex} = useAppState();
  const tabItems = jsonData.tabs.map((tab, index) => (
    <li className={classes.tabItem} key={index}>
      <TabItem tab={ tab }/>
    </li>
  ))

  return (
    <div>
      <ul className={classes.root}>
        {tabItems}
      </ul>
    </div>
    
  );
}