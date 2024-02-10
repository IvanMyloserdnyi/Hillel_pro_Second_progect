export function getFormattedCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
export const dateToNumber = (date) => {
    const convertedDate = Number(date.split('-').join(''))
    const anyNumber = 1
    if (isNaN(convertedDate)) {
        console.log('Incorrect date')
        return anyNumber
    }
    else {
        return convertedDate
    }
}