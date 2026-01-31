import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  avatar?: any;
  social?: { platform: string; url: string }[];
  email?: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  // Placeholder for avatar URL logic if Sanity is not connected
  // const avatarUrl = member.avatar ? urlFor(member.avatar).width(400).height(400).url() : null;
  const avatarUrl = null;

  return (
    <div className="glass-card hover:translate-y-[-10px] duration-500 rounded-3xl overflow-hidden group relative p-8 text-center animate-fade-in">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nss-blue to-nss-gold" />

      <div className="mb-6 relative mx-auto w-32 h-32">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-nss-blue to-nss-gold blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />

        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={member.name}
            className="relative w-full h-full rounded-full object-cover border-4 border-nss-navy shadow-xl group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="relative w-full h-full rounded-full bg-nss-navy flex items-center justify-center text-white text-4xl font-heading border-4 border-white/10 shadow-xl group-hover:scale-105 transition-transform">
            {member.name.charAt(0)}
          </div>
        )}
      </div>

      <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-nss-blue transition-colors">
        {member.name}
      </h3>
      <p className="text-nss-gold text-sm font-medium uppercase tracking-wider mb-6">{member.role}</p>

      <div className="flex justify-center gap-3">
        {member.social?.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-nss-blue hover:text-white text-muted-foreground transition-all duration-300 hover:-translate-y-1"
            aria-label={`${member.name}'s ${social.platform}`}
          >
            {social.platform === "linkedin" && <Linkedin className="h-4 w-4" />}
            {social.platform === "twitter" && <Twitter className="h-4 w-4" />}
            {social.platform === "instagram" && <Instagram className="h-4 w-4" />}
          </a>
        ))}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="p-2 rounded-lg bg-white/5 hover:bg-nss-gold hover:text-nss-navy text-muted-foreground transition-all duration-300 hover:-translate-y-1"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
