import Head from 'next/head';
import { Post } from '../../components/Post';

const post = {
  slug: 'enchanting-world-of-monkeys',
  title: 'The Enchanting World of Monkeys: Our Primate Cousins',
  content: `### Introduction
Monkeys, captivating members of the primate family, have fascinated humans for centuries. With their intelligence, dexterity, and playful nature, these remarkable creatures thrive in diverse habitats worldwide. From acrobatic gibbons to tool-using capuchins, each monkey species unveils unique behaviors and adaptations. Their crucial role as seed dispersers and pollinators contributes to the delicate balance of ecosystems. Moreover, monkeys' intricate social structures and communication skills showcase their cognitive abilities, providing insights into our own evolutionary past and reinforcing the close kinship we share with these extraordinary primates.
### The Fascinating Social Lives of Monkeys
Monkeys' social dynamics and complex relationships are awe-inspiring. Living in troops or bands, these highly social animals form tight-knit communities that ensure their survival. Within these groups, hierarchies exist, offering protection against predators and ensuring access to resources. Communication plays a vital role in their interactions, as monkeys employ an astonishing range of vocalizations, facial expressions, and body language. Through these nuanced forms of communication, they convey emotions, share information about food sources or dangers, and maintain the cohesiveness of their groups. By delving deeper into the captivating lives of monkeys, we gain a greater appreciation for their intelligence and their unique contributions to the natural world.`,
};

export default function PostDetail() {
  return (
    <>
      <Head>
        <title>Blog Post: {post.title}</title>
      </Head>
      <Post key={post.slug} slug={post.slug} title={post.title}>
        {post.content}
      </Post>
    </>
  );
}
