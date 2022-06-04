// 프로젝트의 변동이 있을 때, 해당 파일에서 lint-staged를 수정하게 됩니다.
module.exports = {
  '*.+(ts|tsx)': [() => 'yarn tsc -p tsconfig.json --noEmit'],
  'packages/study-books/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/study-books/tsconfig.json --noEmit',
  ],
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache', 'prettier --write'],
};
