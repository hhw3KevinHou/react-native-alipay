'use strict';

const AppListStyles = {
  app: {

  },
  appRow: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#3F454F',
  },
  appRowTopBorder: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#3F454F',
    borderTopWidth: 1,
    borderColor: '#E6E6E6',
  },
  appCol: {
    flex: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '#fff',

    paddingTop: 15,
  },
    appColMore: {
        flex: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E6E6E6',
        backgroundColor: '#fff',

        paddingTop: 0,
    },
  appItemImageIcon: {
    width: 24,
    height: 24,
  },
  appItemIcon: {
    width: 24,
    height: 24,
    paddingTop: 2,
  },
  appItemText: {
    marginTop: 8,
    fontSize: 12
  },
  appItemTextMore: {



    textAlign:'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },
};

export default AppListStyles;