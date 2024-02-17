import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    panelLeft: {
      backgroundColor: token.colorBgContainer,
    },
    searchInput: {
      display: 'flex',
      gap: '4px',
      margin: '8px',
    },
    divider: {
      width: '2px',
      backgroundColor: token.colorBgLayout,
      ':hover': {
        backgroundColor: token.colorPrimary,
      },
    },
  };
});

export default useStyles;
