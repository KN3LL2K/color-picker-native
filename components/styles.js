import { StyleSheet, Dimensions } from 'react-native';

module.exports = StyleSheet.create({
  swatch: {
    marginBottom: 10
  },
  navigator: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5
  },
  userName: {
    fontSize: 18,
    textAlign: 'left',
    margin: 10,
    marginBottom: 5
  },
  subTitle: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
    marginBottom: 5
  },
  colorName: {
    fontSize: 12,
    textAlign: 'left',
    margin: 10,
    marginBottom: 5
  },
  colorLikes: {
    fontSize: 10,
    textAlign: 'right',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  innerContainer: {
    padding: 20,
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 4,
    padding: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  greenButton: {
    backgroundColor: '#4CD964'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  bottomBar: {
    flex: 1,
    backgroundColor: 'red',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
