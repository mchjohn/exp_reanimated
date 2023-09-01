import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native'

import { AnimatedWidth } from '../../components/AnimatedWidth'
import { AnimatedRight } from '../../components/AnimatedRight'
import { CustomAnimated } from '../../components/CustomAnimated'

export function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <AnimatedWidth />
      </View>

      <View style={styles.wrapper}>
        <AnimatedRight />
      </View>

      <View style={styles.wrapper}>
        <CustomAnimated />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    gap: 2,
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
})
