/** @jsx jsx */
import { Box, Flex, Link, useColorMode,  ColorMode, ThemeProvider,jsx } from "theme-ui"
import { ColorModeProvider } from '@theme-ui/color-modes'

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (

    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()} Chirag Patel
      <br />
      <div style={{width:`100%`, marginTop:`5px`, }}>This site is hosted on Azure</div>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >        
        {` `}
        {/* <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-cara"
        >
          Theme
        </Link> */}
        <div sx={{ mx: 1 }}>Theme by</div>
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          LekoArts
        </Link>     
      </Flex>      
    </Box>
  )
}

export default Footer