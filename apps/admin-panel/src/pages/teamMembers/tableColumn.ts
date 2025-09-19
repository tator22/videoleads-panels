export const TableColumn = [
  {
    id: "member",
    label: "member",
  },
  {
    id: "added_on",
    label: "added on",
  },
  {
    id: "role",
    label: "role",
  },
  { id: "action", label: "action" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
