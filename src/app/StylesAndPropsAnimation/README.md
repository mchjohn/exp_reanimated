
## Animando styles e props

## Animação de styles

Podemos animar estilos passando valores compartilhados inline na propriedade de estilo dos elementos:

```javascript
function App() {
  const width = useSharedValue(100);

  return <Animated.View style={{ width }} />;
}
```

Em casos básicos, esta sintaxe funciona bem, mas, não permite acessar o valor armazenado em um valor compartilhado. Por exemplo, não é possível construir animações mais complexas usando estilo in-line para multiplicar esse valor (ou fazer qualquer outra operação matemática) antes de atribuí-lo à propriedade style.

```javascript
<Animated.View style={{ width: width * 5 }} /> // isso não funciona
```

Para manipular os valores compartilhados com flexibilidade, usamos o hook `useAnimatedStyle`. Isso é muito útil ao criar animações que incluem instruções condicionais ou loops.

```javascript
const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ translateX: withSpring(translateX.value * 2) }],
}))

return (
  <Animated.View style={[styles.box, animatedStyles]} />
)
```

`useAnimatedStyle` permite acessar o valor armazenado em um valor compartilhado. Graças a isso podemos manipular o valor antes de atribuí-lo ao estilo. Este hook também permite que você mantenha toda a lógica relacionada à animação em um só lugar.


## Animando propriedades

Digamos que gostaríamos de animar elementos SVG. Em vez de passar valores para a propriedade style, os valores são definidos como props:

```javascript
<Circle cx="50" cy="50" r="10" fill="blue" />
```
Reanimated vem com apenas alguns componentes integrados, como Animated.View ou Animated.ScrollView. Para componentes que não fazem parte do Reanimated, para tornar suas props animáveis, precisamos envolvê-los com `createAnimatedComponent`:

```javascript
import Animated from 'react-native-reanimated';
import { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
```

Para animar o raio do círculo SVG podemos simplesmente passar o valor compartilhado como uma propriedade.

Assim como `useAnimatedStyle` para estilos de animação, podemos encapsular a lógica de animação e obter acesso à propriedade `.value` de um valor compartilhado usando `useAnimatedProps`.

```javascript
function App() {
  const r = useSharedValue(10)

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }))

  return (
    <Svg>
      <AnimatedCircle cx="50" cy="50" animatedProps={animatedProps} fill="blue" />
    </Svg>
  );
}
```


## Resumo

- Passar valores compartilhados para estilos inline é uma maneira simples de criar animações, mas tem algumas limitações.
- A diferença entre props e styles de animação é que as props não são passadas para o objeto de style, mas sim como props separadas do componente.
- Usando `useAnimatedStyle` e `useAnimatedProps`, podemos acessar o valor armazenado em um valor compartilhado. Isso pode adicionar controle adicional sobre a animação.
- Podemos criar nossos próprios componentes animáveis envolvendo-os com `Animated.createAnimatedComponent`.
