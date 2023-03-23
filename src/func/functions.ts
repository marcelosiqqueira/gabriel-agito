export function getGreaterDate(date_0: string, date_1: string): number {
  const arrayDate_0 = date_0.split("/");
  const arrayDate_1 = date_1.split("/");
  if (arrayDate_0[2] > arrayDate_1[2]) return -1;
  if (arrayDate_0[2] < arrayDate_1[2]) return 1;
  if (arrayDate_0[1] > arrayDate_1[1]) return -1;
  if (arrayDate_0[1] < arrayDate_1[1]) return 1;
  if (arrayDate_0[0] > arrayDate_1[0]) return -1;
  if (arrayDate_0[0] < arrayDate_1[0]) return 1;
  return 0;
}
