const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  return theme !== 'light' ? '#161B22' : '#fff' 
}

export default getThemeColor
