import { isDate, parse } from "date-fns";

export function dateFormat(value, originalValue) {
   return isDate(originalValue)
      ? originalValue  // this make sure that a value is provided
      : parse(originalValue, "yyyy-MM-dd", new Date());
}