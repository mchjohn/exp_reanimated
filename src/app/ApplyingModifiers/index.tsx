import Animated,
{
  withDelay,
  withTiming,
  withRepeat,
  withSequence,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { StyleSheet } from 'react-native'

import { ClickButton } from '../../components/ClickButton'

const TIME = 250
const DELAY = 400
const OFFSET = 40

export default function WithSpring() {
  const offset = useSharedValue(0)

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }))

  const handlePress = () => {
    offset.value = withDelay(
      DELAY,
      withSequence(
      // começa em -OFFSET
        withTiming(-OFFSET, { duration: TIME / 2 }),
        // agita entre -OFFSET e OFFSET cinco vezes
        withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
        // volta para 0 no final
        withTiming(0, { duration: TIME / 2 })
      )
    )
  }

  return (
    <>
      <Animated.View style={[styles.box, style]} />
      <ClickButton onPress={handlePress} />
    </>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  }
})
