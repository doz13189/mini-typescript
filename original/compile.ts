import { errors } from "./error"
import { lex } from "./lex"

export function compile(s: string) {
    errors.clear()
    lex(s).scan()
    console.log(s)
}
