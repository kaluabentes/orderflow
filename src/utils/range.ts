export default function range(length) {
  return new Array(length).fill(null).map((_, index) => index + 1)
}
