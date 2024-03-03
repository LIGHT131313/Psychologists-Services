export const theme = {
  colors: {
    black: 'rgb(25, 26, 21)',
    black5: 'rgba(25, 26, 21, 0.05)',
    black10: 'rgba(25, 26, 21, 0.1)',
    black30: 'rgba(25, 26, 21, 0.3)',
    blue: 'rgb(52, 112, 255)',
    blue20: 'rgba(52, 112, 255, 0.2)',
    blueHover: 'rgb(37, 94, 232)',
    white: 'rgb(255, 255, 255)',
    whiteGrey: 'rgb(251, 251, 251)',
    grey: 'rgb(138, 138, 137)',
    purple: 'rgb(151, 71, 255)',
    yellow: 'rgb(255, 197, 49)',
  },
  borderRadius: '12px',
  borderRadiusImg: '14px',
  borderRadiusModal: '24px',

  boxSh: {
    one: '0px 1px 6px rgba(46, 47, 66, 0.08)',
    two: '0px 1px 1px rgba(46, 47, 66, 0.16)',
    three: '0px 2px 1px rgba(46, 47, 66, 0.08)',
  },
  spacing: value => `${value * 4}px`,
  fontWeight: value => `${value * 100}`,
  fontSize: value => `${value * 2}px`,
};
