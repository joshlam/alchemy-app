import { StyleSheet } from 'react-native';

import { fontSize } from 'src/lib/sizes';

export default StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%'
  },
  scrollView: {
    flex: 1
  },
  modal: {

  },
  modalBackground: {
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  modalBackgroundImage: {
    resizeMode: 'contain'
  },
  modalButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 65,
    width: '100%'
  },
  modalButton: {
    width: 130
  },
  modalButtonImage: {
    height: 45,
    width: 120
  },
  paddedBackground: {
    padding: 2.5
  },
  link: {
    color: 'blue'
  },
  transmutationText: {
    color: 'black',
    fontSize: fontSize(20)
  }
});
