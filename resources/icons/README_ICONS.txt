ICON FILES NEEDED
================

Please add your app icons in the following formats to this folder:

Required Icons:
- appIcon.png (512x512 pixels) - Main app icon for all platforms
- icon.ico (Windows icon file with multiple sizes: 16, 32, 48, 256 pixels)
- icon.icns (macOS icon file)
- favicon.ico (Browser/window icon, 16x16 or 32x32 pixels)

Recommended Sizes for appIcon.png:
- 512x512 pixels (recommended)
- 256x256 pixels (minimum)
- Can be automatically converted to other formats using build scripts

Notes:
- Use PNG format for source icons when possible
- Keep icons simple and readable at small sizes
- Use transparent backgrounds for non-square icons
- Test icons at different sizes to ensure clarity

The build automation scripts can help convert icons between formats.
See convert_icon.py in the build automation folder. 