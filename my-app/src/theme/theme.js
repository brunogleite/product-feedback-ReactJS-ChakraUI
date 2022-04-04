
import { extendTheme } from "@chakra-ui/react";

export const myNewTheme = extendTheme({
 
    colors: {
      primaryColor: '#AD1FEA',
      secondaryColor: '#4661E6',
      white: '#fff',
      darkBlue20: "#4661E6",
      darkBlue10: "#3A4374",
      greyishWhite20 : "#F2F4FF",
      greyishWhite10: "#F7F8FD",
      greyColor: "#647196",
      orangeColor: "#F49F85",
      lightBlue: "#62BCFA"

    },
    fonts: {
        body: "Jost, sans-serif",
        heading: "Jost, sans-serif"
    },
    fontSizes: {
        bodyXS: "0.8125rem",
        bodyS: "0.9375rem",
        bodyM: "1rem",
        headingXS: "1.125rem",
        headingSM: "1.25rem",
        headingL: "1.5rem"
    },
    fontWeights: {
        medium: 500,
        light: 300
    },
    letterSpacings: {
        tight: "-0.03125em"
    },
    space: {
        px: '1px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
    },
    sizes: {
        max: 'max-content',
        min: 'min-content',
        full: '100%',
        '3xs': '8.75rem',
        "2xs": "14.375em",
        xs: '15rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '90rem',
    },
    radii:{
        base: "0.5rem",
        large : "1.25rem",
        xl: "1.78rem",
        max: "100vw"
    }
  })