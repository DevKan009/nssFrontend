import TeamCard from "./TeamCard";

interface TeamGridProps {
  members: any[];
}

const TeamGrid = ({ members }: TeamGridProps) => {
  if (!members || members.length === 0) {
    return (
      <div className="text-center py-20 glass-card rounded-3xl">
        <p className="text-muted-foreground">No team members found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {members.map((member) => (
        <TeamCard key={member._id} member={member} />
      ))}
    </div>
  );
};

export default TeamGrid;
