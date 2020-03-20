export const linkResolver = doc => {
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }
  if (doc.type === 'preview') {
    return `/preview/${doc.uid}`;
  }
  return '/';
};
