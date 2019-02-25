export function idFor(transmutation) {
  if (transmutation === 'Good Food') return 'goodfood';
  if (transmutation === 'Junk Food') return 'junkfood';

  return transmutation.toLowerCase();
}
