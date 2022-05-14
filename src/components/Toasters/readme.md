Toasters

```js
import { useState } from "react";
import Button from "../Button";
import { uuid } from "../../utils";

const ToastersExample = () => {
  const [toasters, setToasters] = useState([]);

  const addToaster = (toaster) => {
    const id = uuid();
    setToasters([...toasters, { ...toaster, id }]);
  };

  const removeToaster = (id) => {
    const filtered = toasters.filter((toaster) => toaster.id !== id);
    setToasters(filtered);
  };

  return (
    <div>
      <Toasters toasters={toasters} removeToaster={removeToaster} />
      <p>
        <Button onClick={() => addToaster({ type: "success" })}>Show success toaster!</Button>
      </p>
      <p>
        <Button onClick={() => addToaster({ type: "error" })}>Show error toaster!</Button>
      </p>
      <p>
        <Button onClick={() => addToaster({ type: "warning" })}>Show warning toaster!</Button>
      </p>
      <p>
        <Button onClick={() => addToaster({ type: "info" })}>Show info toaster!</Button>
      </p>
    </div>
  );
};

<ToastersExample />;
```
