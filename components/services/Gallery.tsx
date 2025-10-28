import { FocusCards } from '@/components/ui/FocusCards';
import { cardsGallery } from '@/constants';

export function Gallery() {
  return (
    <section className="container section flex-col-center gap-12">
      <div className="flex-col-center max-w-xl gap-6">
        <h2 className="sub-title">Des Idées pour votre Projet</h2>
        <p className="description">
          Découvrez un univers de possibilités pour votre projet carrelage. Des
          salles de bain élégantes aux terrasses contemporaines, trouvez
          l'inspiration qui correspond à vos envies.
        </p>
      </div>
      <FocusCards cards={cardsGallery} />
    </section>
  );
}
