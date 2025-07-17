'use strict'
module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat: A new feature'
    },
    {
      value: 'fix',
      name: 'fix: A bug fix'
    },
    {
      value: 'docs',
      name: 'docs: Documentation only changes'
    },
    {
      value: 'style',
      name: 'style: Changes that do not affect the meaning of the code (white-space, formatting, etc)'
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name: 'perf: A code change that improves performance'
    },
    {
      value: 'test',
      name: 'test: Adding missing tests or correcting existing tests'
    },
    {
      value: 'chore',
      name: 'chore: Changes to the build process or auxiliary tools'
    },
    {
      value: 'revert',
      name: 'revert: Revert to a previous commit'
    }
  ],
  scopes: [
    { name: 'leetcode' },
    { name: 'javascript' },
    { name: 'typescript' },
    { name: 'vue' },
    { name: 'node' },
    { name: 'css' },
    { name: 'other' },
    { name: 'docs' },
    { name: 'test' }
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope:
      'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer:
      '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit:
      '确定提交说明?(yes/no)'
  },
  allowCustomScopes: true,
  allowBreakingChanges: [
    '特性',
    '修复'
  ],
  // limit subject length
  subjectLimit: 100
}
