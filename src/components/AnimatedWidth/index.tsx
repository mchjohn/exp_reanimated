import { StyleSheet } from 'react-native'
import Animated, { withSpring, useSharedValue } from 'react-native-reanimated'

import { ClickButton } from '../ClickButton'

export function AnimatedWidth() {
  const width = useSharedValue(100)

  const handlePress = () => {
    width.value = withSpring(width.value + 50)
  }

  return (
    <>
      <Animated.View
        style={[styles.box, { width }]}
      />
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
  },
})
