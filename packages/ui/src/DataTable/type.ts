export interface HeadCell {
  id: string | number | undefined;
  label: string;
  numeric?: boolean;
  colSpan?: number;
  enableSorting?: boolean;
  sortKey?: string;
}

export interface AdditionalHeadCell {
  id: string | number | undefined;
  label: string;
  numeric?: boolean;
  colSpan?: number;
}

export interface TableRow {
  [key: string]: string | number | boolean;
  id: number;
}

export interface DataTableProps {
  headCells: HeadCell[];
  additionalHeadCells?: AdditionalHeadCell[];
  rows: TableRow[];
  render: (row: TableRow) => React.ReactNode;
  action?: boolean;
  loading?: boolean;
  handleChange?: (pageNo: number) => void;
  paginationEnabled?: boolean;
  count?: number;
  limit?: number;
  setSortBy?: (sortBy: string) => void;
  sortBy?: string;
  currentPage?: number;
  tableFooterTitle?: string;
  onClickRow?: (rowId: any) => void;
  enableSelection?: boolean;
  selectionHeaderComponent?: React.ReactNode;
  setSelectedRowsId?: any;
  selectedRowsId?: number[];
  additionalHeadCellsRowClassName?: string;
  headCellsRowClassName?: string;
  rowClassName?: string;
}
