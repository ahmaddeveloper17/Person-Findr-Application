import {StyleSheet} from 'react-native';

const uploadStyles = StyleSheet.create({
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 30,
    marginTop: 5,
    borderWidth: 1,
    maxWidth: 500,
    width: 335,
    borderColor: '#BCBCBF',
    borderRadius: 8,
  },
  datePickerInput: {
    flex: 1,
    padding: 12,
    height: 44,
    borderRadius: 8,
    borderWidth: 0,
  },
  input: {
    height: 44,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 17,
    marginTop: 8,
    marginBottom: 8,
    width: 335,
  },
  submitContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  submitButton: {
    backgroundColor: '#5B59FE',
    width: 207,
    height: 44,
    borderRadius: 8,
    marginVertical: 16,
    marginHorizontal: 84,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 23,
    lineHeight: 27,
  },
  first: {
    flexDirection: 'row',
    marginLeft: 26,
    marginRight: 29,
    marginTop: 16,
    gap: 16,
  },
  backButton: {
    marginLeft: 3,
    width: 18,
    height: 12,
    marginTop: 11,
  },
  h1: {
    height: 30,
    color: '#000000',
    fontWeight: '600',
    fontSize: 23,
  },
  h2: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 27,
    color: '#000000',
    marginLeft: 20,
    marginRight: 64,
    marginTop: 40,
  },
  inputName: {
    color: '#000000',
    marginLeft: 20,
    marginRight: 184,
    marginTop: 16,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default uploadStyles;