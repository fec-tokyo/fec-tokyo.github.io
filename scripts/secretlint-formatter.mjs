// 標準JSON formatterはファイル本文も含むため、履歴検査で出力が巨大になる。
// 秘密の実値を子プロセスの出力に含めず、診断に必要な項目だけ返す。
export default function format(results) {
  return JSON.stringify(results.map(({ filePath, messages }) => ({
    filePath,
    messages: messages.map(({ line, ruleId }) => ({ line, ruleId })),
  })));
}
