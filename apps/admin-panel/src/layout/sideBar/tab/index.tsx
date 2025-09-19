import { useAppSelector } from "@/redux/store";
import { CSSProperties, MouseEventHandler } from "react";
import { shallowEqual } from "react-redux";
import "./style.css";

export const Tab = ({
  id,
  icon,
  label,
  onClick,
  isActive,
  isLogout,
  style,
}: {
  id?: string;
  icon?: string;
  label: string;
  onClick?: MouseEventHandler;
  isActive?: boolean;
  isLogout?: boolean;
  style?: CSSProperties;
}) => {
  // Global States
  const { sideBarMode } = useAppSelector(
    (state) => ({
      sideBarMode: state?.sideBarMode?.sideBarMode,
    }),
    shallowEqual
  );

  return (
    <div
      className={`Tab ${isActive && "Tab_active"} ${
        isLogout && "logoutTab"
      } unselectable`}
      onClick={onClick}
      id={id}
      style={{
        ...style,
        justifyContent: sideBarMode === "expanded" ? "space-between" : "center",
      }}
      title={label}
    >
      <div className="iconAndName">
        {icon ? (
          <div className="iconContainer">
            <img className="icon" src={icon} alt="icon" />
          </div>
        ) : null}
        {sideBarMode === "expanded" ? <p className="name">{label}</p> : null}
      </div>
    </div>
  );
};
