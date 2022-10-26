export enum Token {
    Function,
    Var,
    Type,
    Return,
    Equals,
    Literal,
    Identifier,
    Newline,
    Semicolon,
    Colon,
    Whitespace,
    Unknown,
    BOF,
    EOF,
}

export type Error = {
    pos: number
    message: string
}

export type Lexer = {
    scan(): void
    token(): Token
    pos(): number
    text(): string
}