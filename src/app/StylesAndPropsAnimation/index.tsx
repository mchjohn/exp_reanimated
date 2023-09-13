import Animated,
{
  withTiming,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
} from 'react-native-reanimated'
import { StyleSheet } from 'react-native'

import { Circle, Svg } from 'react-native-svg'

import { ClickButton } from '../../components/ClickButton'

export default function StylesAndPropsAnimation() {
  const r = useSharedValue(10)
  const translateX = useSharedValue(0)

  const AnimatedCircle = Animated.createAnimatedComponent(Circle)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }))

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }))

  const handlePress = () => {
    translateX.value = withSpring(translateX.value + 50)
  }

  const handlePressR = () => {
    r.value += 10
  }

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <ClickButton onPress={handlePress} />

      <Svg style={styles.svg}>
        <AnimatedCircle cx="50" cy="50" r={r} fill="blue" animatedProps={animatedProps} />
      </Svg>
      <ClickButton onPress={handlePressR} />
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
  },
  svg: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
