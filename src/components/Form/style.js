import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 30,
   
  },
  formLabel: {
    color: 'green',
    fontSize: 18,
    paddingLeft: 20,
    fontFamily: '',
  },
  input: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: "#d3d3d3",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%', 
    backgroundColor: "#483D8B",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30, 
  },
  textButtonCalculator: {
    fontSize: 20,
    color: 'white',
  },
});

export default styles;