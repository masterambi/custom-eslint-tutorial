import { TSESLint } from '@typescript-eslint/utils';
import noObjectAssign from './no-object-assign';

export const rules = {
  'no-object-assign': noObjectAssign,
} satisfies Record<string, TSESLint.RuleModule<string, Array<unknown>>>;