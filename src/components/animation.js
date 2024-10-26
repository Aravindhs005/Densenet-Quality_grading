export const preLoaderAnim = () => {
    const loader = document.querySelector('.loader');
    const words = document.querySelectorAll('.words span');
  
    const lastWord = words[words.length - 1];
    lastWord.addEventListener('animationend', () => {
      loader.style.opacity = 0;
      loader.style.transition = 'opacity 0.5s ease';
      
      setTimeout(() => {
        window.location.href = '/'; 
      }, 500);
    });
  };
  