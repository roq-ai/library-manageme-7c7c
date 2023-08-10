const mapping: Record<string, string> = {
  books: 'book',
  borrowings: 'borrowing',
  isbns: 'isbn',
  libraries: 'library',
  reservations: 'reservation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
