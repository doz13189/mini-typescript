import { Lexer, Token } from "./types";

export function lex(s: string): Lexer {
    let pos = 0
    let text = ""
    let token = Token.BOF
    return {
        scan,
        token: () => token,
        pos: () => pos,
        text: () => text
    }
    function scan() {
        scanForward(c => /[ \t\b\n]/.test(c))
    }
    function scanForward(pred: (x: string) => boolean) {
        console.log({pos})
        console.log({s})
        console.log("charAt", s.charAt(pos))
        console.log("boolean", pos < s.length && pred(s.charAt(pos)))
        console.log("length", s.length)
        while (pos < s.length && pred(s.charAt(pos))){
            pos++
        }
        console.log({pos})
    }
}
