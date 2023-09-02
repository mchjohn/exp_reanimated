import Animated,
{
  Easing,
  withTiming,
  withRepeat,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'

const duration = 2000

export function AnimatedWithTiming() {
  const linear = useSharedValue(200)
  const bounce = useSharedValue(0)
  const defaultAnim = useSharedValue(200)

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }]
  }))
  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: linear.value }]
  }))
  const animatedBounce = useAnimatedStyle(() => ({
    transform: [{ translateX: bounce.value }]
  }))

  useEffect(() => {
    linear.value = withRepeat(
      withTiming(-linear.value, {
        duration,
        easing: Easing.linear
      }),
      -1,
      true
    )

    defaultAnim.value = withRepeat(
      withTiming(-defaultAnim.value, {
        duration,
      }),
      -1, /** repetição infinita */
      true /** faz o caminho reverso */
    )

    bounce.value = withRepeat(
      withTiming(300, {
        duration,
        easing: Easing.bounce
      }),
      -1,
      true
    )
  }, [])

  return (
    <>
      <Animated.View style={[styles.box, animatedDefault]}>
        <Text style={styles.text}>inOut</Text>
      </Animated.View>

      <Animated.View style={[styles.box, animatedChanged]}>
        <Text style={styles.text}>linear</Text>
      </Animated.View>

      <Animated.View style={[styles.box, animatedBounce]}>
        <Text style={styles.text}>bounce</Text>
      </Animated.View>
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
