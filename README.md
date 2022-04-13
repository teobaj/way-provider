# Way-Provider ↯

### Context Provider for webcomponents

#### Step 1:
<p>Wrap your components with provider</p>

```
import 'way-provider';

<way-provider context="{'name': 'consumer'}">
  ...children components
</way-provider>
```

#### Step 2:

<p>Initalize context in your webcomponent child</p>

```
import { useWayContext } from 'way-provider';

...
connectedCallback(){
  useWayContext(this)
}
```

<h3>Svelte Webcomponent</h3>

```
  thisCmp = get_current_component()

  onMount(() => useWayContext(thisCmp))
```

#### Step 3:
<p>Use the attribute</p>


<h3>Vanilla</h3>

```
  this.getAttribute('name');
```

<h3>Lit</h3>

```
  @property()
  name: string
```


<h3>Svelte</h3>

```
  export let name
```

