interface BlogPost {
  frontmatter: {
    publishDate: string | Date;
  };
}

export const formatDate = (date: string | Date | undefined): string => {
  if (!date) return '';
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  return parsedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const sortPostsByDate = (posts: BlogPost[]): BlogPost[] => {
  return [...posts].sort((a, b) => 
    new Date(b.frontmatter.publishDate).getTime() - 
    new Date(a.frontmatter.publishDate).getTime()
  );
};