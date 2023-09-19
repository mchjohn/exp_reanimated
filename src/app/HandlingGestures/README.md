
## Lidando com gestos

Reanimated integra-se fortemente com React Native Gesture Handler, outra biblioteca criada pela Software Mansion.

#### Lidando com gestos de toque

TAP
O `tap` detecta dedos tocando a tela por um curto período de tempo. Você pode usá-los para implementar botões personalizados ou elementos pressionáveis do zero.

- Novos gestos de toque são definidos com `Gesture.Tap()` no corpo do seu componente. Você pode definir o comportamento do gesto encadeando métodos como `onBegin`, `onStart`, `onEnd` ou `onFinalize` no gesto.

- Você pode acessar com segurança os valores compartilhados porque os retornos de chamada passados para gestos são [workletizados](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#to-workletize) automaticamente para você.

- Você pode usar [gestos de composição](https://docs.swmansion.com/react-native-gesture-handler/docs/gesture-composition/) para comportamentos mais complexos.

### Manipulando gestos panorâmicos - (PAN)

- Todos os gestos compartilham uma API semelhante.
- `withDecay` permite manter a velocidade do gesto e animar com alguma desaceleração. Isso significa que quando você solta um objeto agarrado com alguma velocidade, você pode lentamente pará-lo.


## Resumo

- Reanimated integra-se com um pacote diferente chamado React Native Gesture Handler para fornecer interações perfeitas.
- Criamos novos gestos, como `Gesture.Pan()` ou `Gesture.Tap()`, e os passamos para `GestureDetector`, que deve envolver o elemento no qual queremos lidar com as interações.
- Você pode acessar e modificar valores compartilhados dentro de retornos de chamada de gestos sem nenhum padrão adicional.
- `withDecay` permite criar animações de desaceleração com base na velocidade proveniente de um gesto.


Além dos gestos `Tap` e `Pan`, o Gesture Handler vem com muitos mais, por exemplo. [`Pinch`](https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/pinch-gesture) ou [`Fling`](https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/fling-gesture). Veja seção de [início rápido da documentação do React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/quickstart) para explorar todas as possibilidades que esta biblioteca oferece.
