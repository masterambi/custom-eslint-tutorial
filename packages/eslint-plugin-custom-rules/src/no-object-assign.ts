import { TSESLint, TSESTree } from '@typescript-eslint/utils';

type MessageIds = 'noObjectAssign';

const noObjectAssignRule: TSESLint.RuleModule<MessageIds> = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow using Object.assign in favor of object spread syntax',
      recommended: "recommended"
    },
    messages: {
      noObjectAssign: 'Prefer object spread syntax over Object.assign()',
    },
    schema: []
  },
  defaultOptions: [],
  create: (context) => {
    return {
      CallExpression: (node: TSESTree.CallExpression) => {
        // Check if the call expression is Object.assign(...)
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.type === 'Identifier' &&
          node.callee.object.name === 'Object' &&
          node.callee.property.type === 'Identifier' &&
          node.callee.property.name === 'assign'
        ) {
          context.report({
            node,
            messageId: 'noObjectAssign',
          });
        }

        return
      }
    };
  },
};

export default noObjectAssignRule;