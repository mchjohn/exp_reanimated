import { Link } from 'expo-router'
import { Href } from 'expo-router/build/link/href'
import {Text, Pressable, StyleSheet} from 'react-native'

interface LinkButton {
  href: Href;
  title: string;
}

export function LinkButton({ href, title }: LinkButton) {
  return (
    <Link href={href} asChild>
      <Pressable
        style={styles.button}
        android_ripple={{color: '#010001'}}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    minWidth: 280,
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#ffc719',
    paddingHorizontal: 8,
  },
  text: {
    color: '#222222',
    fontSize: 18,
    fontWeight: '600',
  },
})
