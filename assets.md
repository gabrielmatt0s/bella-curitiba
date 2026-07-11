# ASSETS.md — Bella Curitiba Panificadora

## 1. Objetivo deste arquivo

Este documento organiza os materiais visuais recebidos da Bella Curitiba Panificadora e define como cada arquivo deve ser usado no projeto do site.

A função deste arquivo é evitar confusão entre logos, aplicações, referências visuais e arquivos finais utilizados no desenvolvimento.

---

## 2. Manual de identidade visual

### Arquivo

`01-identidade-visual/01-manual/manual-identidade-visual-bella-curitiba.pdf`

### Uso

Este é o documento principal de referência da marca.

Deve ser consultado para:

- Cores oficiais
- Tipografia
- Aplicação correta da logo
- Área de proteção
- Redução máxima
- Usos incorretos
- Aplicação sobre fundos claros, escuros e imagens

---

## 3. Logos

### Logo principal

Arquivo:

`01-identidade-visual/02-logos/logo-principal-bella-curitiba.pdf`

Uso recomendado:

- Header do site
- Seções com fundo branco
- Materiais institucionais
- Apresentação principal da marca

Regra:

Usar preferencialmente em fundo branco ou fundo cinza muito claro.

---

### Logo para fundo escuro

Arquivo:

`01-identidade-visual/02-logos/logo-fundo-escuro-bella-curitiba.pdf`

Uso recomendado:

- Footer
- Seções com fundo azul petróleo
- Seções com fundo marrom
- Imagens com overlay escuro
- Banners internos

Regra:

Usar quando a logo colorida perder contraste ou quando o fundo não for branco/cinza claro.

---

## 4. Aplicações visuais recebidas

### Aplicação em sacola/papel

Arquivo:

`01-identidade-visual/03-aplicacoes/aplicacao-sacola-pao-bella-curitiba.pdf`

Uso:

Referência visual para entender como a marca se comporta em materiais físicos, principalmente com uso de padrão gráfico e composição institucional.

Não usar como logo principal do site.

---

### Imagem de aplicação 01

Arquivo:

`01-identidade-visual/03-aplicacoes/aplicacao-identidade-bella-curitiba-01.jpeg`

Uso:

Referência visual da identidade aplicada.

Pode ajudar na criação de fundos, padrões e linguagem visual do site.

---

### Imagem de aplicação 02

Arquivo:

`01-identidade-visual/03-aplicacoes/aplicacao-identidade-bella-curitiba-02.jpeg`

Uso:

Referência visual da identidade aplicada.

Pode ajudar na criação de fundos, padrões e linguagem visual do site.

---

## 5. Fontes

Pasta:

`01-identidade-visual/04-fontes/`

Fontes citadas no manual:

- Cheva Display Regular
- Montserrat Bold

Status:

As fontes foram citadas no manual, mas os arquivos de fonte ainda não foram recebidos.

Regra:

Não usar arquivos de fonte não recebidos oficialmente.

Caso a fonte Cheva Display não esteja disponível, usar uma alternativa visual próxima somente nos títulos, sem tentar recriar a logo em texto.

---

## 6. Cores oficiais

```css
:root {
  --color-primary: #003054;
  --color-secondary: #89490f;
  --color-white: #ffffff;
  --color-light-gray: #f5f5f5;
  --color-text-dark: #1f1f1f;
  --color-text-muted: #666666;
}