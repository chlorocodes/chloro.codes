;(() => {
  function setTheme(newTheme) {
    debugger
    const classToAdd = newTheme
    const classToRemove = newTheme === 'light' ? 'dark' : 'light'
    document.body.classList.add(classToAdd)
    document.body.classList.remove(classToRemove)
    try {
      localStorage.setItem('theme', newTheme)
    } catch (err) {
      console.error('Unable to save theme preference', err)
    }
  }

  function getTheme() {
    try {
      const preferredTheme = localStorage.getItem('theme')
      return preferredTheme
    } catch (err) {
      console.error('Unable to retrieve theme preference', err)
      return 'dark'
    }
  }

  const theme = getTheme()
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  setTheme(theme || (darkQuery.matches ? 'dark' : 'light'))

  darkQuery.addListener(function (e) {
    setTheme(e.matches ? 'dark' : 'light')
  })
})()
