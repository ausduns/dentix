// React Theme — extracted from https://dentix.framer.website/our-clinic
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '12': string;
    '14': string;
    '16': string;
    '18': string;
    '24': string;
    '32': string;
    '40': string;
    '48': string;
    '72': string;
 *   };
 *   space: {
    '2': string;
    '40': string;
    '48': string;
    '64': string;
    '80': string;
    '99': string;
    '160': string;
 *   };
 *   radii: {
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    xs: string;
    md: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#5b7a12",
    "secondary": "#0000ee",
    "background": "#f3f4f6",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#838996",
    "neutral300": "#6b7280",
    "neutral400": "#4b5363",
    "neutral500": "#f9fafb",
    "neutral600": "#e5e7eb"
  },
  "fonts": {
    "body": "'Times', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "24": "24px",
    "32": "32px",
    "40": "40px",
    "48": "48px",
    "72": "72px"
  },
  "space": {
    "2": "2px",
    "40": "40px",
    "48": "48px",
    "64": "64px",
    "80": "80px",
    "99": "99px",
    "160": "160px"
  },
  "radii": {
    "md": "10px",
    "lg": "16px",
    "xl": "20px",
    "full": "100px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0.12) 0px 2px 3px 0px",
    "xs": "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px, rgba(255, 255, 255, 0.25) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0.25) 0px -1px 1px 1px inset",
    "md": "rgba(0, 0, 0, 0.04) 0px 0px 12px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#5b7a12",
      "light": "hsl(78, 74%, 42%)",
      "dark": "hsl(78, 74%, 12%)"
    },
    "secondary": {
      "main": "#0000ee",
      "light": "hsl(240, 100%, 62%)",
      "dark": "hsl(240, 100%, 32%)"
    },
    "background": {
      "default": "#f3f4f6",
      "paper": "#ffffff"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#ffffff"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "600",
      "lineHeight": "38.4px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "600",
      "lineHeight": "31.2px"
    },
    "body1": {
      "fontSize": "18px",
      "fontWeight": "400",
      "lineHeight": "27px"
    }
  },
  "shape": {
    "borderRadius": 10
  },
  "shadows": [
    "rgb(0, 0, 0) 0px 0px 0px 1px inset",
    "rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px",
    "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px, rgba(255, 255, 255, 0.25) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0.25) 0px -1px 1px 1px inset",
    "rgba(0, 0, 0, 0.12) 0px 2px 3px 0px",
    "rgba(0, 0, 0, 0.04) 0px 0px 12px 0px"
  ]
};

export default theme;
