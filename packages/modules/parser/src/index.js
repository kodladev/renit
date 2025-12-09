import { parse } from './parse.js';

const parsed = parse(
  `
<component name="hello">
  <p>hi</p>
  <button @click={click}>Click</button>
  <button on:click={(e) = click(e)}>Click</button>
</component>

<hello />
<p>hi</p>
`.trim()
);

console.log(JSON.stringify(parsed, 0, 2));
