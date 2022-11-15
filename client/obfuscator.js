module.exports = {
  // 压缩代码
  compact: true,
  sourceMap: true,
  // 是否启用控制流扁平化(会降低运行速度) 性能影响非常大！
  controlFlowFlattening: false,
  // 应用概率;在较大的代码库中，建议降低此值，因为大量的控制流转换可能会增加代码的大小并降低代码的速度。
  controlFlowFlatteningThreshold: 0,
  // 随机的死代码块(增加了混淆代码的大小)
  deadCodeInjection: false,
  // 死代码块的影响概率
  deadCodeInjectionThreshold: 0.5,
  // 此选项几乎不可能使用开发者工具的控制台选项卡
  // debugProtection: true,
  // 如果选中，则会在“控制台”选项卡上使用间隔强制调试模式，从而更难使用“开发人员工具”的其他功能。
  // debugProtectionInterval: 3,
  // 通过用空函数替换它们来禁用console.log，console.info，console.error和console.warn。这使得调试器的使用更加困难。
  disableConsoleOutput: false,
  // 标识符的混淆方式 hexadecimal(十六进制) mangled(短标识符)
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  // 是否启用全局变量和函数名称的混淆
  renameGlobals: false,
  // 通过固定和随机（在代码混淆时生成）的位置移动数组。这使得将删除的字符串的顺序与其原始位置相匹配变得更加困难。如果原始源代码不小，建议使用此选项，因为辅助函数可以引起注意。
  rotateStringArray: true,
  // 混淆后的代码,不能使用代码美化,同时需要配置 cpmpat:true;
  selfDefending: true,
  shuffleStringArray: true,
  splitStrings: true,
  splitStringsChunkLength: 5,
  // 删除字符串文字并将它们放在一个特殊的数组中 有一定的性能开销
  stringArray: false,
  stringArrayEncoding: ['rc4', 'base64'],
  stringArrayThreshold: 0.75,
  transformObjectKeys: true,
  // 允许启用/禁用字符串转换为unicode转义序列。Unicode转义序列大大增加了代码大小，并且可以轻松地将字符串恢复为原始视图。建议仅对小型源代码启用此选项。
  unicodeEscapeSequence: false,
};
