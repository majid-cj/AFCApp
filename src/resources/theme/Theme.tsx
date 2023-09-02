import '@react-navigation/native'

declare module '@react-navigation/native' {
  export type AppTheme = {
    dark: boolean
    colors: {
      secondary: string
      accent: string
      danger: string
      success: string
      background: string
      text: string
      lightText: string
      darkText: string
      lightBackground: string
      branchBackground: string
      border: string
    }
    space: {
      small: number
      medium: number
      large: number
      xLarge: number
    }
    fonts: {
      smallFont: {
        fontSize: number
        fontFamily: string
      }
      mediumFont: {
        fontSize: number
        fontFamily: string
      }
      largeFont: {
        fontSize: number
        fontFamily: string
      }
      xLargeFont: {
        fontSize: number
        fontFamily: string
      }
    }
  }
  export function useTheme(): AppTheme
}
