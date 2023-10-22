import {
  makeStyles,
} from '@material-ui/core'
import React, { useRef, useState } from 'react';
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


export const Tabs = ({ currentIndex, setCurrentIndex }) => {
  const classes = useStyles()
  const {jsonData} = useAppState();
  const tabItems = jsonData.tabs.map((tab, index) => (
    <li className={classes.tabItem} key={index}>
      <TabItem tab={ tab } currentIndex={ currentIndex } setCurrentIndex = { setCurrentIndex}/>
    </li>
  ))
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  let isAtLeftEdge = scrollLeft === 0;
  let isAtRightEdge = containerRef.current && scrollLeft + containerRef.current.clientWidth >= containerRef.current.scrollWidth;

  const scrollBy = (delta) => {
    const container = containerRef.current;
    if (container) {
      let newScrollLeft = scrollLeft + delta;
      if (newScrollLeft < 0) {
        newScrollLeft = 0; 
      }
      if (container.clientWidth < container.scrollWidth && newScrollLeft + container.clientWidth > container.scrollWidth) {
        newScrollLeft = container.scrollWidth - container.clientWidth; 
      }
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      setScrollLeft(newScrollLeft);
    }
  };

  return (
    <div>
      <ul className={classes.root} ref={containerRef}>
        {tabItems}
      </ul>
    </div>
    
  );
}