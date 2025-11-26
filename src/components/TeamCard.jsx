import { Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const TeamCard = ({ member }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const socialLinks = member.social || [];
  const linkedIn = socialLinks.find((s) => s.platform === 'linkedin');

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-md hover:-translate-y-2 bg-card">
      <CardContent className="p-8 text-center">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <Avatar className="h-28 w-28 mx-auto border-4 border-primary/10 shadow-lg relative">
            <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
              {getInitials(member.name)}
            </AvatarFallback>
          </Avatar>
        </div>
        <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
        <p className="text-sm text-muted-foreground font-medium mb-6 px-2">{member.role}</p>
        <div className="flex justify-center gap-3">
          {member.email && (
            <Button
              variant="outline"
              size="icon"
              asChild
              className="h-10 w-10 rounded-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          )}
          {linkedIn && (
            <Button
              variant="outline"
              size="icon"
              asChild
              className="h-10 w-10 rounded-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <a
                href={linkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
