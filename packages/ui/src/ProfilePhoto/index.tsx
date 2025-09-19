import { ASSET_PATHS } from "@repo/assets";
import { getInitials } from "@repo/utilities";
import {
  CSSProperties,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import "./style.css";

interface ProfilePhotoProps {
  photo?: string;
  name?: string;
  containerStyle?: CSSProperties;
  size?: string | number;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
  customInitials?: string;
  isBorder?: boolean;
  variant?: "circle" | "square";
  onClose?: MouseEventHandler;
  isClose?: boolean;
}
export const ProfilePhoto = ({
  photo,
  name,
  containerStyle,
  size = "5rem",
  onClick,
  customInitials,
  isBorder,
  variant = "circle",
  // onClose,
  // isClose,
}: ProfilePhotoProps) => {
  // Hooks
  const containerRef = useRef<HTMLDivElement | null>(null);

  // States
  const [containerWidth, setContainerWidth] = useState(20);

  // Effects
  useEffect(() => {
    if (size && containerRef.current && containerRef.current.clientWidth) {
      setContainerWidth(containerRef.current.clientWidth / 2);
    }
  }, [size, containerRef, containerRef.current?.clientWidth]);

  return (
    <div
      ref={containerRef}
      className={`profilePhoto unselectable ${variant} ${
        onClick ? "clickable profilePhotoClickable" : ""
      }`}
      style={{
        // backgroundColor: !photo && name ? getRandomColor() : "",
        border: isBorder ? "0.2rem solid rgb(var(--primary), 0.15)" : "none",
        backgroundColor: !photo && name ? "rgba(var(--primary), 0.5)" : "",
        height: size,
        maxHeight: size,
        minHeight: size,
        width: size,
        maxWidth: size,
        minWidth: size,
        ...containerStyle,
      }}
      onClick={onClick}
    >
      {photo ? (
        <img
          src={photo}
          className="photo"
          alt="photo"
          onError={(e) =>
            (e.currentTarget.src = ASSET_PATHS.IMAGES.DUMMY_PROFILE_PHOTO)
          }
        />
      ) : null}
      {!photo && !name ? (
        <img
          src={ASSET_PATHS.IMAGES.DUMMY_PROFILE_PHOTO}
          className="photo"
          alt="default profile"
          onError={(e) =>
            (e.currentTarget.src = ASSET_PATHS.IMAGES.DUMMY_PROFILE_PHOTO)
          }
        />
      ) : null}
      {!photo && name ? (
        <p
          className="name"
          style={{
            fontSize: `${containerWidth}px`,
            lineHeight: "125%",
          }}
        >
          {customInitials ? customInitials : getInitials(name)}
        </p>
      ) : null}
      {/* {isClose && (
        <div className={"closeIconContainer"} onClick={onClose}>
          <img
            src={Icons.CROSS_ICON}
            alt={"close icon"}
            className="closeIcon"
          />
        </div>
      )} */}
    </div>
  );
};
