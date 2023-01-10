const { getDocUrl } = require('../includes/getDocUrl.js');

const DEFAULT_OPTIONS = {
  maxStatements: 2,
};

const meta = {
  docs: {
    description: 'Encourage descriptive React effects.',
    category: 'Best Practices',
    recommended: true,
    uri: getDocUrl('react-descriptive-effect'),
  },
  schema: [
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        additionalHooks: {
          type: 'string',
        },
        maxStatements: {
          type: 'number',
        },
      },
    },
  ],
};

function isEffectHook(name, additional) {
  if (
    name === 'useEffect' ||
    name === 'useLayoutEffect' ||
    (additional && name.match(additional))
  ) {
    return true;
  }

  return false;
}

const formatNodeRange = (node) => `${node.range[0]}`;

function create(context) {
  /** Set of startIndexes for effects that are described by comments */
  const describedEffects = new Set();

  const sourceCode = context.getSourceCode();
  const options = {
    ...DEFAULT_OPTIONS,
    ...(context.options[0] || null),
  };

  const { additionalHooks, maxStatements } = options;

  function checkCallExpression(callExpressionNode) {
    if (!isEffectHook(callExpressionNode.callee.name, additionalHooks)) return;
    if (describedEffects.has(formatNodeRange(callExpressionNode))) {
      return;
    }

    const [callback] = callExpressionNode.arguments;

    if (callback == null) return;
    if (
      callback.type !== 'ArrowFunctionExpression' &&
      callback.type !== 'FunctionExpression'
    ) {
      return;
    }

    const { id: callbackId } = callback;

    if (callbackId == null) {
      if (
        callback.body.type === 'CallExpression' ||
        callback.body.type === 'ConditionalExpression' ||
        callback.body.type === 'LogicalExpression' ||
        (callback.body.body.length > 0 &&
          callback.body.body.length <= maxStatements)
      ) {
        return;
      }

      // arrow function ou unnamed
      context.report({
        node: callback,
        message:
          'Please describe what this effect does either by either using a named function or by adding a comment before it.',
      });
    }
  }

  return {
    ':matches(FunctionDeclaration, ArrowFunctionExpression) > BlockStatement > ExpressionStatement > CallExpression':
      checkCallExpression,
    Program() {
      const comments = sourceCode.getAllComments();

      for (const commentNode of comments) {
        const nextNode = sourceCode.getTokenAfter(commentNode);

        if (nextNode == null) continue;
        if (nextNode.type !== 'Identifier') continue;
        if (!isEffectHook(nextNode.value, additionalHooks)) continue;

        describedEffects.add(formatNodeRange(nextNode));
      }
    },
  };
}

module.exports = {
  meta,
  create,
};
