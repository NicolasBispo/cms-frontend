export function stringToSlug(str: string): string {
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); 
  str = str.toLowerCase().trim(); 
  str = str.replace(/\s+/g, '-');
  str = str.replace(/[^\w\-]+/g, '');

  return str;
}

