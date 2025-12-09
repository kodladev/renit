/**
 * A list of standard HTML element names.
 *
 * This array contains the names of all standard HTML elements. It can be used
 * to verify whether a given tag name is a valid HTML element.
 *
 * @type {string[]}
 */
// prettier-multiline-arrays-next-line-pattern: 12 10 12 12 12 11 11 11 11
export const HTMLElements = [
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big',
  'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup',
  'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed',
  'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head',
  'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend',
  'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript',
  'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q',
  'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span',
  'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th',
  'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
];

/**
 * A list of standard SVG element names.
 *
 * This array contains the names of all standard SVG elements. It can be used
 * to verify whether a given tag name is a valid SVG element.
 *
 * @type {string[]}
 */
// prettier-multiline-arrays-next-line-pattern: 7 5 8 6 9
export const SVGElements = [
  'circle', 'clipPath', 'defs', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer',
  'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight',
  'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge',
  'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight',
  'feTile', 'feTurbulence', 'g', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon',
  'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan',
];

/**
 * A list of custom NIT (Non-Standard) element names.
 *
 * This array contains the names of custom elements used in the Renit.
 * These elements represent non-standard HTML elements that might be used.
 *
 * @type {string[]}
 */
export const NITElements = ['component', 'if', 'elseif', 'else', 'for'];

/**
 * Array containing names of HTML void tags.
 * @type {string[]}
 */
// prettier-multiline-arrays-next-line-pattern: 7
export const HTML_VOID_TAGS = [
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img',
  'input', 'link', 'meta', 'source', 'track', 'wbr',
];

/**
 * The name of the HTML <template> tag
 * @type {string}
 */
const HTML_TEMPLATE_TAG = 'template';

/**
 * The name of the HTML <script> tag
 * @type {string}
 */
export const HTML_SCRIPT_TAG = 'script';

/**
 * The name of the HTML <style> tag
 * @type {string}
 */
export const HTML_STYLE_TAG = 'style';

/**
 * Array containing names of HTML raw text tags
 * @type {string[]}
 */
const HTML_RAW_TEXT_TAGS = [HTML_SCRIPT_TAG, HTML_STYLE_TAG];

/**
 * Array containing names of HTML escapable raw text tags
 * @type {string[]}
 */
const HTML_ESCAPABLE_RAW_TEXT_TAGS = ['textarea', 'title'];

/**
 * Array containing names of HTML special tags
 * @type {string[]}
 */
export const HTML_SPECIAL_TAGS = [
  HTML_TEMPLATE_TAG,
  ...HTML_RAW_TEXT_TAGS,
  ...HTML_ESCAPABLE_RAW_TEXT_TAGS,
];

/**
 * Regular expression pattern to match the name of an HTML tag.
 * @type {RegExp}
 */
export const RGX_HTML_TAG_NAME = /<\/?([^\s]+?)[/\s>]/;

/**
 * Regular expression pattern to match attributes of an HTML tag.
 * @type {RegExp}
 */
export const RGX_HTML_TAG_ATTRIBUTES =
  /(?:([^\s]+))="(?:([\s\S]*?))"|(?:([^\s]+))='(?:(.*?))'|(?:([^\s]+))={(?:([\s\S]*))}|(?:([^\s]+))=(?=[^{"'])(?:(.*?))(?=[\s>])|\s((?:[^'"\s\W><]+|[{}:@.|*#^])+)(?=[\s/>])/g;

/**
 * Regular expression pattern to match the first tag in HTML content.
 * @type {RegExp}
 */
export const RGX_HTML_FIRST_TAG = /<(?:\/|)[a-zA-Z0-9](?:"[^"]*"|'[^']*'|{[^{]*}|[^'"}>])*>/;

/**
 * Regular expression to match text outside tags.
 * @type {RegExp}
 */
export const RGX_HTML_OUTSIDE_TAGS =
  /(?:(?:<!--[\s\S]*?-->)|(?:<(\w+)\b[^<>]*>[\s\S]*?<\/\1>)|(?:<(\w+|\W+)\b[^<>]*>))|([^<>]+)/g;

/**
 * The start of an HTML comment.
 * @type {string}
 */
export const commentStart = '<!--';

/**
 * The text indicator within an HTML comment.
 * @type {string}
 */
export const textSelector = 'text:';

/**
 * The end of an HTML comment.
 * @type {string}
 */
export const commentEnd = '-->';
