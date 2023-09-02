import { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { AnimatedWidth } from '../../components/AnimatedWidth'
import { AnimatedRight } from '../../components/AnimatedRight'
import { CustomAnimated } from '../../components/CustomAnimated'
import { AnimatedWithTiming } from '../../components/AnimatedWithTiming'
import { AnimatedWithSpring } from '../../components/AnimatedWithSpring'
import { AnimatedInputSearch } from '../../components/AnimatedInputSearch'

import { Button } from '../../components/Button'

const AnimationTypes = {
  animatedWith: AnimatedWidth,
  animatedRight: AnimatedRight,
  customAnimated: CustomAnimated,
  animatedWithTiming: AnimatedWithTiming,
  animatedWithSpring: AnimatedWithSpring,
  animatedInputSearch: AnimatedInputSearch,
}

export function Home() {
  const [type, setType] = useState<keyof typeof AnimationTypes>('animatedInputSearch')

  const handlePress = (animType: keyof typeof AnimationTypes) => {
    setType(animType)
  }

  const renderComponent = (animType: keyof typeof AnimationTypes) => {
    const SelectedComponent = AnimationTypes[animType]

    return <SelectedComponent />
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button onPress={() => handlePress('animatedWith')} title="Animação do with" bgColor='#7BDFF2' />
        <Button onPress={() => handlePress('animatedRight')} title="Animação para direita" bgColor='#F2B5D4' />
        <Button onPress={() => handlePress('customAnimated')} title="Animação de SVG" bgColor='#B2F7EF' />
        <Button onPress={() => handlePress('animatedWithTiming')} title="Animação com withTiming" bgColor='#F7D6E0' />
        <Button onPress={() => handlePress('animatedWithSpring')} title="Animação com withSpring" bgColor='#EE6055' />
        <Button onPress={() => handlePress('animatedInputSearch')} title="Animação de input" bgColor='#60D394' />
      </View>

      {renderComponent(type)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  buttonGroup: {
    gap: 4,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 16,
    borderBottomWidth: 4,
    borderBottomColor: '#333',
  },
})
