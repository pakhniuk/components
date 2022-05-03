Button primary (default):

```js
<Button>Click me!</Button>
```

Button secondary:

```js
<Button mode="secondary">Click me!</Button>
```

Button outline:

```js
<Button mode="outline">Click me!</Button>
```

Button transparent:

```js
<Button mode="transparent">Click me!</Button>
```

Button link:

```js
<Button mode="link">Click me!</Button>
```

Button square:

```js
import LoginIcon from "../../assets/svg/16/login.svg";
<Button square icon={<LoginIcon />}></Button>;
```

Button square sm:

```js
import AddIcon from "../../assets/svg/12/add-in-circle.svg";
<Button square icon={<AddIcon />} size="sm"></Button>;
```

Button square lg:

```js
import FillIcon from "../../assets/svg/20/fill.svg";
<Button square icon={<FillIcon />} size="lg"></Button>;
```

Button square secondary:

```js
import FillIcon from "../../assets/svg/20/fill.svg";
<Button mode="secondary" square icon={<FillIcon />} size="lg"></Button>;
```

Button square transparent:

```js
import FillIcon from "../../assets/svg/20/fill.svg";
<Button mode="transparent" square icon={<FillIcon />} size="lg"></Button>;
```

Button disabled:

```js
<Button disabled>Click me!</Button>
```

Button small:

```js
<Button size="sm">Click me!</Button>
```

Button large:

```js
<Button size="lg">Click me!</Button>
```

Button with icon:

```js
import LoginIcon from "../../assets/svg/16/login.svg";

<Button icon={<LoginIcon />}>Click me!</Button>;
```

Button with icon sm:

```js
import AddIcon from "../../assets/svg/12/add-in-circle.svg";

<Button icon={<AddIcon />} size="sm">
  Click me!
</Button>;
```

Button with icon lg:

```js
import FillIcon from "../../assets/svg/20/fill.svg";

<Button icon={<FillIcon />} size="lg">
  Click me!
</Button>;
```

Button secondary with icon:

```js
import LoginIcon from "../../assets/svg/16/login.svg";

<Button icon={<LoginIcon />} mode="secondary">
  Click me!
</Button>;
```

Button outline with icon:

```js
import LoginIcon from "../../assets/svg/16/login.svg";

<Button icon={<LoginIcon />} mode="outline">
  Click me!
</Button>;
```
