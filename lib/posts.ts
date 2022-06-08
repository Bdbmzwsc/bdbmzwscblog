import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

let postsDirectory: string = path.join(process.cwd(), 'posts');

export interface Post{
    id: string;
    title: string;
    date: string;
    content: string;
    author: string;
    img: string;
    des: string; 
    a_i: string; 
    card: string; 
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
  let contentHtml: string = processedContent.toString();
  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data as { date: string; title: string; author: string;img: string; des: string; a_i: string; card: string; },
  };
}

export function getAllPostIds() {
  const fn=fs.readdirSync(postsDirectory);
  return fn.map((f) => {
    return {
      params: {
        id: f.replace(/\.md$/, ''),
      },
    };
  });
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    let id: string = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    let fullPath: string = path.join(postsDirectory, fileName);
    let fileContents: string = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data as { date: string; title: string; author: string;img: string; des: string; a_i: string; card: string; },
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}