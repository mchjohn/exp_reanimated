
## Usando um componente animado

```javascript
import Animated from 'react-native-reanimated'
```

Este objeto animado envolve recursos integrados do React Native, como View, ScrollView ou FlatList.

Você usa esses componentes como qualquer outro componente JSX.

```javascript
export default function App() {
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'violet',
      }}
    />
  );
}
```


## Definindo um valor compartilhado

Um "valor compartilhado" (shared value) é como um estado especial que você pode usar em suas animações, e você o cria usando `useSharedValue` para que ele seja mantido automaticamente em sincronia entre o código JavaScript e a interface nativa do seu aplicativo. Isso facilita a criação de animações suaves e interativas em seus aplicativos.

```javascript
import { useSharedValue } from 'react-native-reanimated'
```

Como acontece com qualquer outro hook React, você precisa defini-lo no corpo do seu componente. Em um valor compartilhado, você pode armazenar qualquer valor JS como número, string ou booleano, mas também estruturas de dados como array e objeto.

```javascript
import Animated, { useSharedValue } from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(100);

  return (
    <Animated.View
      style={{
        width,
        height: 100,
        backgroundColor: 'violet',
      }}
    />
  );
}
```

## Usando um valor compartilhado

Os valores armazenados em valores compartilhados são acessados e modificados por sua propriedade `.value`.
Não há `setter` nem nada - você simplesmente altera a propriedade `.value` como se não houvesse amanhã.

```javascript
const width = useSharedValue(100);

width.value = width.value + 50
```


## Resumo

- Componentes animados são usados para definir elementos animáveis.
- Os valores compartilhados são um fator determinante de todas as animações e nós os definimos usando um hook `useSharedValue`.
- Valores compartilhados são sempre acessados e modificados por sua propriedade `.value` (ex. `sv.value = 100`).
- Para criar animações suaves, modifique os valores compartilhados usando funções de animação como `withTiming`
