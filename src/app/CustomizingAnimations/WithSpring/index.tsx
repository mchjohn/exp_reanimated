import Animated,
{
  withSpring,
  withRepeat,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useEffect } from 'react'
import { Text, Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width

export default function WithSpring() {
  const finalPos = width - 100 - 32 /** largura da tela - tamanho do box - padding */
  const defaultAnim = useSharedValue(0)
  const changedAnim = useSharedValue(0)

  const animatedLinear = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }],
  }))
  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: changedAnim.value }],
  }))

  useEffect(() => {
    defaultAnim.value = withRepeat(
      withSpring(finalPos),
      -1,
      true
    )

    changedAnim.value = withRepeat(
      withSpring(finalPos, {
        mass: 1.5,
        damping: 10, /** rapidez com que a  animação da mola termina */
        stiffness: 110, /** rigidez da mola */
      }),
      -1,
      true
    )
  }, [])

  return (
    <>
      <Animated.View style={[styles.box, animatedLinear]}>
        <Text style={styles.text}>Default</Text>
      </Animated.View>
      <Animated.View style={[styles.box, animatedChanged]}>
        <Text style={styles.text}>Heavy</Text>
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
