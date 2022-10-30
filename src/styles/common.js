import { StyleSheet, Dimensions } from 'react-native'

export const THEME_COLOR = '#00a8b7'
export const BACKGROUND_COLOR = '#f2eaea'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
  },
  view: {
    flexDirection: 'row',
    marginHorizontal: width * 0.05,
  },
  accent_color: {
    color: THEME_COLOR,
  },
  app_name_size: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
    marginHorizontal: width * 0.085,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.85,
  },
  search_bar: {
    height: 40,
    width: width * 0.7,
    backgroundColor: BACKGROUND_COLOR,
    borderColor: '#bcbcbc',
    borderWidth: 1,
    borderRadius: 5,
  },
  divider: {
    borderLeftWidth: 1,
    height: 40,
    borderColor: 'gray',
    opacity: 0.2,
  },
  closeIcon: {
    position: 'absolute',
    right: width * 0.17,
  },
  filter_options: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: width * 0.85,
    flexWrap: 'wrap',
  },
  chip: {
    marginVertical: width * 0.01,
    marginRight: width * 0.01,
    height: height * 0.04,
  },
})

export default styles
