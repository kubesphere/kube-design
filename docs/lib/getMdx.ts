import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import autoLinkHeadings from 'rehype-autolink-headings';
import rehypeToc from 'rehype-toc2';
import { get } from 'lodash';
import { toCamelCase, toPascalCase } from './utils';

export async function getMdxData(cate: string, lang: string, filename: string) {
  const catePath = path.join(process.cwd(), `docs/${lang}/${cate}`);
  const realFileName = filename.startsWith('use') ? toCamelCase(filename) : toPascalCase(filename);
  const fullPath = path.join(catePath, `${realFileName}.mdx`);

  const metaDataPath = path.join(process.cwd(), '.docgen/docgen.json');

  let toc = [];
  let mdxSource = {};
  let frontMatter = {};
  let error = false;
  let metaData = {};

  try {
    const source = fs.readFileSync(fullPath);
    const { content, data } = matter(source);
    frontMatter = data;

    const customizeTOCData = (tocData) => {
      toc = tocData.map((item) => {
        const text = get(item, 'text[0].children[0].value') || '';
        return {
          ...item,
          text,
        };
      });
      return null;
    };

    mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          rehypeSlug,
          [autoLinkHeadings, { behavior: 'wrap', properties: { className: 'heading-link' } }],
          [rehypeToc, { headings: ['h1', 'h2'], customizeTOCData }],
        ],
      },
      scope: data,
    });
  } catch (e) {
    error = true;
  }

  try {
    metaData = fs.readJSONSync(metaDataPath);
  } catch (e) {
    error = true;
  }

  return {
    error,
    toc,
    source: mdxSource,
    frontMatter,
    metaData,
  };
}
