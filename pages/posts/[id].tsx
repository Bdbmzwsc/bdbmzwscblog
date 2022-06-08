

















import { getAllPostIds, getPostData} from '../../lib/posts';
import { GetStaticProps, GetStaticPaths} from 'next';
//import { ParsedUrlQuery } from 'querystring';
//import { Params } from 'next/dist/server/router';



export default function Post( {postData}: any) {
  return <div>
    {postData.title}
    <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
  </div>;
}
export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params?.id as string);
    return {
      props: {
        postData,
      },
    };
  }

export const getStaticPaths: GetStaticPaths = async () =>  {
    const fn = getAllPostIds();
    /*
    return {
      paths: paths,
      fallback: true,
    };
    const paths= fn.map((f) => {
      return {
        params: {
          id: f.replace(/\.md$/, '')
        }
      };
    });*/
    return {
      paths: fn,
      fallback: false,
    };
}

