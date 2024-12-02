import { useState } from 'react'

import styles from '@/styles/SearchBar.module.css'

interface SearchBarProps {
  onSearch?: (query: string) => void
}
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Digite algo aqui..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className={styles.button}>
        Buscar
      </button>
    </div>
  )
}

export default SearchBar
