export const TableColumn = [
  {
    id: "listing",
    label: "listing",
  },
  {
    id: "created",
    label: "updated",
  },
  {
    id: "creator",
    label: "creator",
  },
  {
    id: "scans",
    label: "scans",
  },
  {
    id: "engagement",
    label: "engagement",
  },
  { id: "action", label: "action" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
