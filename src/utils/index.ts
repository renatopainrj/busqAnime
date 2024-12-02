export const getScoreColor = (score: number) => {
  if (score >= 80) return '#4caf50'
  if (score >= 51) return '#ff9800'
  return '#f44336'
}
