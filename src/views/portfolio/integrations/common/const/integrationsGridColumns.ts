import {GridColumn, Integration} from "../../../../../Tencyle/Model";

const integrationsGridColumns: GridColumn<Integration>[] = [
  {
    title: "Name",
    field: "readableName",
  },
  {
    title: "Type",
    field: "scmType",
  },
  {
    title: "Api key",
    field: "apiKey",
    formatter(value) {
      return `${value.slice(0, 5)}...XXXXXXXXXX...${value.slice(-5)}`;
    },
  },
]

export default integrationsGridColumns;
