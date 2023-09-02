import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
  title: string;
  bgColor: string;
  onPress?: (event: GestureResponderEvent) => void
}

export function Button({ title, bgColor, onPress }: ButtonProps) {
  return (
    <Pressable style={[styles.button, { backgroundColor: bgColor }]} onPress={onPress}>
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 'auto',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
})
