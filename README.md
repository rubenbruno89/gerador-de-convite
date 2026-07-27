# 📱 Gerador de Convites para WhatsApp

> Crie convites profissionais para eventos, concursos e processos seletivos em segundos. Texto formatado pronto para **copiar e colar no WhatsApp**!

🔗 **Acesse agora:** [https://rubenbruno89.github.io/gerador-de-convite/](https://rubenbruno89.github.io/gerador-de-convite/)

---

## ⚠️ Aviso Importante

> **Este gerador NÃO cria arquivos PDF ou imagens.**  
> Ele gera um **texto formatado** (com negrito, emojis e quebras de linha) que você copia com um clique e cola diretamente no WhatsApp. A formatação é preservada automaticamente pelo aplicativo!

---

## ✨ Funcionalidades

- ✅ **Preenchimento rápido**: Formulário intuitivo com todos os campos essenciais
- ✅ **Pré-visualização em tempo real**: Veja o convite enquanto digita
- ✅ **Cópia para WhatsApp com 1 clique**: Texto formatado com markdown do WhatsApp (`*negrito*`, `_itálico_`, emojis)
- ✅ **Design 100% responsivo**: Funciona perfeitamente no celular, tablet e desktop
- ✅ **Botão flutuante no mobile**: Fácil acesso com o polegar, estilo apps nativos
- ✅ **Salvamento automático**: Seus dados ficam salvos no navegador (`localStorage`)
- ✅ **Leve e offline-first**: Sem backend, sem login, funciona sem internet após o primeiro acesso

---

## 🚀 Como Usar

### Em qualquer dispositivo:
1. Acesse: [https://rubenbruno89.github.io/gerador-de-convite/](https://rubenbruno89.github.io/gerador-de-convite/)
2. Preencha os dados do evento no formulário
3. Confira a pré-visualização ao lado (ou abaixo, no mobile)
4. Clique no botão verde **"Copiar para WhatsApp"** 🟢
5. Abra o WhatsApp e cole (`Ctrl+V` no PC ou segure e toque em "Colar" no celular)
6. Pronto! O texto chegará formatado para o destinatário

### Exemplo do texto gerado:
```text
📢 *CONVITE OFICIAL* 📢
_Processo Seletivo 2024_

📍 *Local:* Escola Estadual X
👤 *Coordenação:* Prof. João Silva
🗺️ *Endereço:* Rua das Flores, 123 - Centro
📅 *Data:* 15 e 16 de Outubro de 2024
⏰ *Horário:* Chegada 07:30 | Término 12:00

📝 *Detalhes da Função:*
Trazer documento de identidade original com foto.

🎒 *Itens Necessários:*
• Relógio analógico
• Caneta preta transparente
• Calça jeans ou preta
• Camisa/blusa branca
• Sapatos confortáveis e silenciosos

⚠️ *Regras de Conduta:*
• Proibida a divulgação em redes sociais.
• Telefones permanecerão desligados e guardados.
• Não é permitido sair após o ingresso.

🔗 *Link de Inscrição:*
https://exemplo.com/inscricao

_Documento gerado automaticamente._
```

---

## 📋 Campos Disponíveis

| Campo | Obrigatório | Exemplo |
|-------|-------------|---------|
| **Nome do Evento** | ✅ | `Processo Seletivo 2024` |
| **Local** | ✅ | `Escola Estadual X` |
| **Coordenação** | ✅ | `Prof. João Silva` |
| **Endereço** | ✅ | `Rua das Flores, 123 - Centro` |
| **Data(s)** | ✅ | `15 e 16 de Outubro` |
| **Horário de Chegada** | ✅ | `07:30` |
| **Horário de Término** | ✅ | `12:00` |
| **Detalhes da Função** | ❌ | `Trazer documento original` |
| **Observações** | ❌ | `Não haverá segunda chamada` |
| **Link de Inscrição** | ❌ | `https://...` |

> 💡 **Itens Necessários** e **Regras de Conduta** já vêm pré-configurados com o padrão para eventos formais.

---

## 🛠️ Tecnologias

- **HTML5** + **CSS3** (Tailwind CSS via CDN)
- **Vue.js 3** (via CDN) para reatividade
- **JavaScript Vanilla** para lógica de cópia (`navigator.clipboard`)
- **Google Fonts** (Inter) para tipografia
- **100% estático**: Sem backend, sem banco de dados, sem configurações

---

## 🔒 Privacidade

- ✅ Nenhum dado é enviado para servidores externos
- ✅ Tudo roda no seu navegador (client-side)
- ✅ Salvamento local via `localStorage` do seu dispositivo
- ✅ Use o botão "Limpar" para apagar seus dados rapidamente

---

## 🌐 Hospedar sua própria versão

Quer usar com sua marca ou personalizar? É grátis e fácil:

1. Faça fork deste repositório ou crie um novo no GitHub
2. Suba o arquivo `index.html`
3. Vá em **Settings > Pages**
4. Em "Source", selecione a branch `main` e pasta `/ (root)`
5. Salve e aguarde ~1 minuto
6. Seu link estará em: `https://SEU_USUARIO.github.io/NOME_DO_REPO/`

---

## 🤝 Contribuições

Sugestões são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b feature/minha-melhoria`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/minha-melhoria`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Sinta-se à vontade para usar, modificar e distribuir.

---

## 👨‍💻 Desenvolvido por

**Rubens Bruno**  
🔗 [GitHub](https://github.com/rubenbruno89)  
🌐 [Demo](https://rubenbruno89.github.io/gerador-de-convite/)

---

> 💬 **Feedback**: Encontrou algum problema ou tem uma ideia de melhoria? Abra uma issue neste repositório!

---

<p align="center">
  <sub>Feito com ❤️ para facilitar a comunicação de eventos e processos seletivos via WhatsApp</sub>
</p>
