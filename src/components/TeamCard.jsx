import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { urlFor } from '@/lib/image';

const TeamCard = ({ member }) => {
  const avatarUrl = member.avatar ? urlFor(member.avatar).width(400).height(400).url() : null;

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg hover:-translate-y-4 rounded-3xl bg-card">
      <CardContent className="p-8 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-primary"></div>
        <div className="mb-6 relative mx-auto w-36 h-36 md:w-44 md:h-44">
          <div className="absolute -inset-2 rounded-full bg-gradient-primary blur-xl opacity-50 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 animate-glow"></div>
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={member.name}
              className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
            />
          ) : (
            <div className="relative w-full h-full rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-4xl font-bold border-4 border-background shadow-2xl group-hover:scale-110 transition-all duration-500">
              {member.name.charAt(0)}
            </div>
          )}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-effect px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-bold text-primary">View Profile</span>
          </div>
        </div>
        <h3 className="font-heading text-2xl font-extrabold mb-2 group-hover:text-primary transition-colors tracking-tight">
          {member.name}
        </h3>
        <p className="text-muted-foreground mb-6 font-bold text-base uppercase tracking-wide">{member.role}</p>
        <div className="flex justify-center space-x-3">
          {member.social?.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-muted hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1 shadow-md hover:shadow-primary"
              aria-label={`${member.name}'s ${social.platform}`}
            >
              {social.platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
              {social.platform === 'twitter' && <Twitter className="h-5 w-5" />}
              {social.platform === 'instagram' && <Instagram className="h-5 w-5" />}
            </a>
          ))}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="p-3 rounded-xl bg-muted hover:bg-gradient-accent hover:text-accent-foreground transition-all duration-300 hover:scale-125 hover:-translate-y-1 shadow-md hover:shadow-accent"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
