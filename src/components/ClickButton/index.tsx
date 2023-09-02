import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void
}

export function ClickButton({ title, onPress }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>
        {title ?? 'Click para animar'}
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
    backgroundColor: '#333',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
})
