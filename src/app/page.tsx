import Hero from "@/components/hero";
import { BlogPosts } from "@/components/posts";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <div>
      <Hero />
      <Projects />
    </div>
  );
  // return (
  //   <section>
  //       <Hero />
  //       <p className="mb-4">
  //         MS Data Science (ETH Zurich) <br />
  //         BS Data Science (University of Texas, Dallas) <br />
  //         BS Mathematics (University of Texas, Dallas) <br />
  //       </p>
  //       <div className="my-8">
  //         <BlogPosts />
  //       </div>
  //   </section>
  // );
}
