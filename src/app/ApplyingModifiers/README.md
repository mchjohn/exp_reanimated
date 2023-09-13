
## Customizando animações

Outra forma de personalizar animações no Reanimated é usando modificadores de animação. Reanimated vem com três modificadores integrados: `withRepeat`, `withSequence` e `withDelay`.

Vamos construir uma animação de shake simples que use todos os modificadores.

## Repetindo animação

Este modificador permite repetir uma animação fornecida.

```javascript
import { withRepeat } from 'react-native-reanimated'

function App() {
  sv.value = withRepeat(withTiming(50), 5)
  // ...
}
```

`withRepeat` recebe três parâmetros:
- A animação em si.
- numberOfReps?: number = Número de vezes que essa animação deve repetir. (valor negativo para repetir infinitamente)
- reverse?: boolean = Faz a animação ir e voltar (processo reverso)
- callback?: AnimationCallback = Geralmente usada para atualizar um estado quando a animação terminar.

Para saber mais sobre isso, você pode conferir a referência completa da [API withRepeat](https://docs.swmansion.com/react-native-reanimated/docs/animations/withRepeat).

## Rodando animações em sequência

Este modificador permite encadear animações. A próxima animação começa quando a anterior termina. Você o usa passando animações como argumentos na ordem em que deseja que sejam executadas.

Para saber mais sobre isso, você pode conferir a referência completa da [API withSequence](https://docs.swmansion.com/react-native-reanimated/docs/animations/withSequence).

No exemplo abaixo podemos iniciar com um deslocamento de 50 e redefinir para a posição inicial após terminar a animação.

```javascript
import { withSequence } from 'react-native-reanimated'

function App() {
  sv.value = withSequence(withTiming(50), withTiming(0))
  // ...
}
```

## Iniciando a animação com delay

Esta função como primeiro parâmetro leva a duração em milissegundos antes do início da animação. O segundo parâmetro define a animação a ser atrasada.

Para saber mais sobre isso, você pode conferir a referência completa da [API withDelay](https://docs.swmansion.com/react-native-reanimated/docs/animations/withDelay).

```javascript
import { withDelay } from 'react-native-reanimated'

function App() {
  sv.value = withDelay(500, withTiming(0))
  // ...
}
```


## Resumo

- Reanimated vem com três modificadores de animação integrados - `withRepeat`, `withSequence` e `withDelay`.
- `withRepeat` permite repetir uma animação um determinado número de vezes ou executá-la indefinidamente passando um valor negativo.
- `withSequence` permite executar animações em uma sequência.
- `withDelay` permite iniciar uma animação com atraso.

