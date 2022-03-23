// import type { NextPage } from 'next'
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import { imgUrl, sanityClient } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log("post", posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium</title>
        <meta name="description" content="Medium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <TopHeader />

      <div>
        {posts.map((value)=>{
          return (<div>
            <div>
              <img src={imgUrl(value.mainImage).url()!}> 
              </img>
            {value.title}
            </div>

          </div>);
        })}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  // console.log()
  const query = `*[_type == 'post']`;
  const posts = await sanityClient.fetch(query);
  // debugger;
  return {
    props: { posts },
  };
};
