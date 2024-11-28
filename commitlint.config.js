module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', //  Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm).
        'chore', // Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.
        'ci', // Mudanças em nossos arquivos e scripts de configuração de CI
        'docs', // Inclusão ou alteração somente de arquivos de documentação.
        'feat', // São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.
        'fix', // Essencialmente definem o tratamento de correções de bugs.
        'perf', //Uma alteração de código que melhora o desempenho.
        'refactor', // Utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada.
        'revert', // Alterações que revertem um commit anterior.
        'style', // Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.
        'test', // Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD).
        'wip' // Word in progressing
      ]
    ]
  }
}
