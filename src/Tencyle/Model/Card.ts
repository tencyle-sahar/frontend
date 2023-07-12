export default interface Card<Value = unknown> {
  title: string;
  svg?: string;
  value: Value;
  onClick?: (value: Value) => void;
}
