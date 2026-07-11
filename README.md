# Bella Curitiba Panificadora — Site Institucional

Site institucional da **Bella Curitiba Panificadora e Confeitaria**, padaria com produção própria localizada no bairro Boa Vista, em Curitiba/PR.

O projeto foi construído em **HTML, CSS e JavaScript puros**, sem frameworks ou dependências — basta um navegador para rodar.

## 🚀 Como visualizar

Abra o arquivo principal direto no navegador:

```
site-bella-curitiba/index.html
```

Ou sirva a pasta com qualquer servidor estático, por exemplo:

```bash
cd site-bella-curitiba
python -m http.server 8000
# http://localhost:8000
```

## 📄 Páginas

| Página | Descrição |
|---|---|
| `index.html` | Home com todas as seções institucionais |
| `vagas.html` | Página Trabalhe Conosco, com as vagas abertas e detalhes de cada função |

## ✨ Seções e funcionalidades da home

- **Hero** com vídeo de fundo (mídia definitiva pendente) e chamadas para WhatsApp e localização;
- **Sobre** — apresentação da padaria com foto da fachada;
- **Produção artesanal** — 4 cards com carrossel de fotos cada (pães integrais e broas, fermentação natural, produtos de balcão e confeitaria), com setas, indicadores, loop contínuo nas duas direções e troca por arrasto (touch) no mobile;
- **Ambiente** — galeria de fotos, com carrossel duplo no card da fachada;
- **Depoimentos** — 9 avaliações reais do Google organizadas em carrossel (3 slides de 3 cards no desktop; 1 card por vez com swipe no mobile), cada card linkando para a avaliação original;
- **Trabalhe conosco** — chamada para a página de vagas (no mobile, o botão do header leva direto a essa seção);
- **Footer** — endereço, horários de funcionamento e redes sociais.

Todo o layout é responsivo (breakpoints em 1200px, 992px e 768px).

## 🗂️ Estrutura do repositório

```
├── site-bella-curitiba/        ← SITE FINAL (HTML, CSS, JS e assets otimizados)
│   ├── index.html
│   ├── vagas.html
│   ├── style.css
│   ├── script.js
│   └── assets/                 (fotos, logos e ícones)
├── backup-imagens-originais/   Originais em alta resolução das fotos otimizadas
├── 01-identidade visual/       Logos e materiais de marca
├── 02-referencias/ … 08-entrega-cliente/   Etapas de planejamento do projeto
├── materiais luciano/          Materiais enviados pelo cliente
└── *.md                        Briefings, conteúdo e documentação de apoio
```

## 🖼️ Otimização de imagens

As fotos do site passam por um pipeline de otimização: redimensionamento para no máximo 1600px, compressão JPEG calibrada (qualidade 78–92 conforme o tipo de foto) e correção de orientação EXIF. Os arquivos originais da câmera ficam preservados em `backup-imagens-originais/`, espelhando a estrutura de pastas dos assets.

## ⏳ Pendências conhecidas

- Vídeo/poster do hero (`assets/videos/hero-placeholder.mp4`) ainda não existe — aguardando material real de produção;
- Fotos do ambiente interno (interior, balcão e vitrine) são placeholders aguardando as fotos definitivas;
- Link oficial do WhatsApp a confirmar (botões marcados com `data-status`);
- Texto definitivo da seção Sobre a confirmar com o cliente.
