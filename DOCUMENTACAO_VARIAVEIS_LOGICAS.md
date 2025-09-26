# DOCUMENTAÇÃO COMPLETA - SYNAPTA TCC
## Sistema de Acompanhamento para Pacientes Autistas

### RESUMO EXECUTIVO
Aplicativo mobile desenvolvido em Cordova/PhoneGap para cuidadores e pacientes autistas. Sistema de navegação entre 7 telas principais com validação de formulários e simulação de APIs.

---

## ESTRUTURA DE PÁGINAS

### 1. TELA INICIAL (home-container)
**Função:** Ponto de entrada da aplicação
**Variáveis:** 
- `homeContainer` (display: flex/none)
- `logo-section` (margin-bottom: 60px)
- `buttons-section` (max-width: 280px)

**Lógica:** 
- Exibe logo SYNAPTA e botões de navegação principal
- Centraliza conteúdo verticalmente e horizontalmente
- Botões: "Login" e "Criar Conta"

**Dados de Saída:**
- `goToLoginMenu()` → Menu de Login
- `goToRegisterMenu()` → Menu de Cadastro

---

### 2. MENU DE LOGIN (loginMenuContainer)
**Função:** Seleção do tipo de login
**Variáveis:**
- `loginMenuContainer` (display: none/flex)
- `menu-wrapper` (max-width: 400px)

**Lógica:**
- Permite escolher entre login de cuidador ou paciente
- Diferentes métodos de autenticação

**Dados de Saída:**
- `goToLogin()` → Login Cuidador
- `goToPatientLogin()` → Login Paciente

---

### 3. MENU DE CADASTRO (registerMenuContainer)
**Função:** Seleção do tipo de cadastro
**Variáveis:**
- `registerMenuContainer` (display: none/flex)
- `menu-wrapper` (max-width: 400px)

**Lógica:**
- Permite escolher entre cadastro de cuidador ou adição de paciente

**Dados de Saída:**
- `goToRegister()` → Cadastro Cuidador
- `goToPatient()` → Cadastro Paciente

---

### 4. LOGIN CUIDADOR (loginContainer)
**Função:** Autenticação de cuidador via email e senha
**Variáveis:**
- `loginContainer` (display: none/flex)
- `loginForm` (formulário)

**Dados de Entrada:**
- `email` (string) - Email do cuidador
- `password` (string) - Senha do cuidador

