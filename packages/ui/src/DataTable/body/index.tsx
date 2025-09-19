import { CheckBox } from "../../Checkbox";
import { TableRow } from "../type";
import "./style.css";

export const Body = ({
  rows,
  render,
  onClickRow,
  enableSelection,
  selectedRowsId,
  onChangeRowCheckbox,
  rowClassName,
}: {
  rows: TableRow[];
  render: (row: TableRow) => React.ReactNode;
  onClickRow?: (rowId: any) => void | null;
  enableSelection?: boolean;
  loading?: boolean;
  selectedRowsId?: number[];
  onChangeRowCheckbox: (id: number) => void;
  rowClassName?: string;
}) => {
  return (
    <tbody className="body">
      {rows?.length !== 0 ? (
        rows?.map((row, idx) => (
          <tr
            key={`idx-table-${idx}`}
            onClick={(e) => {
              e.stopPropagation();
              if (onClickRow) onClickRow(row?.id);
            }}
            style={{
              cursor: onClickRow ? "pointer" : "default",
            }}
            className={rowClassName}
          >
            {enableSelection && (
              <td
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <CheckBox
                  inputProps={{
                    onChange: () => {
                      if (onChangeRowCheckbox) onChangeRowCheckbox(row?.id);
                    },
                    checked: selectedRowsId?.includes(row?.id) ? true : false,
                  }}
                />
              </td>
            )}
            {render(row)}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={1000}>No Record Found</td>
        </tr>
      )}
    </tbody>
  );
};
