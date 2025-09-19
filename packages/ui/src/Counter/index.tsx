import clsx from "clsx";
import {
  useEffect,
  useRef,
  useState,
  type FC,
  type JSX,
  type LabelHTMLAttributes,
} from "react";
import { Clickable } from "../Clickable";
import { ErrorText } from "../ErrorText";
import { HelperText } from "../HelperText";
import { Flaticon } from "../Flaticon";
import { Label } from "../Label";
import { Text } from "../Text";
import "./style.css";

export const Counter: FC<{
  containerProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label?: string;
  helperText?: string;
  errorText?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  isOptional?: boolean;
}> = ({
  containerProps,
  label,
  helperText,
  errorText,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  defaultValue = 0,
  onValueChange,
  isOptional,
}): JSX.Element => {
  // Hooks
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Local States
  const [count, setCount] = useState(defaultValue);

  // Functions
  const updateCount = (value: number) => {
    if (containerProps?.["aria-disabled"] || value < min || value > max) return;
    setCount(value);
    onValueChange?.(value);
  };

  const startInterval = (type: "inc" | "dec") => {
    if (containerProps?.["aria-disabled"]) return;
    stopInterval();
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        const newValue = type === "inc" ? prev + 1 : prev - 1;
        if (newValue >= min && newValue <= max) {
          onValueChange?.(newValue);
          return newValue;
        }
        return prev;
      });
    }, 100);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Effects
  useEffect(() => {
    return () => stopInterval();
  }, []);

  useEffect(() => {
    setCount(defaultValue);
  }, [defaultValue]);

  return (
    <label
      {...containerProps}
      className={clsx("Counter", containerProps?.className)}
    >
      {label && (
        <Label
          text={label}
          isOptional={isOptional}
          containerProps={{ className: "labelContainer" }}
        />
      )}

      <div className={"content"}>
        <Clickable
          containerProps={{
            className: "button",
            onMouseDown: () => startInterval("dec"),
            onMouseUp: stopInterval,
            onMouseLeave: stopInterval,
            onClick: () => updateCount(count - 1),
            "aria-disabled": count <= min,
          }}
        >
          <Flaticon icon="fi fi-rr-minus-small" />
        </Clickable>

        <Text
          tag="p"
          containerProps={{ className: "count" }}
          maximumNumberOfLines={1}
        >
          {count}
        </Text>

        <Clickable
          containerProps={{
            className: "button",
            onMouseDown: () => startInterval("inc"),
            onMouseUp: stopInterval,
            onMouseLeave: stopInterval,
            onClick: () => updateCount(count + 1),
            "aria-disabled": count >= max,
          }}
        >
          <Flaticon icon="fi fi-rr-plus-small" />
        </Clickable>
      </div>

      {errorText && (
        <ErrorText
          text={errorText}
          containerProps={{ className: "errorText" }}
        />
      )}

      {helperText && (
        <HelperText
          text={helperText}
          containerProps={{ className: "helperText" }}
        />
      )}
    </label>
  );
};
