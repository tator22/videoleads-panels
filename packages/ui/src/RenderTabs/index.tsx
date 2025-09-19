import { CSSProperties } from "react";
import "./style.css";

export interface renderTabProps {
  key: string;
  label: string;
}

export const RenderTab = ({
  tabs,
  activeTab,
  onClick,
  customContainerStyle,
  activeIndex,
}: {
  tabs: renderTabProps[];
  activeTab?: string;
  onClick?: (item: renderTabProps, index: number) => void;
  customContainerStyle?: CSSProperties;
  activeIndex?: number;
}) => {
  return (
    <div className="renderTabContainer" style={customContainerStyle}>
      {tabs?.map((item, index) => {
        return (
          <button
            name="button"
            key={index}
            className={`renderTabButton clickable ${
              (activeIndex ? activeIndex === index + 1 : activeTab === item.key)
                ? "tabActive"
                : ""
            }`}
            onClick={() => onClick!(item, index)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
