import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    date: new Date('2021-01-01'),
    slug: 'enchanting-world-of-monkeys',
    title: 'The Enchanting World of Monkeys: Our Primate Cousins',
    content: `### Introduction
Monkeys, captivating members of the primate family, have fascinated humans for centuries. With their intelligence, dexterity, and playful nature, these remarkable creatures thrive in diverse habitats worldwide. From acrobatic gibbons to tool-using capuchins, each monkey species unveils unique behaviors and adaptations. Their crucial role as seed dispersers and pollinators contributes to the delicate balance of ecosystems. Moreover, monkeys' intricate social structures and communication skills showcase their cognitive abilities, providing insights into our own evolutionary past and reinforcing the close kinship we share with these extraordinary primates.
### The Fascinating Social Lives of Monkeys
Monkeys' social dynamics and complex relationships are awe-inspiring. Living in troops or bands, these highly social animals form tight-knit communities that ensure their survival. Within these groups, hierarchies exist, offering protection against predators and ensuring access to resources. Communication plays a vital role in their interactions, as monkeys employ an astonishing range of vocalizations, facial expressions, and body language. Through these nuanced forms of communication, they convey emotions, share information about food sources or dangers, and maintain the cohesiveness of their groups. By delving deeper into the captivating lives of monkeys, we gain a greater appreciation for their intelligence and their unique contributions to the natural world.`,
  },
  {
    date: new Date('2021-04-08'),
    slug: 'delving-into-wonders-of-dolphins',
    title: 'Delving into the Wonders of Dolphins: Marvels of the Ocean',
    content: `### Unveiling the Intriguing World of Dolphins
Dolphins, the charismatic inhabitants of the ocean, have long fascinated and captivated the human imagination. With their sleek bodies, intelligent eyes, and remarkable agility, these magnificent marine mammals navigate the vast seas with grace and charm. From their playful acrobatics to their sophisticated communication skills, dolphins exhibit a fascinating array of behaviors and adaptations. They possess highly developed brains, rivaling those of primates, and showcase exceptional problem-solving skills and cognitive abilities. Their social lives are equally intriguing, as they form intricate communities characterized by complex relationships and cooperation. Through a sophisticated system of clicks, whistles, and body movements, dolphins communicate and engage in cooperative hunting, displaying a level of social interaction that continues to astound scientists and observers alike.
### The Remarkable Intelligence of Dolphins
Dolphins' intelligence and cognitive abilities are truly remarkable. They possess highly developed brains, rivaling those of primates, and showcase exceptional problem-solving skills. Their social lives are equally intriguing, as they form intricate communities characterized by complex relationships and cooperation. Through a sophisticated system of clicks, whistles, and body movements, dolphins communicate and engage in cooperative hunting, displaying a level of social interaction that continues to astound scientists and observers alike.`,
  },
];

export default function Archives() {
  return (
    <>
      <Head>
        <title>Archives</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Archives</h1>
      {posts.map((post) => (
        <div key={post.slug} className="flex justify-between not-last:mb-4">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          <p className="text-sm text-gray-500">{post.date.toDateString()}</p>
        </div>
      ))}
    </>
  );
}
