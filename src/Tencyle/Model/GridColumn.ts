export default interface GridColumn<Row = unknown> {
  title: string;
  field: keyof Row;
  formatter?: (value: string) => string;
}
