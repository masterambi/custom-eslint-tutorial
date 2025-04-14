import { RuleTester } from '@typescript-eslint/rule-tester';
import rule from './no-object-assign';
// Initialize RuleTester with the TypeScript parser.
const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser')
});
ruleTester.run('no-object-assign', rule, {
  // Valid code samples that should NOT trigger the rule.
  valid: [
    {
      code: 'const merged = { ...obj1, ...obj2 };'
    }
  ],
  // Invalid code samples that SHOULD trigger the rule.
  invalid: [
    {
      code: 'const merged = Object.assign({}, obj1, obj2);',
      errors: [{ messageId: 'noObjectAssign' }]
    }
  ]
});