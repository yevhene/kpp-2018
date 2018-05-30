export function nextId(entities) {
  return Math.max(...entities.map((s) => s.id)) + 1;
}

export function findById(entities, id) {
  if (!id) return undefined;

  return entities.find((s) => s.id.toString() === id.toString());
}

export function findIndexById(entities, id) {
  if (!id) return undefined;

  return entities.findIndex((s) => s.id.toString() === id.toString());
}
