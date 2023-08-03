export const getNewAdvice = async (setAdvice: (value: string) => void) => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    const data = await response.json();

    const { slip } = data;

    setAdvice(slip.advice);
  } catch (error) {
    console.error(error);
  }
};
