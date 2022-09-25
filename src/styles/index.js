// Spacing
export const space = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 48,
  xxl: 96,
}

// Typography
export const font = {
  family: 'OpenSans',
  size: {
    sm: 12,
    md: 15,
    lg: 20,
    xl: 22,
    xxl: 28,
    header: 34,
    display: 42,
  },
}

// Colors
export const color = {
  primary: '#0d6efd',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#ffc107',
  warning: '#e0a800',
  white: '#ffffff',
  gray: '#9eadb9',
  light: '#f8f9fa',
  dark: '#343a40',
  muted: '#6c757d',
  line: '#eaedf3',
}

//
export const margin = {
  sm: {
    margin: space.sm,
  },
  md: {
    margin: space.md,
  },
  lg: {
    margin: space.lg,
  },
  xl: {
    margin: space.xl,
  },

  top: {
    sm: {
      marginTop: space.sm,
    },
    md: {
      marginTop: space.md,
    },
    lg: {
      marginTop: space.lg,
    },
    xl: {
      marginTop: space.xl,
    },
  },

  bottom: {
    sm: {
      marginBottom: space.sm,
    },
    md: {
      marginBottom: space.md,
    },
    lg: {
      marginBottom: space.lg,
    },
    xl: {
      marginBottom: space.xl,
    },
  },

  start: {
    sm: {
      marginStart: space.sm,
    },
    md: {
      marginStart: space.md,
    },
    lg: {
      marginStart: space.lg,
    },
    xl: {
      marginStart: space.xl,
    },
  },

  end: {
    sm: {
      marginEnd: space.sm,
    },
    md: {
      marginEnd: space.md,
    },
    lg: {
      marginEnd: space.lg,
    },
    xl: {
      marginEnd: space.xl,
    },
  },
}

// Form
export const form = {
  label: {
    marginBottom: space.sm,
    color: color.secondary,
    fontFamily: font.family,
    fontSize: font.size.md,
  },

  input: {
    padding: space.sm,

    fontFamily: font.family,
    fontSize: font.size.md,

    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#6b747d',
  },
}

// Flex
export const flex = {
  row: {
    flexDirection: 'row',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  alignCenter: {
    alignItems: 'center',
  },

  justifyBetween: {
    justifyContent: 'space-between',
  },
}

// Shadow
export const shadow = {
  sm: {
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
}
