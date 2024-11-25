import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dee9ff',
  },
  form: {
    backgroundColor: '#fff',
    padding: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    boxShadowColor: '#000',
    boxShadowOffset: { width: 0, height: 2 },
    boxshadowOpacity: 0.1,
    boxshadowRadius: 10,
    width: '80%',
    maxWidth: 600,
  },
  icon: {
    backgroundColor: '#5891ff',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    alignSelf: 'center',
  },
  iconText: {
    fontSize: 40,
    color: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  button: {
    backgroundColor: '#5791ff',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialMedia: {
    padding: 50,
    width: '80%',
    maxWidth: 600,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    boxshadowColor: '#000',
    boxshadowOffset: { width: 0, height: 2 },
    boxshadowOpacity: 0.1,
    boxshadowRadius: 10,
  },
  socialText: {
    color: '#9fadca',
    fontSize: 16,
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#5691ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    fontSize: 23,
    color: '#5691ff',
  },
});

export default styles;
