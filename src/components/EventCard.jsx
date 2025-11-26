import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from './Image';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event.slug.current}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl h-full group border-0 shadow-md hover:-translate-y-2">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {event.isFeatured && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-accent border-0 px-4 py-1.5 text-xs font-semibold">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-6 bg-card">
          <h3 className="font-heading text-xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
            {event.title}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <div className="p-2 rounded-lg bg-primary/10 mr-3 group-hover:bg-primary/20 transition-colors">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <time dateTime={event.date} className="font-medium">{formatDate(event.date)}</time>
            </div>
            {event.venue && (
              <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                <div className="p-2 rounded-lg bg-accent/10 mr-3 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <span className="line-clamp-1 font-medium">{event.venue}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
