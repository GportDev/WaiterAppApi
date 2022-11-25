## Introdução

## Passo a passo

### Configuração inicial
- [ ] Iniciar o node

```
npm i -g yarn
yarn start -y
```

- [ ] Instalar Typescript (-D)
  - [ ] Iniciar com `npx tsc --init`
- [ ] Configurar pasta de build/dist
  Arquivo tsconfig -> "outdir"
- [ ] Criar arquivo gitignore
- [ ] Instalar Linter (padrão de código)
  - [ ] EsLint + editor config (extensões)
  `npm init @eslint/config`
- [ ] Instalar Express (produção)
  - [ ] Instalar types do express (-D)
  `yarn add @types/express`
- [ ] Iniciar servidor
  - [ ] Instalar o ts-node (-D)
    Rodar o node direto no TypeScript
  - [ ] Instalar o nodemon (-D)
    Monitorar alterações no código do servidor e reiniciar o servidor
  - [ ] Adicionar script para o TsNode
    `nodemon src/index.ts`

### Conexão com banco de dados

- [ ] Subir container docker (ou iniciar mongo de outra maneira desejada)
  `docker run --name mongo -p 27017:27017 -d mongo`
- [ ] Estabelecer conexão
  - [ ] Instalar o Mongoose (Object Data Modeling) (produção)
  - [ ] Conectar
  `mongoose.connect('mongodb://servidor:porta')`
- [ ] Criar os models/Collections (tabelas)
- [ ] Estabelecer relacionamento
- [ ] Criar os casos de uso
  - [ ] Criar router no padrão REST
  - [ ] Instalar a lib multer para permitir fazer upload dentro da aplicação (pode ser feito para S3 em casos maiores, neste caso vai ser na própria máquina onde a aplicação está rodando)

## Finalização
- [ ] Criar script de start para rodar o node no build
