# Dra. Thais Maróstica

Site editorial baseado no template premium-vendas, personalizado para Harmonização Orofacial e Endodontia em São José do Rio Preto.

## Desenvolvimento

Requer Node.js 20.9 ou superior e npm.

```sh
npm ci
npm run dev
```

## Verificação e produção

```sh
npm run typecheck
npm run build
npm start
```

## Vercel

Importe este repositório na Vercel. Framework: **Next.js**. Diretório raiz: **./**. A configuração padrão executa `npm run build` e reconhece a saída automaticamente. Não há banco de dados, chaves ou variáveis obrigatórias.

O endereço de produção fornecido pela Vercel é usado nos metadados. Para domínio próprio, preencha `site.seo.url` em `data/site.ts`.

## Conteúdo

`data/site.ts` centraliza nome, CRO, Instagram, telefone, WhatsApp, descrição e registros de resultados. Contato informado na referência: **+55 (17) 99149-4655**. CRO-SP **120.169**. O indicador de mais de 10 mil pacientes e as especialidades vêm da referência fornecida. Não foram inventados depoimentos, endereço de rua, formação ou tempo de experiência.

Os arquivos em `public/images` vêm dos anexos fornecidos para este projeto, convertidos para WebP. Os comparativos mantêm o registro completo e permitem ampliar ou comparar as metades, respeitando a orientação de cada fotografia. Fotografias clínicas mostram resultados individuais.

O favicon TM está em `app/icon.svg` e `app/favicon.ico`; o ícone Apple está em `app/apple-icon.png`. Os retratos de compartilhamento foram substituídos por uma fotografia real da Dra. Thais. Fontes locais e licenças permanecem em `public/fonts`.

O projeto contém apenas este site e está preparado para GitHub e Vercel.
