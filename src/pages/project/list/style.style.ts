import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    search: {
      width: '100%',
      gap: '8px',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    searchInput: {
      width: '200px',
    },
    newButton: {
      padding: '0 10px',
    },
    card: {
      height: '201px',
      '.ant-card-meta-title': {
        marginBottom: '12px',
        '& > a': {
          display: 'inline-block',
          maxWidth: '100%',
          color: token.colorTextHeading,
        },
      },
      '.ant-card-body:hover': {
        '.ant-card-meta-title > a': {
          color: token.colorPrimary,
        },
      },
    },
    newCard: {
      width: '100%',
      height: '201px',
      color: token.colorTextSecondary,
      backgroundColor: token.colorBgContainer,
      borderColor: token.colorBorder,
    },
  };
});

export default useStyles;
