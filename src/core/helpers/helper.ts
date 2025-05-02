export const hexToRgb = (hex : any) => {
    hex = hex.replace(/^#/, '');
    
    let r, g, b;
    
    if (hex.length === 3) {
        r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
        g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
        b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else {
        // Invalid hex, return black as fallback
        return { r: 0, g: 0, b: 0 };
    }
    
    return { r, g, b };
};

export const hexToCssHsl = (hex: string): string => {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Parse r, g, b values
    let r: number, g: number, b: number;
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else {
        throw new Error('Invalid HEX color format');
    }
    
    // Convert RGB to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0; // Initialize with default value
    let s: number;
    const l = (max + min) / 2;
    
    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
        h /= 6;
    }
    
    // Convert to CSS format (hue in degrees, saturation and lightness as percentages)
    h = Math.round(h * 360 * 10) / 10;
    s = Math.round(s * 100 * 10) / 10;
    const lightness = Math.round(l * 100 * 10) / 10;
    
    return `${h} ${s}% ${lightness}%`;
}

export const getImageUrl = (image: string) => {
    if (image) {
        return `${import.meta.env.VITE_IMAGES_URL}${image}`;
    } else {
        return `${import.meta.env.VITE_IMAGES_URL}default.png`;
    }
}

export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
}