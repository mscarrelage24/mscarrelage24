import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales MS Carrelage 24',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black-100 bg-dot-white/[0.2] flex flex-col overflow-hidden pt-40 pb-20 sm:px-10 px-5 justify-center items-center">
      <div className="max-w-7xl">
        <p className="mb-5">
          <b>Site internet:</b> MS Carrelage 24
        </p>
        <h1 className="heading mb-10">Mentions légales</h1>

        <ul className="list-disc ml-5">
          <li>
            <b>Entreprise: </b>SARL MS CARRELAGE 24
          </li>
          <li>
            <b>SIRET: </b>91309906500016
          </li>
          <li>
            <b>SIREN: </b>913 099 065
          </li>
          <li>
            <b>Code NAF: </b>4333Z - Travaux de revêtement des sols et des murs
          </li>
          <li>
            <b>Siège social: </b>93 RUE VALETTE 24100 BERGERAC
          </li>
          <li>
            <b>Email: </b>
            <a
              href="mailto:mustaphatouay@hotmail.com"
              className="text-blue-600"
            >
              mustaphatouay@hotmail.com
            </a>
          </li>
          <li>
            <b>Téléphone: </b>07 53 67 34 39
          </li>
        </ul>

        <h2 className="headingsub my-8">2. Hébergement du site</h2>
        <p>Le site mscarrelage24.fr est hébergé par Vercel Inc.</p>

        <h2 className="headingsub my-8">3. Webmaster</h2>
        <ul className="list-disc ml-5">
          <li>
            <b>Nom: </b>Michel CHAN-WAI-NAM
          </li>
          <li>
            <b>Email: </b>
            <a href="mailto:michel.cwn@gmail.com" className="text-blue-600">
              michel.cwn@gmail.com
            </a>
          </li>
        </ul>

        <h2 className="headingsub my-8">4. Propriété intellectuelle</h2>
        <p>
          Les contenus présents sur le site mscarrelage24.fr sont soumis à la
          législation en vigueur sur le droit d'auteur et sont la propriété
          exclusive de SARL MS CARRELAGE 24. Toute reproduction et utilisation
          sans autorisation expresse sont prohibées.
        </p>

        <h2 className="headingsub my-8">
          5. Protection des données personnelles
        </h2>
        <ul className="list-disc ml-5">
          <li>
            <b>Traitement des données: </b>Conformément au RGPD, vous disposez
            d'un droit d'accès, de rectification et de suppression de vos
            données personnelles.
          </li>
          <li>
            <b>Contact: </b>Pour exercer ces droits, contactez-nous par email.
          </li>
        </ul>

        <h2 className="headingsub my-8">
          6. Modification des mentions légales
        </h2>
        <p>
          L'éditeur se réserve le droit de modifier les présentes mentions
          légales à tout moment. Les utilisateurs sont invités à les consulter
          régulièrement.
        </p>
      </div>
    </main>
  );
}
