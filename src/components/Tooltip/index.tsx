import { forwardRef, useState, useRef, useEffect } from "react";
import { TPlace } from "../../typings";

import { TooltipWrap, TooltipTarget, TooltipBox } from "./styled";
import { IProps } from "./types";

const calculate = (place: TPlace): { top: number; left: number } => {
  let top = 0;
  let left = 0;

  // if (bounds) {
  //   switch (place) {
  //     case "right":
  //       top = Math.floor(bounds.top - meta.offsetTop);
  //       left = Math.floor(bounds.right + meta.offsetLeft);
  //       break;
  //     case "left":
  //       top = Math.floor(bounds.top - meta.offsetTop);
  //       left = Math.floor(bounds.left + meta.offsetLeft);
  //       break;
  //     case "bottom":
  //       top = Math.floor(bounds.top - meta.offsetTop);
  //       left = Math.floor(bounds.right - bounds.width + meta.offsetLeft);
  //       break;
  //     case "top":
  //       top = Math.floor(bounds.top - meta.offsetTop);
  //       left = Math.floor(bounds.right - bounds.width + meta.offsetLeft);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return { top, left };
};

const Tooltip = forwardRef<HTMLDivElement, IProps>(
  ({ text, children, theme = "dark", place = "top", centered = true, width = "auto", ref }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const isShown = isHovered || isFocused;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const node = useRef(null);

    useEffect(() => {
      var rect = node.current.getBoundingClientRect();
      console.log(rect);
    }, []);

    return (
      <TooltipWrap ref={ref}>
        <TooltipTarget
          ref={node}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {children}
        </TooltipTarget>
        {isShown && (
          <TooltipBox place={place} theme={theme} centered={centered} width={width}>
            {text}
          </TooltipBox>
        )}
      </TooltipWrap>
    );
  }
);

export default Tooltip;
