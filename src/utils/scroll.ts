export const scrollToSection = (id: string, callback?: () => void) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
  if (callback) {
    callback();
  }
};
