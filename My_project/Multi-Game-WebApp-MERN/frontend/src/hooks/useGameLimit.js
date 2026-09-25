export const useGameLimit = () => {
  const checkLimitAndIncrement = () => {
    const token = localStorage.getItem('token');
    let gamePlays = parseInt(localStorage.getItem('gamePlays') || '0');
    
    if (!token && gamePlays >= 5) {
      alert('You have reached the 5 times game limit for guests. Please login to continue playing!');
      window.location.href = '/login';
      return false; // Limit reached, cannot play
    }
    
    if (!token) {
      localStorage.setItem('gamePlays', (gamePlays + 1).toString());
    }
    
    return true; // OK to play
  };

  return { checkLimitAndIncrement };
};
