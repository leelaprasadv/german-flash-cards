class FlashCardApp {
    constructor() {
        this.currentIndex = 0;
        this.currentMode = 'de-en'; // 'de-en' or 'en-de'
        this.isFlipped = false;
        this.data = shuffleArray(flashcardsData); // Shuffle the data on initialization
        this.currentPage = 'flashcards'; // 'flashcards', 'instructions', 'about'
        
        this.initializeElements();
        this.setupEventListeners();
        this.updateCard();
        this.updateProgress();
        this.setupCopyright();
        
        // Touch/swipe support
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.setupTouchEvents();
    }
    
    initializeElements() {
        this.flashcard = document.getElementById('flashcard');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.flipBtn = document.getElementById('flipBtn');
        this.modeButtons = document.querySelectorAll('.mode-btn');
        this.progressFill = document.querySelector('.progress-fill');
        this.progressText = document.querySelector('.progress-text');
        
        // Menu elements
        this.hamburgerBtn = document.getElementById('hamburgerBtn');
        this.sideMenu = document.getElementById('sideMenu');
        this.closeMenuBtn = document.getElementById('closeMenuBtn');
        this.menuOverlay = document.getElementById('menuOverlay');
        this.menuItems = document.querySelectorAll('.menu-item');
        
        // Validate menu elements exist
        if (!this.hamburgerBtn) console.error('Hamburger button not found');
        if (!this.sideMenu) console.error('Side menu not found');
        if (!this.closeMenuBtn) console.error('Close menu button not found');
        if (!this.menuOverlay) console.error('Menu overlay not found');
        if (this.menuItems.length === 0) console.error('Menu items not found');
        
        // Page elements
        this.pages = {
            flashcards: document.querySelector('.app'),
            instructions: document.getElementById('instructionsPage'),
            legend: document.getElementById('legendPage'),
            maskulin: document.getElementById('maskulinPage'),
            feminin: document.getElementById('femininPage'),
            neutrum: document.getElementById('neutrumPage'),
            about: document.getElementById('aboutPage')
        };
    }
    
    setupEventListeners() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousCard());
        this.nextBtn.addEventListener('click', () => this.nextCard());
        this.flipBtn.addEventListener('click', () => this.flipCard());
        
        // Card click to flip
        this.flashcard.addEventListener('click', () => this.flipCard());
        
        // Mode switcher
        this.modeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.switchMode(e.target.dataset.mode));
        });
        
        // Menu controls
        if (this.hamburgerBtn) {
            this.hamburgerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMenu();
            });
        }
        
        if (this.closeMenuBtn) {
            this.closeMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.closeMenu();
            });
        }
        
        if (this.menuOverlay) {
            this.menuOverlay.addEventListener('click', (e) => {
                this.closeMenu();
            });
        }
        
        // Menu navigation
        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.dataset.page;
                
                // Handle submenu toggle
                if (item.classList.contains('menu-toggle')) {
                    this.toggleSubmenu(item);
                } else {
                    this.navigateToPage(page);
                }
            });
        });
        
        // Back button navigation
        const backButtons = document.querySelectorAll('.back-btn');
        backButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.dataset.page;
                this.navigateToPage(page);
            });
        });
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Prevent context menu on long press for mobile
        this.flashcard.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    setupCopyright() {
        // CENTRALIZED COPYRIGHT TEXT - Dynamic year based on current date
        const currentYear = new Date().getFullYear();
        const copyrightText = `Built by LeelaPrasad V © ${currentYear} (MIT License)`;
        
        // Find all existing copyright footer elements and update them
        const copyrightFooters = document.querySelectorAll('.copyright-footer');
        copyrightFooters.forEach(footer => {
            footer.textContent = copyrightText;
        });
        
        // Also add copyright to any pages that don't have it
        const pages = document.querySelectorAll('.page-content, .app');
        pages.forEach(page => {
            // Check if this page already has a copyright footer
            if (!page.querySelector('.copyright-footer')) {
                const copyrightDiv = document.createElement('div');
                copyrightDiv.className = 'copyright-footer';
                copyrightDiv.textContent = copyrightText;
                page.appendChild(copyrightDiv);
            }
        });
    }

    setupTouchEvents() {
        this.flashcard.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.flashcard.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });
    }
    
    handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = this.touchStartX - this.touchEndX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe left - next card
                this.nextCard();
            } else {
                // Swipe right - previous card
                this.previousCard();
            }
        }
    }
    
    handleKeyPress(e) {
        // If menu is open, handle menu-specific keys
        if (this.sideMenu.classList.contains('open')) {
            if (e.key === 'Escape') {
                e.preventDefault();
                this.closeMenu();
            }
            return; // Don't handle other keys when menu is open
        }
        
        // If not on flashcards page, don't handle card controls
        if (this.currentPage !== 'flashcards') {
            if (e.key === 'Escape') {
                e.preventDefault();
                this.navigateToPage('flashcards');
            }
            return;
        }
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.previousCard();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextCard();
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                this.flipCard();
                break;
            case 'Escape':
                if (this.isFlipped) {
                    this.flipCard();
                }
                break;
        }
    }
    
    switchMode(mode) {
        if (mode === this.currentMode) return;
        
        this.currentMode = mode;
        this.isFlipped = false;
        
        // Update active button
        this.modeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
        
        // Reset card state
        this.flashcard.classList.remove('flipped');
        
        // Add transition animation
        this.flashcard.style.opacity = '0';
        this.flashcard.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            this.updateCard();
            this.flashcard.style.opacity = '1';
            this.flashcard.style.transform = 'scale(1)';
        }, 200);
    }
    
    previousCard() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.changeCard('left');
        }
    }
    
    nextCard() {
        if (this.currentIndex < this.data.length - 1) {
            this.currentIndex++;
            this.changeCard('right');
        }
    }
    
    changeCard(direction) {
        this.isFlipped = false;
        this.flashcard.classList.remove('flipped');
        
        // Wait for flip animation to complete (reduced timing)
        setTimeout(() => {
            // Hide card completely during content update
            this.flashcard.style.opacity = '0';
            this.flashcard.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                // Update card content while completely hidden
                this.updateCard();
                
                // Show card with new content
                this.flashcard.style.opacity = '1';
                this.flashcard.style.transform = 'scale(1)';
                
                // Add slide animation
                const animationClass = direction === 'left' ? 'slide-in-right' : 'slide-in-left';
                this.flashcard.classList.add(animationClass);
                
                // Remove animation class after animation completes
                setTimeout(() => {
                    this.flashcard.classList.remove(animationClass);
                }, 500);
            }, 20);
        }, 200); // Reduced from 600ms to 200ms
        
        this.updateProgress();
    }
    
    flipCard() {
        this.isFlipped = !this.isFlipped;
        this.flashcard.classList.toggle('flipped');
        
        // Add a subtle scale effect during flip
        this.flashcard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.flashcard.style.transform = 'scale(1)';
        }, 150);
    }
    
    updateCard() {
        const currentCard = this.data[this.currentIndex];
        const frontContent = this.flashcard.querySelector('.flashcard-front .card-content');
        const backContent = this.flashcard.querySelector('.flashcard-back .card-content');
        
        if (this.currentMode === 'de-en') {
            // German to English mode
            frontContent.innerHTML = `
                <div class="word">${currentCard.german}</div>
                <div class="pronunciation">${currentCard.pronunciation}</div>
                <div class="english-pronunciation">
                    <i class="fas fa-volume-up"></i>
                    ${currentCard.englishPronunciation}
                </div>
                <div class="card-hint">
                    <i class="fas fa-hand-pointer"></i>
                    Tap to reveal
                </div>
            `;
            
            backContent.innerHTML = `
                <div class="translation">${currentCard.english}</div>
                <div class="meaning">${currentCard.meaning}</div>
                <div class="gender-info">
                    <span class="gender ${this.getGenderClass(currentCard.gender)}">${currentCard.gender}</span>
                    <span class="gender-reason">${currentCard.genderReason}</span>
                </div>
            `;
        } else {
            // English to German mode
            frontContent.innerHTML = `
                <div class="word">${currentCard.english}</div>
                <div class="meaning">${currentCard.meaning}</div>
                <div class="card-hint">
                    <i class="fas fa-hand-pointer"></i>
                    Tap to reveal
                </div>
            `;
            
            backContent.innerHTML = `
                <div class="translation">${currentCard.german}</div>
                <div class="pronunciation">${currentCard.pronunciation}</div>
                <div class="english-pronunciation">
                    <i class="fas fa-volume-up"></i>
                    ${currentCard.englishPronunciation}
                </div>
                <div class="gender-info">
                    <span class="gender ${this.getGenderClass(currentCard.gender)}">${currentCard.gender === 'm' ? 'Maskulin' : currentCard.gender === 'f' ? 'Feminin' : 'Neutrum'}</span>
                    <span class="gender-reason">${currentCard.genderReason}</span>
                </div>
            `;
        }
        
        this.updateProgress();
    }
    
    // Helper function to get gender-specific CSS class
    getGenderClass(gender) {
        const genderClass = (() => {
            switch(gender.toLowerCase()) {
                case 'm':
                    return 'gender-masculine';
                case 'f':
                    return 'gender-feminine';
                case 'n':
                    return 'gender-neuter';
                default:
                    return '';
            }
        })();
        
        return genderClass;
    }
    
    updateProgress() {
        const progress = ((this.currentIndex + 1) / this.data.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.progressText.textContent = `${this.currentIndex + 1} / ${this.data.length}`;
        
        // Update button states
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.data.length - 1;
        
        this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        this.nextBtn.style.opacity = this.currentIndex === this.data.length - 1 ? '0.5' : '1';
    }
    
    // Menu functions
    openMenu() {
        this.sideMenu.classList.add('open');
        this.menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Make hamburger button transparent when menu is open
        if (this.hamburgerBtn) {
            this.hamburgerBtn.classList.add('menu-open');
        }
    }
    
    closeMenu() {
        this.sideMenu.classList.remove('open');
        this.menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Restore hamburger button appearance when menu is closed
        if (this.hamburgerBtn) {
            this.hamburgerBtn.classList.remove('menu-open');
        }
    }
    
    toggleMenu() {
        if (this.sideMenu.classList.contains('open')) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    toggleSubmenu(menuToggle) {
        const parent = menuToggle.closest('.menu-parent');
        if (parent) {
            parent.classList.toggle('open');
        }
    }
    
    navigateToPage(page) {        
        // First, hide all pages properly
        Object.values(this.pages).forEach(pageElement => {
            if (pageElement) {
                pageElement.classList.remove('active');
                // Reset any inline styles that might interfere
                pageElement.style.display = '';
                pageElement.style.transform = '';
                pageElement.style.opacity = '';
            }
        });
        
        // Show the selected page
        if (this.pages[page]) {
            if (page === 'flashcards') {
                // Show flashcards (main app)
                this.pages.flashcards.style.display = 'flex';
                // Ensure other pages are hidden
                if (this.pages.instructions) this.pages.instructions.classList.remove('active');
                if (this.pages.about) this.pages.about.classList.remove('active');
            } else {
                // Hide flashcards and show the selected page
                this.pages.flashcards.style.display = 'none';
                this.pages[page].classList.add('active');
                
                // Add smooth transition
                this.pages[page].style.transform = 'translateX(100px)';
                this.pages[page].style.opacity = '0';
                
                setTimeout(() => {
                    this.pages[page].style.transform = 'translateX(0)';
                    this.pages[page].style.opacity = '1';
                }, 50);
            }
        }
        
        // Update current page
        this.currentPage = page;
        
        // Hamburger button is always transparent now, no need to change appearance
        
        // Update active menu item
        this.menuItems.forEach(item => {
            item.classList.toggle('active', item.dataset.page === page);
        });
        
        // Close menu
        this.closeMenu();
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FlashCardApp();
});

// Add some visual feedback for interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}); 