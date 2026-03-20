import rss from '@astrojs/rss';
 
export async function GET(context) {
  const posts = import.meta.glob('../content/blog/*.{md,mdx}', { eager: true });
  const items = Object.values(posts).map((post: any) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description ?? '',
    pubDate: new Date(post.frontmatter.date),
    link: post.url,
  })).sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
 
  return rss({
    title: 'Varun Nair',
    description: 'Writing on telecoms, Java, cloud and AI.',
    site: context.site ?? 'https://varundelft.github.io',
    items,
  });
}
