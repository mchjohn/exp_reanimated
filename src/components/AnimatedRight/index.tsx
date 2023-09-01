import { Button, StyleSheet } from 'react-native'
import Animated, { withSpring, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'

export function AnimatedRight() {
  const translateX = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }))

  const handlePress = () => {
    translateX.value = withSpring(translateX.value + 50)
  }

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={handlePress} title="AnimatedRight" />
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
})
