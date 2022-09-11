;(() => {
  function setTheme(newTheme) {
    const classToAdd = newTheme
    const classToRemove = newTheme === 'light' ? 'dark' : 'light'
    document.body.classList.add(classToAdd)
    document.body.classList.remove(classToRemove)
  }

  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
  const theme = prefersDarkScheme.matches ? 'dark' : 'light'
  setTheme(theme)

  prefersDarkScheme.addListener((event) => {
    const newTheme = event.matches ? 'dark' : 'light'
    setTheme(newTheme)
  })
})()
