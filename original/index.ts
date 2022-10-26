import fs = require('fs')
import { compile } from './compile';
const args = process.argv.slice(2);
const title = (str: string) => console.log('\x1b[1m%s\x1b[0m', str);

if (!args.length) {
    console.error("Expected a path to a TS file as the argument")
    process.exit(1)
}

title(`Looking at: ${args[0]}\n`)
const ts = fs.readFileSync(args[0], 'utf8')
compile(ts)
