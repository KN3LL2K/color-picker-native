import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  swatch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  colorName: {
    fontSize: 10,
    textAlign: 'left',
    margin: 10,
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
  }
});