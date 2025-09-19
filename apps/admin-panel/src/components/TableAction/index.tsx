import { ASSET_PATHS } from "@repo/assets";
import { CSSProperties, MouseEventHandler, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { Popover } from "react-tiny-popover";
import "./style.css";

const TableAction = ({
  isView,
  isDelete,
  isUpdate,
  onClickView,
  onClickUpdate,
  onClickDelete,
  anchorElement,
  children,
  disabled,
  displayIcon,
  style,
  heading,
}: {
  isView?: boolean;
  isDelete?: boolean;
  isUpdate?: boolean;
  onClickView?: MouseEventHandler;
  onClickUpdate?: MouseEventHandler;
  onClickDelete?: MouseEventHandler;
  anchorElement?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  displayIcon?: string;
  style?: CSSProperties;
  heading?: string;
}) => {
  // States
  const [isOpen, setIsOpen] = useState(false);

  // Functions
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  // useEffect(() => {
  //   if (anchorElement) {
  //     handleClose();
  //   }
  // }, [anchorElement]);

  return (
    <div
      className="tableActionMainContainer"
      aria-disabled={disabled ? "true" : "false"}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <Popover
        isOpen={isOpen}
        clickOutsideCapture
        positions={["top", "right", "left", "bottom"]}
        padding={10}
        containerClassName="TableAction"
        containerStyle={{
          border: "1px solid red",
        }}
        onClickOutside={handleClick}
        content={
          <ul className="tableActionMenu" style={{ ...style }}>
            {heading && <li className="tableActionMenuHeading">{heading}</li>}

            {isView && (
              <TableActionMenuItemRender
                icon={ASSET_PATHS.SVGS.EYE_ICON}
                name="view_detail"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onClickView) onClickView(e);
                }}
              />
            )}
            {isUpdate && (
              <TableActionMenuItemRender
                // icon={Icons.EDIT_PENCIL}
                name="edit"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onClickUpdate) onClickUpdate(e);
                }}
              />
            )}
            {children}
            {isDelete && (
              <TableActionMenuItemRender
                // icon={Icons.ACTION_DELETE_ICON}
                name="delete"
                isDelete={isDelete}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onClickDelete) onClickDelete(e);
                }}
              />
            )}
          </ul>
        }
      >
        <div className="TableAction">
          <button
            className="tableActionIconMenuIcon clickable"
            onClick={handleClick}
          >
            <img
              src={displayIcon ? displayIcon : ASSET_PATHS.SVGS.ACTION_ICON}
              alt="update icons table"
              className="tableActionMainIcon"
            />
          </button>
        </div>
      </Popover>
    </div>
  );
};

export default TableAction;

export const TableActionMenuItemRender = ({
  icon,
  name = "title",
  onClick,
  isDelete,
}: {
  icon?: string;
  name?: string;
  onClick?: MouseEventHandler;
  isDelete?: boolean;
}) => {
  // Hooks
  const { t } = useTranslation("table");

  return (
    <li
      className={`tableActionItem unselectable clickable ${
        isDelete ? "deleteHover" : ""
      }`}
      onClick={onClick}
    >
      <button className="tableActionItemIconContainer clickable">
        <img
          src={icon}
          alt="update icons table"
          className="tableActionItemIcon"
        />
      </button>
      <span className="tableActonItemText">{t(name)}</span>
    </li>
  );
};
