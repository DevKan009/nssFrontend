import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";
import TeamGrid from "@/components/TeamGrid";

const teamQuery = `*[_type == "teamMember"] | order(name asc){
    _id, name, role, "avatar": avatar.asset->url, social[]{platform, url}, email
}`;

const Team = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await client.fetch(teamQuery);
        setMembers(data);
      } catch (error) {
        console.error('Error fetching team:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 animate-fade-in">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            The dedicated volunteers and coordinators who make our mission possible.
            Together, we're building a better community.
          </p>
        </div>
      </section>

      <section className="container px-6">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nss-blue"></div>
          </div>
        ) : (
          <TeamGrid members={members} />
        )}
      </section>
    </div>
  );
};

export default Team;
