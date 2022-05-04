Modal

```js
import { useState } from "react";
import Button from "../Button";
import { ModalWrap, ModalBody, ModalHeader, ModalFooter, ModalInner, ModalActions } from "./";

const ModalExample = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <Button onClick={() => setIsShown(true)}>Show modal</Button>
      <ModalWrap isShown={isShown} onClose={() => setIsShown(false)}>
        <ModalBody onClose={() => setIsShown(false)}>
          <ModalHeader>Header</ModalHeader>
          <ModalInner></ModalInner>
          <ModalFooter>
            <ModalActions actions={[{ label: "Cancel", mode: "secondary" }, { label: "Submit" }]} />
          </ModalFooter>
        </ModalBody>
      </ModalWrap>
    </>
  );
};

<ModalExample />;
```
