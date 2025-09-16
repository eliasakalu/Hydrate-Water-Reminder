<script>
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize variables
            let userGoal = 2;
            let currentUser = null;
            const waterOptions = document.querySelectorAll('.water-option:not(.custom-option)');
            const customInput = document.getElementById('custom-liters');
            const setCustomBtn = document.getElementById('set-custom');
            const confirmGoalBtn = document.getElementById('confirm-goal');
            const goalModal = document.getElementById('goal-modal');
            const goalAmount = document.getElementById('goal-amount');
            const closeModalBtn = document.querySelector('.close-modal');
            const cancelGoalBtn = document.getElementById('cancel-goal');
            const saveGoalBtn = document.getElementById('save-goal');
            
            // Auth elements
            const authModal = document.getElementById('auth-modal');
            const authBtn = document.getElementById('auth-btn');
            const closeAuthModal = document.getElementById('close-auth-modal');
            const authTabs = document.querySelectorAll('.auth-tab');
            const authForms = document.querySelectorAll('.auth-form');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            const loginMessage = document.getElementById('login-message');
            const registerMessage = document.getElementById('register-message');
            const userInfo = document.getElementById('user-info');
            const userAvatar = document.getElementById('user-avatar');
            const usernameSpan = document.getElementById('username');
            const logoutBtn = document.getElementById('logout-btn');
            
            // Reminder elements
            const reminderForm = document.getElementById('reminder-form');
            const reminderMessage = document.getElementById('reminder-message');
            
            // Task manager elements
            const taskToggle = document.getElementById('task-toggle');
            const taskPanel = document.getElementById('task-panel');
            const closeTaskBtn = document.getElementById('close-task');
            const taskForm = document.getElementById('task-form');
            const taskList = document.getElementById('task-list');
            
            // Check if user is logged in (from localStorage)
            function checkAuthStatus() {
                const userData = localStorage.getItem('currentUser');
                if (userData) {
                    currentUser = JSON.parse(userData);
                    updateUIForAuth(true);
                }
            }
            
            // Update UI based on auth status
            function updateUIForAuth(isLoggedIn) {
                if (isLoggedIn) {
                    authBtn.style.display = 'none';
                    userInfo.style.display = 'flex';
                    logoutBtn.style.display = 'block';
                    usernameSpan.textContent = currentUser.name;
                    userAvatar.textContent = currentUser.name.charAt(0);
                } else {
                    authBtn.style.display = 'block';
                    userInfo.style.display = 'none';
                    logoutBtn.style.display = 'none';
                }
            }
            
            // Auth tab switching
            authTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabName = this.getAttribute('data-tab');
                    
                    // Update active tab
                    authTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show corresponding form
                    authForms.forEach(form => {
                        if (form.id === `${tabName}-form`) {
                            form.classList.add('active');
                        } else {
                            form.classList.remove('active');
                        }
                    });
                });
            });
            
            // Login form submission
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                
                // Check if user exists in localStorage
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const user = users.find(u => u.email === email && u.password === password);
                
                if (user) {
                    currentUser = user;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    updateUIForAuth(true);
                    authModal.style.display = 'none';
                    loginMessage.classList.remove('error', 'success');
                } else {
                    loginMessage.textContent = 'Invalid email or password';
                    loginMessage.classList.add('error');
                }
            });
            
            // Register form submission
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('register-name').value;
                const email = document.getElementById('register-email').value;
                const password = document.getElementById('register-password').value;
                const phone = document.getElementById('register-phone').value;
                
                // Check if user already exists
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                if (users.some(user => user.email === email)) {
                    registerMessage.textContent = 'User with this email already exists';
                    registerMessage.classList.add('error');
                    return;
                }
                
                // Create new user
                const newUser = { name, email, password, phone };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                
                // Auto login
                currentUser = newUser;
                localStorage.setItem('currentUser', JSON.stringify(newUser));
                updateUIForAuth(true);
                
                registerMessage.textContent = 'Account created successfully!';
                registerMessage.classList.remove('error');
                registerMessage.classList.add('success');
                
                setTimeout(() => {
                    authModal.style.display = 'none';
                }, 1500);
            });
            
            // Logout functionality
            logoutBtn.addEventListener('click', function() {
                localStorage.removeItem('currentUser');
                currentUser = null;
                updateUIForAuth(false);
            });
            
            // Open auth modal
            authBtn.addEventListener('click', function() {
                authModal.style.display = 'flex';
            });
            
            // Close auth modal
            closeAuthModal.addEventListener('click', function() {
                authModal.style.display = 'none';
            });
            
            // Reminder form submission
            reminderForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('reminder-email').value;
                
                if (!currentUser) {
                    reminderMessage.textContent = 'Please sign in to set reminders';
                    reminderMessage.classList.add('error');
                    return;
                }
                
                // In a real app, this would send a request to your backend
                reminderMessage.textContent = `Reminders will be sent to ${email}`;
                reminderMessage.classList.remove('error');
                reminderMessage.classList.add('success');
                
                // Clear the form
                document.getElementById('reminder-email').value = '';
            });
            
            // Set up water option selection
            waterOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove selected class from all options
                    waterOptions.forEach(opt => opt.classList.remove('selected'));
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    // Update user goal
                    userGoal = parseInt(this.getAttribute('data-liters'));
                });
            });
            
            // Set custom water amount
            setCustomBtn.addEventListener('click', function() {
                const customValue = parseInt(customInput.value);
                if (customValue && customValue > 0 && customValue <= 20) {
                    userGoal = customValue;
                    // Remove selected class from standard options
                    waterOptions.forEach(opt => opt.classList.remove('selected'));
                    alert(`Custom goal set to ${userGoal} liters`);
                } else {
                    alert('Please enter a valid number between 1 and 20');
                }
            });
            
            // Confirm goal button
            confirmGoalBtn.addEventListener('click', function() {
                if (!currentUser) {
                    alert('Please sign in to set your water goal');
                    authModal.style.display = 'flex';
                    return;
                }
                
                goalAmount.textContent = `${userGoal} Liters`;
                goalModal.style.display = 'flex';
            });
            
            // Modal controls
            closeModalBtn.addEventListener('click', function() {
                goalModal.style.display = 'none';
            });
            
            cancelGoalBtn.addEventListener('click', function() {
                goalModal.style.display = 'none';
            });
            
            saveGoalBtn.addEventListener('click', function() {
                goalModal.style.display = 'none';
                alert(`Your daily goal of ${userGoal} liters has been set! You'll receive reminders to help you stay hydrated.`);
                
                // Save goal to user data
                if (currentUser) {
                    currentUser.waterGoal = userGoal;
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    
                    // Update all users
                    const users = JSON.parse(localStorage.getItem('users') || '[]');
                    const userIndex = users.findIndex(u => u.email === currentUser.email);
                    if (userIndex !== -1) {
                        users[userIndex] = currentUser;
                        localStorage.setItem('users', JSON.stringify(users));
                    }
                }
            });
            
            // Task manager functionality
            taskToggle.addEventListener('click', function() {
                taskPanel.style.display = taskPanel.style.display === 'block' ? 'none' : 'block';
            });
            
            closeTaskBtn.addEventListener('click', function() {
                taskPanel.style.display = 'none';
            });
            
            taskForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const taskInput = this.querySelector('.task-input');
                const taskText = taskInput.value.trim();
                
                if (taskText) {
                    const taskItem = document.createElement('li');
                    taskItem.className = 'task-item';
                    taskItem.innerHTML = `
                        <span>${taskText}</span>
                        <button class="remove-task"><i class="fas fa-trash"></i></button>
                    `;
                    
                    taskList.appendChild(taskItem);
                    taskInput.value = '';
                    
                    // Add event listener to remove button
                    taskItem.querySelector('.remove-task').addEventListener('click', function() {
                        taskItem.remove();
                    });
                }
            });
            
            // Close modals if clicked outside
            window.addEventListener('click', function(e) {
                if (e.target === goalModal) {
                    goalModal.style.display = 'none';
                }
                if (e.target === authModal) {
                    authModal.style.display = 'none';
                }
            });
            
            // Initialize the app
            checkAuthStatus();
        });
    </script>