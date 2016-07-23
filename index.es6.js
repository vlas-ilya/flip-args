export default function flip (fn) {
	return (...params) => fn(...params.reverse())
}