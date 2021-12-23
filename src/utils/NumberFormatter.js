export function numberWithCommas(number) {
  if (number !== null || number !== undefined || number !== "") {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return number;
  }
}
