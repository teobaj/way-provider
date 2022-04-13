# Way-Provider ↯

## Context Provider for webcomponents
#### No more prop drilling in webcomponents ⛏
<p style="padding-left:12px">
  This webcomponents will pass context as props in child webcomponents. <br>
  useWayContext has one parameter, a referance to component you want context in. <br>
  Provider will append context as attributes. <br>
  For now it only support shallow object as context, so no object in context.
</p>

#### Step 1:
<p>Wrap your components with provider</p>

```typescript
import 'way-provider';

<way-provider context="{'name': 'consumer'}">
  ...children components
</way-provider>
```

#### Step 2:

<p>Initalize context in your webcomponent child</p>

``` typescript
import { useWayContext } from 'way-provider';

...
connectedCallback(){
  useWayContext(this)
}
```

<h4>For Svelte Webcomponent</h4>

```ts
  thisCmp = get_current_component()

  onMount(() => useWayContext(thisCmp))
```

#### Step 3:
<p>Use the attribute</p>


<h3>Vanilla</h3>

```typescript
  this.getAttribute('name');
```

<h3>Lit</h3>

```typescript
  @property()
  name: string
```


<h3>Svelte</h3>

```typescript
  export let name
```

---
  This library is not using default customElement decorator so don't worry if it's imported multiple times, the way-provider will not throw an error and will be defined just once.

---

<b> Build using Lit and Vite </b>