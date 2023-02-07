export default function formatDate(date) {
  try {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  } catch (error) {
    console.log('🚀 ~ file: formatDate.js:10 ~ formatDate ~ error', { date, error });
    return 'oops';
  }
}
