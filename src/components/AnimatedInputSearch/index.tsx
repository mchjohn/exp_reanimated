import Animated,
{
  Easing,
  runOnUI,
  runOnJS,
  withSpring,
  withTiming,
  useSharedValue,
  WithTimingConfig,
} from 'react-native-reanimated'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRef, useState } from 'react'
import { StyleSheet, TextInput, View, Dimensions, Keyboard } from 'react-native'

const widthScreen = Dimensions.get('screen').width
const userConfig: WithTimingConfig = {
  duration: 900,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1)
}

export function AnimatedInputSearch() {
  const inputRef = useRef(null)
  const [inputIsOpen, setInputIsOpen] = useState(false)

  const inputWidth = useSharedValue(0)
  const inputLeftPadding = useSharedValue(0)
  const iconCloseOpacity = useSharedValue(0)
  const iconSearchOpacity = useSharedValue(1)

  const AnimatedIcon = Animated.createAnimatedComponent(Ionicons)
  const AnimatedInput = Animated.createAnimatedComponent(TextInput)

  const onAnimatedIcon = (searchOpacity: number, closeOpacity: number) => {
    iconCloseOpacity.value = withTiming(closeOpacity, userConfig)
    iconSearchOpacity.value = withTiming(searchOpacity, userConfig)
  }

  const setFocus = () => inputRef.current.focus()

  const handleOpenInput = () => {
    setInputIsOpen(true)

    inputLeftPadding.value = 16
    onAnimatedIcon(0, 1)

    runOnUI(() => {
      inputWidth.value = withSpring(widthScreen - 32 - 48 /** largura da tela - padding - tamanho total do ícone */,
        {},
        () => runOnJS(setFocus)()
      )
    })()
  }

  const handleCloseInput = () => {
    Keyboard.dismiss()
    inputRef.current.clear()

    setInputIsOpen(false)

    inputLeftPadding.value = 0
    onAnimatedIcon(1, 0)

    runOnUI(() => {
      inputWidth.value = withSpring(0,
        {
          mass: 1,
          damping: 100,
          stiffness: 100,
        },
      )
    })()
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <AnimatedInput
          ref={inputRef}
          style={[styles.input, { width: inputWidth, paddingLeft: inputLeftPadding }]}
          placeholder='Pesquisar...'
          placeholderTextColor={'#333'}
        />

        {!inputIsOpen &&
          <AnimatedIcon
            name="search"
            size={32}
            color="#333"
            style={[styles.icon, { opacity: iconSearchOpacity }]}
            onPress={handleOpenInput}
          />
        }
        {inputIsOpen &&
          <AnimatedIcon
            name="close"
            size={32}
            color="#333"
            style={[styles.icon, { opacity: iconCloseOpacity }]}
            onPress={handleCloseInput}
          />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 16,
  },
  wrapperInput: {
    width: '100%',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'flex-end'
  },
  input: {
    color: '#333',
    height: 48,
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: '#E5D9F2'
  },
  icon: {
    paddingLeft: 16,
    paddingVertical: 16,
  }
})
