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
 * Array containing names of HTML raw text tags
 * @type {string[]}
 */
const HTML_RAW_TEXT_TAGS = ['script', 'style'];

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
