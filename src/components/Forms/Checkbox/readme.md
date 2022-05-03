Checkbox

```js
import { useState } from "react";

const ExampleCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onChange={({ target: { checked } }) => setChecked(checked)} />;
};

<ExampleCheckbox />;
```

Checkbox with label

```js
import { useState } from "react";

const ExampleCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={({ target: { checked } }) => setChecked(checked)}
      text="Check me!"
      dotColor="red"
    />
  );
};

<ExampleCheckbox />;
```

Checkbox disabled

```js
<Checkbox disabled checked={false} onChange={() => console.log("check")} />
```

Checkbox unselect

```js
<Checkbox unselect checked onChange={() => console.log("check")} />
```

Checkbox reversed

```js
<Checkbox reversed text="Check me!" checked={false} onChange={() => console.log("check")} />
```
