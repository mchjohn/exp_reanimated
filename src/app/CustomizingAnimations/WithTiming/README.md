
## Customizando animações

Reanimated vem com três funções de animação integradas: `withTiming`, `withSpring` e `withDecay`. Vamos nos concentrar em `withTiming` e `withSpring`.

## withTiming

É muito fácil personalizar o comportamento das funções de animação no Reanimated. Você pode fazer isso passando um objeto de configuração para o segundo parâmetro da função `withTiming`.

O parâmetro de configuração de `withTiming` vem com duas propriedades: duração(duration) e atenuação(easing).

```javascript
import { withTiming, Easing } from 'react-native-reanimated'

withTiming(sv.value, {
  duration: 300,
  easing: Easing.inOut(Easing.quad),
})
```

Bastante simples, o parâmetro de duração define quanto tempo, em milissegundos, a animação deve levar para atingir o `toValue` atribuído. A duração por padrão é definida como 300 milissegundos.

O parâmetro `easing` permite ajustar a animação durante o tempo especificado. Por exemplo, você pode fazer a animação começar lentamente, depois aumentar a velocidade e desacelerá-la novamente no final. Este valor é padronizado como `Easing.inOut(Easing.quad)`.

Reanimado vem com um punhado de funções de atenuação predefinidas. Você pode brincar com eles no [playground interativo](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/customizing-animation/) ou verificar a [referência completa da API withTiming](https://docs.swmansion.com/react-native-reanimated/docs/animations/withTiming).


## withSpring

`withSpring` é uma função de animação baseada na física que funciona de maneira diferente de `withTiming`. Faz parecer que o objeto que você está animando está conectado a uma mola real. A abordagem baseada na física faz com que as animações pareçam verossímeis.

Na maioria das vezes, ao mexer em molas, você ajustará uma destas três propriedades: massa(mass), rigidez(stiffness) (também conhecida como tensão(tension)) e amortecimento(damping) (também conhecido como atrito(friction)).

```javascript
import { withSpring } from 'react-native-reanimated'

withSpring(sv.value, {
  mass: 1,
  stiffness: 100,
  damping: 10,
})
```

### Mass
A massa(mass) de uma mola influencia a dificuldade de fazer um objeto se mover e pará-lo. A massa(mass) adiciona uma sensação de inércia ao objeto que você está tentando mover. Você pode [ver no playground](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/customizing-animation/) que a mola com maior massa se move de forma mais “lenta” em comparação com a configuração padrão.

### Stiffness
A rigidez(stiffness) afeta o quão saltitante é a mola. Por exemplo, pense na diferença entre uma mola de aço (com rigidez muito alta) e uma mola feita de plástico macio (com rigidez baixa).

### Damping
Damping descreve a rapidez com que a animação da mola termina. Um amortecimento mais alto significa que a mola irá parar mais rapidamente. No mundo real, você poderia pensar na mesma fonte saltando no ar e debaixo d'água. Por exemplo, uma mola no vácuo teria atrito zero e, portanto, amortecimento zero.

Reanimado vem com várias outras propriedades usadas para personalizar sua animação de `withSpring`. Você pode brincar com eles no [playground interativo](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/customizing-animation/) ou verificar a [referência completa da API withSpring](https://docs.swmansion.com/react-native-reanimated/docs/animations/withSpring).



## Resumo

- As funções `withTiming` e `withSpring` usam o objeto de configuração como um segundo parâmetro.
- Você pode ajustar o comportamento do `withTiming` com propriedades de duração(duration) e atenuação(easing).
- Para sua conveniência, o Reanimated vem com um módulo `Easing` integrado.
- Algumas das propriedades que ajustam o comportamento do `withSpring` são massa(mass), rigidez(stiffness) e amortecimento(damping).

