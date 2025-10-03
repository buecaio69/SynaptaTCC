// Controle de navegação entre telas
document.addEventListener('DOMContentLoaded', function() {
    // Elementos das telas
    const homeContainer = document.querySelector('.home-container');
    const loginMenuContainer = document.getElementById('loginMenuContainer');
    const registerMenuContainer = document.getElementById('registerMenuContainer');
    const loginContainer = document.getElementById('loginContainer');
    const patientLoginContainer = document.getElementById('patientLoginContainer');
    const registerContainer = document.getElementById('registerContainer');
    const patientContainer = document.getElementById('patientContainer');
    
    // Formulários
    const loginForm = document.querySelector('.login-form');
    const patientLoginForm = document.querySelector('.patient-login-form');
    const registerForm = document.querySelector('.register-form');
    const patientForm = document.querySelector('.patient-form');
    
    // Função para mostrar tela inicial
    window.goToHome = function() {
        hideAllScreens();
        homeContainer.style.display = 'flex';
        homeContainer.classList.add('fade-in');
    };
    
    // Função para mostrar menu de login
    window.goToLoginMenu = function() {
        hideAllScreens();
        loginMenuContainer.style.display = 'flex';
        loginMenuContainer.classList.add('fade-in');
    };
    
    // Função para mostrar menu de cadastro
    window.goToRegisterMenu = function() {
        hideAllScreens();
        registerMenuContainer.style.display = 'flex';
        registerMenuContainer.classList.add('fade-in');
    };
    
    // Função para mostrar tela de login do cuidador
    window.goToLogin = function() {
        hideAllScreens();
        loginContainer.style.display = 'flex';
        loginContainer.classList.add('fade-in');
    };
    
    // Função para mostrar tela de login do paciente
    window.goToPatientLogin = function() {
        hideAllScreens();
        patientLoginContainer.style.display = 'flex';
        patientLoginContainer.classList.add('fade-in');
    };
    
    // Função para mostrar tela de cadastro
    window.goToRegister = function() {
        hideAllScreens();
        registerContainer.style.display = 'flex';
        registerContainer.classList.add('fade-in');
    };
    
    // Função para mostrar tela de adicionar paciente
    window.goToPatient = function() {
        hideAllScreens();
        patientContainer.style.display = 'flex';
        patientContainer.classList.add('fade-in');
    };
    
    // Função para mostrar tela de recuperação de senha
    window.goToForgotPassword = function() {
        hideAllScreens();
        const forgotPasswordContainer = document.getElementById('forgotPasswordContainer');
        forgotPasswordContainer.style.display = 'flex';
        forgotPasswordContainer.classList.add('fade-in');
    };
    
    // Função para esconder todas as telas
    function hideAllScreens() {
        homeContainer.style.display = 'none';
        loginMenuContainer.style.display = 'none';
        registerMenuContainer.style.display = 'none';
        loginContainer.style.display = 'none';
        patientLoginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
        patientContainer.style.display = 'none';
        
        // Esconder container de recuperação de senha
        const forgotPasswordContainer = document.getElementById('forgotPasswordContainer');
        if (forgotPasswordContainer) {
            forgotPasswordContainer.style.display = 'none';
        }
        
        // Remover classes de animação
        homeContainer.classList.remove('fade-in', 'fade-out');
        loginMenuContainer.classList.remove('fade-in', 'fade-out');
        registerMenuContainer.classList.remove('fade-in', 'fade-out');
        loginContainer.classList.remove('fade-in', 'fade-out');
        patientLoginContainer.classList.remove('fade-in', 'fade-out');
        registerContainer.classList.remove('fade-in', 'fade-out');
        patientContainer.classList.remove('fade-in', 'fade-out');
        
        if (forgotPasswordContainer) {
            forgotPasswordContainer.classList.remove('fade-in', 'fade-out');
        }
    }
    
    // Validação do formulário de login do cuidador
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showMessage('Por favor, preencha todos os campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Por favor, insira um email válido', 'error');
                return;
            }
            
            // Simular login
            simulateLogin(email, password);
        });
    }
    
    // Validação do formulário de login do paciente
    if (patientLoginForm) {
        patientLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const patientName = this.querySelector('input[type="text"]').value;
            const birthDate = this.querySelector('input[type="date"]').value;
            
            if (!patientName || !birthDate) {
                showMessage('Por favor, preencha todos os campos', 'error');
                return;
            }
            
            // Simular login do paciente
            simulatePatientLogin(patientName, birthDate);
        });
    }
    
    // Validação do formulário de cadastro
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelectorAll('input[type="password"]')[0].value;
            const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
            
            if (!name || !email || !password || !confirmPassword) {
                showMessage('Por favor, preencha todos os campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Por favor, insira um email válido', 'error');
                return;
            }
            
            if (password.length < 6) {
                showMessage('A senha deve ter pelo menos 6 caracteres', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showMessage('As senhas não coincidem', 'error');
                return;
            }
            
            // Simular cadastro
            simulateRegister(name, email, password);
        });
    }
    
    // Validação do formulário de adicionar paciente
    if (patientForm) {
        patientForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = this.querySelector('input[type="text"]').value;
            const age = this.querySelector('input[type="number"]').value;
            const birthDate = this.querySelector('input[type="date"]').value;
            const autismLevel = this.querySelector('select').value;
            const responsible = this.querySelectorAll('input[type="text"]')[1].value;
            
            if (!fullName || !age || !birthDate || !autismLevel || !responsible) {
                showMessage('Por favor, preencha todos os campos', 'error');
                return;
            }
            
            if (age < 0 || age > 120) {
                showMessage('A idade deve estar entre 0 e 120 anos', 'error');
                return;
            }
            
            // Validar data de nascimento
            const today = new Date();
            const birth = new Date(birthDate);
            const calculatedAge = today.getFullYear() - birth.getFullYear();
            
            if (Math.abs(calculatedAge - parseInt(age)) > 1) {
                showMessage('A idade não confere com a data de nascimento', 'error');
                return;
            }
            
            // Simular cadastro de paciente
            simulatePatientRegister(fullName, age, birthDate, autismLevel, responsible);
        });
    }
    
    // Validação do formulário de recuperação de senha
    const forgotPasswordForm = document.querySelector('.forgot-password-form');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email) {
                showMessage('Por favor, digite seu email', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Por favor, insira um email válido', 'error');
                return;
            }
            
            // Simular envio de email de recuperação
            simulateForgotPassword(email);
        });
    }
    
    // Função para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Função para simular login do cuidador
    function simulateLogin(email, password) {
        const submitBtn = loginForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Entrando...';
        submitBtn.disabled = true;
        
        // Simular requisição
        setTimeout(() => {
            showMessage('Login do cuidador realizado com sucesso!', 'success');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Aqui você pode redirecionar para a tela principal do app
            // window.location.href = 'dashboard.html';
        }, 2000);
    }
    
    // Função para simular login do paciente
    function simulatePatientLogin(patientName, birthDate) {
        const submitBtn = patientLoginForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Entrando...';
        submitBtn.disabled = true;
        
        // Simular requisição
        setTimeout(() => {
            showMessage(`Bem-vindo, ${patientName}!`, 'success');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Aqui você pode redirecionar para a tela do paciente
            // window.location.href = 'patient-dashboard.html';
        }, 2000);
    }
    
    // Função para simular cadastro
    function simulateRegister(name, email, password) {
        const submitBtn = registerForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Criando conta...';
        submitBtn.disabled = true;
        
        // Simular requisição
        setTimeout(() => {
            showMessage('Conta criada com sucesso!', 'success');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Voltar para tela de login
            setTimeout(() => {
                goToLogin();
            }, 1500);
        }, 2000);
    }
    
    // Função para simular cadastro de paciente
    function simulatePatientRegister(fullName, age, birthDate, autismLevel, responsible) {
        const submitBtn = patientForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Adicionando paciente...';
        submitBtn.disabled = true;
        
        // Simular requisição
        setTimeout(() => {
            showMessage('Paciente adicionado com sucesso!', 'success');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Limpar formulário
            patientForm.reset();
            
            // Voltar para tela inicial
            setTimeout(() => {
                goToHome();
            }, 1500);
        }, 2000);
    }
    
    // Função para simular recuperação de senha
    function simulateForgotPassword(email) {
        const submitBtn = forgotPasswordForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simular requisição
        setTimeout(() => {
            showMessage('Email de recuperação enviado com sucesso!', 'success');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Limpar formulário
            forgotPasswordForm.reset();
            
            // Voltar para tela de login
            setTimeout(() => {
                goToLogin();
            }, 1500);
        }, 2000);
    }
    
    // Função para mostrar mensagens
    function showMessage(message, type) {
        // Remover mensagem anterior se existir
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Criar nova mensagem
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        
        // Estilos da mensagem
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#00D4AA' : '#e74c3c'};
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            animation: slideDown 0.3s ease-out;
        `;
        
        document.body.appendChild(messageDiv);
        
        // tira mensagem após 3 segundos
        setTimeout(() => {
            messageDiv.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }, 3000);
    }
    
    // Adicionar estilos CSS para animações das mensagens
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Adicionar efeitos de hover nos botões
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Adicionar efeitos de focus nos inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Suporte para teclado (ESC para voltar)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (loginContainer.style.display === 'flex' || registerContainer.style.display === 'flex') {
                goToHome();
            }
        }
    });
    
    // Suporte para gestos touch (swipe para voltar)
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        if (!startX || !startY) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Verificar se é um swipe da direita para esquerda (voltar)
        if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50 && Math.abs(diffX) > 100) {
            if (loginContainer.style.display === 'flex' || registerContainer.style.display === 'flex') {
                goToHome();
            }
        }
        
        startX = 0;
        startY = 0;
    });
});