**Validações:**
- Email válido (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Campos obrigatórios preenchidos

**Destino dos Dados:**
- `simulateLogin(email, password)` → API de autenticação de cuidadores
- Redirecionamento para dashboard do cuidador

---

### 5. LOGIN PACIENTE (patientLoginContainer)
**Função:** Autenticação de paciente via nome e data de nascimento
**Variáveis:**
- `patientLoginContainer` (display: none/flex)
- `patientLoginForm` (formulário)

**Dados de Entrada:**
- `patientName` (string) - Nome do paciente
- `birthDate` (date) - Data de nascimento

**Validações:**
- Campos obrigatórios preenchidos
- Formato de data válido

**Destino dos Dados:**
- `simulatePatientLogin(patientName, birthDate)` → API de autenticação de pacientes
- Redirecionamento para tela do paciente

---

### 6. CADASTRO CUIDADOR (registerContainer)
**Função:** Criação de conta de cuidador com validações
**Variáveis:**
- `registerContainer` (display: none/flex)
- `registerForm` (formulário)

**Dados de Entrada:**
- `name` (string) - Nome completo
- `email` (string) - Email
- `password` (string) - Senha
- `confirmPassword` (string) - Confirmação de senha

**Validações:**
- Email válido (regex)
- Senha mínimo 6 caracteres
- Senhas coincidem
- Campos obrigatórios preenchidos

**Destino dos Dados:**
- `simulateRegister(name, email, password)` → API de cadastro de cuidadores
- Redirecionamento para tela de login

---

### 7. CADASTRO PACIENTE (patientContainer)
**Função:** Adição de novo paciente autista ao sistema
**Variáveis:**
- `patientContainer` (display: none/flex)
- `patientForm` (formulário)

**Dados de Entrada:**
- `fullName` (string) - Nome completo
- `age` (number) - Idade (0-120)
- `birthDate` (date) - Data de nascimento
- `autismLevel` (select) - Nível de autismo (leve/moderado)
- `responsible` (string) - Nome do responsável

**Validações:**
- Idade entre 0-120 anos
- Idade confere com data de nascimento (±1 ano)
- Campos obrigatórios preenchidos

**Destino dos Dados:**
- `simulatePatientRegister(fullName, age, birthDate, autismLevel, responsible)` → API de cadastro de pacientes
- Limpeza do formulário e retorno à tela inicial

---

## VARIÁVEIS JAVASCRIPT PRINCIPAIS

### Controle de Telas
```javascript
const homeContainer = document.querySelector('.home-container');
const loginMenuContainer = document.getElementById('loginMenuContainer');
const registerMenuContainer = document.getElementById('registerMenuContainer');
const loginContainer = document.getElementById('loginContainer');
const patientLoginContainer = document.getElementById('patientLoginContainer');
const registerContainer = document.getElementById('registerContainer');
const patientContainer = document.getElementById('patientContainer');
```

### Formulários
```javascript
const loginForm = document.querySelector('.login-form');
const patientLoginForm = document.querySelector('.patient-login-form');
const registerForm = document.querySelector('.register-form');
const patientForm = document.querySelector('.patient-form');
```

### Funções de Navegação
```javascript
window.goToHome()           // Tela inicial
window.goToLoginMenu()      // Menu de login
window.goToRegisterMenu()   // Menu de cadastro
window.goToLogin()          // Login cuidador
window.goToPatientLogin()   // Login paciente
window.goToRegister()       // Cadastro cuidador
window.goToPatient()        // Cadastro paciente
```

### Funções de Validação
```javascript
isValidEmail(email)         // Validação de email
hideAllScreens()           // Oculta todas as telas
showMessage(msg, type)     // Exibe mensagens
```

### Funções de Simulação de API
```javascript
simulateLogin(email, password)                    // Login cuidador
simulatePatientLogin(patientName, birthDate)     // Login paciente
simulateRegister(name, email, password)           // Cadastro cuidador
simulatePatientRegister(fullName, age, birthDate, autismLevel, responsible) // Cadastro paciente
```

---

## SISTEMA DE CORES CSS

### Cores Principais
- **Primária:** `#00D4AA` (verde água)
- **Secundária:** `#1a4d3a` (verde escuro)
- **Acentos:** `#FF6B6B` (vermelho), `#4ECDC4` (azul água)
- **Background:** `#ffffff` com filtro de brilho 87%

### Tipografia
- **Fonte:** Inter (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700

### Responsividade
- **Mobile First Design**
- **Breakpoints:** 480px, 320px
- **Orientação landscape suportada**

---

## FLUXO DE DADOS

### 1. Navegação
```
Tela Inicial → Menu Login/Cadastro → Formulários → APIs
```

### 2. Validação
```
Input → Validação → Simulação API → Mensagem → Redirecionamento
```

### 3. Estados das Telas
```
display: none → display: flex + fade-in → processamento → resultado
```

---

## DESTINOS DAS APIS (SIMULADAS)

1. **Login Cuidador:** API de autenticação de cuidadores
2. **Login Paciente:** API de autenticação de pacientes
3. **Cadastro Cuidador:** API de cadastro de cuidadores
4. **Cadastro Paciente:** API de cadastro de pacientes

---

## OBSERVAÇÕES PARA UML

- **7 telas principais** com navegação hierárquica
- **4 formulários** com validações específicas
- **2 tipos de usuário:** Cuidador e Paciente
- **Sistema de mensagens** para feedback
- **Responsividade** para diferentes dispositivos
- **Animações** de transição entre telas
- **Validação em tempo real** dos formulários

---

**Data de Documentação:** $(date)
**Versão:** 1.0
**Desenvolvido para:** TCC - Sistema SYNAPTA

