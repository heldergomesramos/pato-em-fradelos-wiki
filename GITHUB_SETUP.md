# 📋 Instruções para Fazer Push para GitHub

## ✅ Já está pronto:
- ✓ Ficheiro README.md com documentação completa
- ✓ Ficheiro .gitignore configurado
- ✓ Toda a estrutura de código

## 🚀 Próximos Passos:

### 1️⃣ **Instalar Git** (se ainda não tiver)
Se ainda não tens Git instalado:
- Vai a: https://git-scm.com/download/win
- Descarrega e instala a versão para Windows
- Reinicia o PowerShell após instalar

### 2️⃣ **Configurar Git** (primeira vez)
```powershell
git config --global user.name "O Teu Nome"
git config --global user.email "o-teu-email@example.com"
```

### 3️⃣ **Criar Repositório no GitHub**
- Vai a: https://github.com/new
- Nome do repositório: `pato-em-fradelos` (ou outro que preferires)
- Descrição: "2D Platformer + Website oficial do Projecto ORBIS"
- Privado ou Público (à tua escolha)
- **NÃO** inicializes com README, .gitignore ou licença (já temos)
- Clica em "Create repository"

### 4️⃣ **Executar estes comandos NO PowerShell**
Copia e cola NO PowerShell (um de cada vez):

```powershell
# Entra na pasta do projeto
cd "c:\Users\Diogo\Desktop\Pato em Fradelos"

# Inicializa o git
git init

# Adds todos os ficheiros
git add .

# Faz o commit inicial
git commit -m "Initial commit: Website e estrutura do Projecto ORBIS"

# Adiciona o repositório remoto (substitui as partes entre <>)
git branch -M main
git remote add origin https://github.com/<O-TEU-USERNAME>/pato-em-fradelos.git

# Faz o push para GitHub
git push -u origin main
```

### 5️⃣ **Depois disso**
Quando fizeres mudanças no futuro:

```powershell
cd "c:\Users\Diogo\Desktop\Pato em Fradelos"
git add .
git commit -m "Descrição da mudança"
git push
```

---

## 🆘 Se tiveres problemas:

**"Git não é reconhecido"**
→ Reinstala Git e reinicia o PowerShell

**"Permission denied (publickey)"**
→ Configura SSH Key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

**"Repository not found"**
→ Verifica se a URL está correcta no comando `git remote add origin`

---

## 📍 Resultado Final
Depois de fazer o push, vais ver todo o código em:
```
https://github.com/<O-TEU-USERNAME>/pato-em-fradelos
```

✨ **Pronto! O teu projeto estará no GitHub!**
