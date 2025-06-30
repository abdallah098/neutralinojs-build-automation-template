// Main JavaScript file for {{APP_DISPLAY_NAME}}

// Initialize the app when Neutralino is ready
Neutralino.init();

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

// Handle app close events
Neutralino.events.on("windowClose", function() {
    Neutralino.app.exit();
});

// Initialize the application
async function initializeApp() {
    try {
        // Get platform information
        const osInfo = await Neutralino.os.getEnv('OS');
        const platformElement = document.getElementById('platform');
        
        if (platformElement) {
            if (osInfo) {
                platformElement.textContent = `Platform: ${osInfo}`;
            } else {
                // Fallback platform detection
                const userAgent = navigator.userAgent;
                let platform = 'Unknown';
                
                if (userAgent.includes('Windows')) platform = 'Windows';
                else if (userAgent.includes('Mac')) platform = 'macOS';
                else if (userAgent.includes('Linux')) platform = 'Linux';
                
                platformElement.textContent = `Platform: ${platform}`;
            }
        }
        
        showMessage('Application initialized successfully!', 'success');
    } catch (error) {
        console.error('Initialization error:', error);
        showMessage('Failed to initialize application.', 'error');
    }
}

// Set up event listeners for buttons
function setupEventListeners() {
    const helloButton = document.getElementById('btn-hello');
    const quitButton = document.getElementById('btn-quit');
    
    if (helloButton) {
        helloButton.addEventListener('click', handleHelloClick);
    }
    
    if (quitButton) {
        quitButton.addEventListener('click', handleQuitClick);
    }
}

// Handle hello button click
async function handleHelloClick() {
    try {
        // You can add your custom functionality here
        showMessage('Hello from {{APP_DISPLAY_NAME}}! 👋', 'success');
        
        // Example: Show system notification (if permissions allow)
        if (Neutralino.os.showNotification) {
            await Neutralino.os.showNotification(
                '{{APP_DISPLAY_NAME}}',
                'Hello from your Neutralino app!'
            );
        }
    } catch (error) {
        console.error('Hello action error:', error);
        showMessage('Could not complete hello action.', 'error');
    }
}

// Handle quit button click
async function handleQuitClick() {
    try {
        const confirmQuit = confirm('Are you sure you want to quit {{APP_DISPLAY_NAME}}?');
        if (confirmQuit) {
            await Neutralino.app.exit();
        }
    } catch (error) {
        console.error('Quit error:', error);
        showMessage('Could not quit application.', 'error');
    }
}

// Utility function to show messages
function showMessage(message, type = 'info') {
    const messageArea = document.getElementById('message-area');
    if (messageArea) {
        messageArea.textContent = message;
        messageArea.className = `message-area ${type}`;
        
        // Clear message after 3 seconds for success messages
        if (type === 'success') {
            setTimeout(() => {
                if (messageArea.textContent === message) {
                    messageArea.textContent = '';
                    messageArea.className = 'message-area';
                }
            }, 3000);
        }
    }
}

// Debug function for development
function debugInfo() {
    console.log('{{APP_DISPLAY_NAME}} Debug Info:');
    console.log('Version: {{APP_VERSION}}');
    console.log('Publisher: {{APP_PUBLISHER}}');
    console.log('Neutralino version:', NL_VERSION);
}

// Export functions for external use if needed
window.AppAPI = {
    showMessage,
    debugInfo
}; 