# Neutralino App Template

This is a template for creating cross-platform desktop applications using [Neutralino.js](https://neutralino.js.org/) with comprehensive build automation and packaging tools.

## Template Placeholders

Before using this template, replace the following placeholders throughout the project files:

- `{{APP_DISPLAY_NAME}}` - The human-readable name of your app (e.g., "My Awesome App")
- `{{APP_BINARY_NAME}}` - The binary/executable name (e.g., "MyAwesomeApp", no spaces)
- `{{APP_NAME_LOWERCASE}}` - Lowercase app name for identifiers (e.g., "myawesomeapp")
- `{{APP_VERSION}}` - Your app version (e.g., "1.0.0")
- `{{APP_PUBLISHER}}` - Your name or company name
- `{{APP_YEAR}}` - Current year for copyright

### Files to Update

1. `neutralino.config.json` - Main configuration file
2. `resources/index.html` - Main HTML file
3. `resources/styles.css` - CSS styles
4. `resources/js/main.js` - Main JavaScript file
5. `build automation/template.iss` - Windows installer script
6. `_app_scaffolds/` - Platform-specific packaging files

## Quick Start

1. **Replace Placeholders**: Use find and replace to update all placeholders with your app's information
2. **Add Your Icons**: Replace placeholder icons in `resources/icons/` with your app icons
3. **Install Neutralino CLI**: `npm install -g @neutralinojs/neu`
4. **Initialize**: Run `neu update` to download Neutralino binaries
5. **Develop**: Run `neu run` to start development
6. **Build**: Use the build automation scripts for distribution

## Project Structure

```
neutralino-template/
├── build automation/          # Build scripts and automation
│   ├── template.iss          # Windows installer script
│   ├── build-*.sh           # Platform build scripts
│   └── *.py                 # Utility scripts
├── _app_scaffolds/           # Platform-specific packaging
│   ├── linux/               # Linux .desktop and install scripts
│   ├── mac/                 # macOS app bundle and packaging
│   └── win/                 # Windows-specific files
├── resources/               # App resources
│   ├── icons/              # App icons (add your icons here)
│   ├── js/                 # JavaScript files
│   ├── index.html          # Main HTML file
│   └── styles.css          # Main CSS file
├── neutralino.config.json   # Neutralino configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Development Commands

- `neu run` - Run the app in development mode
- `neu build` - Build the app for current platform
- `neu build --release` - Build optimized release version

## Build Automation

This template includes comprehensive build automation for all platforms:

### Windows
- Uses `template.iss` for Inno Setup installer
- Builds x64 executable
- Creates installer executable

### macOS
- Creates .app bundle
- Code signing support (configure in build scripts)
- DMG creation

### Linux
- Creates .deb packages
- AppImage support
- Desktop file integration

## Icon Requirements

Add your app icons to `resources/icons/` in the following formats:

- `appIcon.png` - Main app icon (512x512 recommended)
- `icon.ico` - Windows icon file
- `icon.icns` - macOS icon file
- `favicon.ico` - Browser/window icon

## Configuration

### Neutralino Config (`neutralino.config.json`)
- Set app metadata
- Configure window properties
- Define build targets
- Set permissions and API access

### Build Scripts
- Customize build automation in `build automation/`
- Configure code signing
- Set distribution parameters

## Getting Started with Development

1. **Install Dependencies**
   ```bash
   npm install -g @neutralinojs/neu
   ```

2. **Update Neutralino**
   ```bash
   neu update
   ```

3. **Start Development**
   ```bash
   neu run
   ```

4. **Build for Distribution**
   ```bash
   # Run appropriate build script from build automation/
   ./build automation/build-linux-enhanced.sh    # Linux
   ./build automation/build-mac-enhanced.sh      # macOS
   # Use Inno Setup with template.iss for Windows
   ```

## Features Included

- ✅ Cross-platform desktop app framework
- ✅ Modern UI with responsive design
- ✅ Platform detection
- ✅ System notifications
- ✅ Window management
- ✅ Build automation for all platforms
- ✅ Installer/package creation
- ✅ Icon and branding support
- ✅ Development tools integration

## Customization

### Adding New Features
1. Add HTML elements to `resources/index.html`
2. Style them in `resources/styles.css`
3. Add functionality in `resources/js/main.js`
4. Use Neutralino APIs for system integration

### Platform-Specific Features
- Use `Neutralino.os.getPlatform()` to detect platform
- Add conditional code for platform-specific functionality
- Customize build scripts for platform requirements

## License

This template is provided as-is. Add your own license for your application.

## Support

- [Neutralino.js Documentation](https://neutralino.js.org/docs/)
- [Neutralino.js GitHub](https://github.com/neutralinojs/neutralinojs)
- [Community Forum](https://github.com/neutralinojs/neutralinojs/discussions)

---

**Happy coding!** 🚀 