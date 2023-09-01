import { Circle, Svg } from 'react-native-svg'
import { Button, StyleSheet } from 'react-native'
import Animated, { useSharedValue, withTiming, useAnimatedProps } from 'react-native-reanimated'

export function CustomAnimated() {
  const r = useSharedValue(10)

  const AnimatedCircle = Animated.createAnimatedComponent(Circle)

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }))

  const handlePress = () => {
    r.value += 10
  }

  return (
    <>
      <Svg style={styles.svg}>
        <AnimatedCircle cx="50" cy="50" r={r} fill="blue" animatedProps={animatedProps} />
      </Svg>
      <Button onPress={handlePress} title="CustomAnimated" />
    </>
  )
}

const styles = StyleSheet.create({
  svg: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
