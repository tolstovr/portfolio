import React from "react"
import { useTheme } from "@/hooks/ThemeContext"
import { useLang } from "@/hooks/LocaleContext"
import { getLang } from "@/utils/locales"
import Box from "@/components/Box/Box"
import styles from "./HeroSection.module.scss"

const InfoBoxes = () => {
  const { theme } = useTheme()
  const { lang } = useLang()

  return (
    <>
    <Box gridArea="avatar" backgroundURL="/avatar.webp" className={styles["avatar-box"]} animation="fade-left" />
    <Box gridArea="info" className={styles["info-box"]} animation="fade-right" delay={0.5}>
      <h1>&#128075;&nbsp;{getLang(lang).hero.title}</h1>
      <p className={`${theme === "light" && styles.light}`}>{getLang(lang).hero.info}</p>
    </Box>
    </>
  )
}

export default InfoBoxes