import DrawIcon from '@mui/icons-material/Draw';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Carousel from '@/components/carousel';
import { cn } from '@/lib/utils';
import Link from 'next/link';
const features = [
  {
    title: 'Image',
    new: true,
    icon: InsertPhotoIcon,
    desc: 'Generate images with custom styles in Flux and Ideogram.',
    to: 'to-sky-200',
    from: 'from-slate-700',
  },
  {
    title: 'Video',
    icon: VideocamIcon,
    desc: 'Generate videos with Pica, Harias, Runway, Luma and more.',
    to: 'to-amber-500',
    from: 'from-amber-500',
  },
  {
    title: 'Realtime',
    icon: DrawIcon,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, delectus!',
    to: 'to-sky-200',
    from: 'from-sky-600',
  },
  {
    title: 'Enhancer',
    new: true,
    icon: AutoFixHighIcon,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, delectus!',
    to: 'to-neutral-500',
    from: 'from-slate-800',
  },
  {
    title: 'Edit',
    new: true,
    icon: ArchitectureIcon,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, delectus!',
    to: 'to-sky-200',
    from: 'from-slate-700',
  },
  {
    title: 'Video LipSync',
    new: true,
    icon: MicExternalOnIcon,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, delectus!',
    to: 'to-sky-200',
    from: 'from-slate-700',
  },
  {
    title: 'Motion Transfer',
    new: true,
    icon: DirectionsWalkIcon,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, delectus!',
    to: 'to-neutral-800',
    from: 'from-neutral-800',
  },
  {
    title: 'Train',
    icon: PsychologyIcon,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, delectus!',
    to: 'to-sky-200',
    from: 'from-slate-700',
  },
];

export default function Home() {
  return (
    <div className="font-sans min-h-screen pt-8 lg:pt-16">
      <main>
        <Carousel />

        <div className="features px-4 lg:px-10 mb-16">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Generate</h1>
            <Button variant={'ghost'} className="text-blue-600">
              <ExpandMoreIcon /> Show all
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div className="flex gap-2" key={feature.title}>
                <div
                  className={cn(
                    'p-2 w-[60px] h-[60px] bg-gradient-to-b text-white rounded-2xl aspect-square  inline-grid items-center justify-center',
                    feature.from,
                    feature.to
                  )}
                >
                  <feature.icon fontSize="large" />
                </div>
                <div>
                  <h3 className="font-bold">
                    {feature.title}
                    {feature.new && (
                      <Badge className="ml-3 bg-blue-500 rounded-4xl text-white dark:bg-blue-600">
                        New
                      </Badge>
                    )}
                  </h3>
                  <p className="text-sm">{feature.desc}</p>
                </div>
                <Button className="rounded-4xl bg-accent text-accent-foreground self-center">
                  Open
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="gallery px-4 lg:px-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Gallery</h1>
            <div className="flex gap-2">
              <Link href={'/legal'}>
                <Button variant={'secondary'}>
                  <LibraryBooksIcon />
                  Legal
                </Button>
              </Link>
              <Link href={'/legal'}>
                <Button variant={'secondary'}>
                  <CreditCardIcon /> Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
