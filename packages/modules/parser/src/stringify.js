import { each, join, push, reduce } from 'uty/collect';
import { RAW_EMPTY, RAW_WHITESPACE } from 'uty/define';
import { isUndefined } from 'uty/is';
import { size } from 'uty/math';

/**
 * Converts an abstract syntax tree (AST) back to an HTML string representation.
 *
 * @param {Object} ast - The AST structure to be converted.
 * @returns {string} - A string containing the HTML representation.
 */
export function stringify(ast) {
  // Use the reduce function to transform the AST structure into an HTML string representation.
  return reduce(
    (htmlString, el) => {
      // Process each element by using the htmlStringify function to generate HTML representation.
      return htmlString + htmlStringify(RAW_EMPTY, el);
    },
    RAW_EMPTY,
    [ast]
  );
}

/**
 * Converts an AST node to its HTML string representation.
 *
 * @param {string} buffer - The current HTML string buffer.
 * @param {Object} ast - The AST node to be converted.
 * @returns {string} - Updated HTML string buffer with AST node's representation.
 */
function htmlStringify(buffer, ast) {
  switch (ast.type) {
    case 'Document':
      return reduce(htmlStringify, RAW_EMPTY, ast.children);
    case 'Text':
      // For text nodes, concatenate the content to the buffer.
      return buffer + ast.content;
    case 'Element':
      // For element nodes, construct the HTML tag with attributes and children.
      buffer +=
        '<' +
        ast.name +
        (ast.attributes ? attributesStringify(ast.attributes) : RAW_EMPTY) +
        (ast.voidElement ? '/>' : '>');
      if (ast.voidElement) {
        return buffer;
      }
      // Recursively stringify children of non-void elements.
      return buffer + reduce(htmlStringify, RAW_EMPTY, ast.children) + '</' + ast.name + '>';
    case 'Comment':
      // For comment nodes, add HTML comment syntax to the buffer.
      buffer += '<!--' + ast.content + '-->';
      return buffer;
    default:
      // Handle unknown node types by returning an empty string.
      return RAW_EMPTY;
  }
}

/**
 * Converts an object of attributes into a string representation suitable for HTML tags.
 *
 * @param {Object} attributes - The attributes object of an element.
 * @returns {string} - String representation of element attributes.
 */
function attributesStringify(attributes) {
  const attrList = [];
  each(attr => {
    // Ensure attribute value is not undefined, default to empty string if undefined.
    if (isUndefined(attr.value)) {
      attr.value = RAW_EMPTY;
    }
    // If attribute has a prefix, concatenate it to the attribute name.
    if (!isUndefined(attr.prefix)) {
      attr.name = attr.prefix + attr.name;
    }
    // If attribute has suffixes, concatenate them to the attribute name.
    if (!isUndefined(attr.suffix)) {
      each(suffix => {
        attr.name += suffix.prefix + suffix.name;
      }, attr.suffix);
    }
    // Format attribute as 'name="value"' and add to attribute list.
    push(attr.name + '="' + attr.value + '"', attrList);
  }, attributes);

  // Return attributes as a space-separated string or empty string if no attributes.
  if (!size(attrList)) {
    return RAW_EMPTY;
  }
  return RAW_WHITESPACE + join(attrList);
}
