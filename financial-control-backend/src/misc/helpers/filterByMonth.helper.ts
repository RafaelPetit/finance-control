type WithDate = { date: string | Date }; // Define a interface genérica

export async function  filterByMonth<T extends WithDate>(items: T[]): Promise<T[]> {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const currentMonthItems = items.filter(item => {
    const itemDate = new Date(item.date);
    return (
      itemDate.getMonth() === currentMonth && 
      itemDate.getFullYear() === currentYear
    );
  });

  return currentMonthItems;
}
