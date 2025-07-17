module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert',
        'ci',
        'perf',
        'asdasasdas'
      ] // <-- 添加你自定义的
    ]
  }
}
