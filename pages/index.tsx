import {getSortedPostsData} from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}




export default function Home({ allPostsData }: {allPostsData: {
  id: string
  date: string
  title: string
  author: string
  img: string
  des: string
  a_i: string
  card: string}[]}) {
    return "Hello World";
  
  









}