import MotionText from '../animation/MotionText';
import { faq } from '@/constants/index';
import FaqList from './FaqList';

const Faq = () => {
  return (
    <section className="section container mx-auto">
      <h2 className="sub-title mb-12">
        <MotionText duration={1}>
          Questions Fréquentes <br className="hidden sm:block" /> sur votre
          carreleur à Bergerac
        </MotionText>
      </h2>

      {/* Le rendu statique SEO + le client component pour l'interactivité */}
      <FaqList faq={faq} />
    </section>
  );
};

export default Faq;
