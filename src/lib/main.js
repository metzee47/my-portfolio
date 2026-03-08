export const frenchDateFormat = givenDate => {
    const date = new Date(givenDate)
    if (!isNaN(date.getTime())) {
        return new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return givenDate
}


export const calculateMonthsBetween = (givenDateA, givenDateB) => {

    const dateA = new Date(givenDateA)
    const dateB = new Date(givenDateB)
  // S'assurer que dateA est avant dateB
  const start = dateA < dateB ? dateA : dateB;
  const end = dateA < dateB ? dateB : dateA;

  const yearsDiff = end.getFullYear() - start.getFullYear();
  const monthsDiff = end.getMonth() - start.getMonth();

  let totalMonths = yearsDiff * 12 + monthsDiff;

  // Ajustement si le jour de fin est avant le jour de début
  if (end.getDate() < start.getDate()) {
    totalMonths -= 1;
  }

  return totalMonths;
};

