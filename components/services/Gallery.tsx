import { FocusCards } from '@/components/ui/FocusCards';

export function Gallery() {
  const cards = [
    {
      title: 'MS Carrelage 24',
      src: '/g2.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/g7.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/g3.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/g4.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/g5.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/g6.jpg',
    },
  ];

  return (
    <div className="container section flex-col-center gap-12">
      <div className="flex-col-center max-w-xl gap-6">
        <h2 className="sub-title">Des Idées pour votre Projet</h2>
        <p className="description">
          Découvrez un univers de possibilités pour votre projet carrelage. Des
          salles de bain élégantes aux terrasses contemporaines, trouvez
          l'inspiration qui correspond à vos envies.
        </p>
      </div>
      <FocusCards cards={cards} />
    </div>
  );
}
