import Animated, {
  withTiming,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withDecay,
} from 'react-native-reanimated'
import {
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'

const SIZE = 120

export default function HandlingGestures() {
  const widthDecay = useSharedValue(0)
  const offsetDecay = useSharedValue(0)

  const offsetPan = useSharedValue(0)
  const pressedPan = useSharedValue(false)

  const pressedTap = useSharedValue(false)

  const onLayout = (event) => {
    widthDecay.value = event.nativeEvent.layout.width
  }

  /**
   * Você pode acessar com segurança os valores compartilhados
   * porque os retornos de chamada passados para gestos são workletizados
   * automaticamente para você.
   */
  const tap = Gesture.Tap()
    .onBegin(() => {
      pressedTap.value = true
    })
    .onFinalize(() => {
      pressedTap.value = false
    })

  const animatedStylesTap = useAnimatedStyle(() => ({
    backgroundColor: pressedTap.value ? '#FFE04B' : '#B58DF1',
    transform: [{ scale: withTiming(pressedTap.value ? 1.2 : 1) }],
  }))

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressedPan.value = true
    })
    /**
     * O retorno de chamada passado para onChange
     * vem com alguns dados de evento que possuem várias propriedades úteis.
     * Um deles é a translationX que indica o quanto o objeto se moveu no eixo X.
     * Armazenamos isso em um valor compartilhado para mover o círculo de acordo.
     */
    .onChange((event) => {
      offsetPan.value = event.translationX
    })
    /**
     * Fazer o círculo voltar ao local inicial, basta redefinir o `offset.value`.
     * Podemos usar as funções withSpring ou withTiming para fazê-lo voltar com uma animação.
     */
    .onFinalize(() => {
      offsetPan.value = withSpring(0),
      pressedPan.value = false
    })

  const animatedStylesPan = useAnimatedStyle(() => ({
    transform: [
      { translateX: offsetPan.value },
      { scale: withTiming(pressedPan.value ? 1.2 : 1) },
    ],
    backgroundColor: pressedPan.value ? '#FFE04B' : '#b58df1',
  }))

  /**
   * withDecay permite manter a velocidade do gesto e animar com alguma desaceleração.
   * Isso significa que quando você solta um objeto agarrado com alguma velocidade,
   * você pode lentamente pará-lo.
   * Passe a velocidade final no método onFinalize para a propriedade
   * de velocidade da função withDecay e deixe o Reanimated cuidar disso para você.
   * Para manter a nova posição de um objeto, atualize a alteração no eixo X
   * no método onChange
   */
  const panWithDecay = Gesture.Pan()
    .onChange((event) => {
      offsetDecay.value += event.changeX
    })
    .onFinalize((event) => {
      offsetDecay.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [-(widthDecay.value / 2) + SIZE / 2, widthDecay.value / 2 - SIZE / 2],
      })
    })

  const animatedStylesDecay = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetDecay.value }],
  }))

  return (
    <>
      <View style={styles.container}>
        {/*
          Você precisa passar seu gesto definido para o suporte de gesto do componente GestureDetector.
          Esse componente deve envolver a visualização na qual você deseja manipular os gestos.
        */}
        <GestureDetector gesture={tap}>
          <Animated.View style={[styles.circle, animatedStylesTap]} />
        </GestureDetector>
      </View>

      <View style={styles.container}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle, animatedStylesPan]} />
        </GestureDetector>
      </View>

      <View style={styles.container} onLayout={onLayout}>
        <GestureDetector gesture={panWithDecay}>
          <Animated.View style={[styles.box, animatedStylesDecay]} />
        </GestureDetector>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
  },
  box: {
    height: SIZE,
    width: SIZE,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    cursor: 'grab',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
