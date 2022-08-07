export default function capitalize(str) {
  let tmp = str.split("-");
  let newStr = "";
  for (let word of tmp) {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    newStr += word + " ";
  }
  return newStr;
}
