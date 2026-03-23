import { useEffect } from 'react';
import './App.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        const handleScroll = () => {
            const backTop = document.querySelector('.privacy-back-top');
            if (backTop) {
                if (window.scrollY > 300) {
                    backTop.classList.add('show');
                } else {
                    backTop.classList.remove('show');
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="privacy-policy-container">
            <div className="privacy-header">
                <div className="privacy-logo">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                </div>
                <h1>Politique de Confidentialité</h1>
                <div className="privacy-date">
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </div>
            </div>

            <div className="privacy-section">
                <h2>Introduction</h2>
                <p>La présente politique de confidentialité décrit comment Immovia collecte, utilise et protège vos données personnelles lorsque vous utilisez notre application mobile. Nous nous engageons à garantir que votre vie privée est protégée et que vos informations restent sécurisées.</p>
            </div>

            <div className="privacy-section">
                <h2>1. Données que nous collectons</h2>
                <p>Nous collectons les informations suivantes :</p>
                <ul className="privacy-list-icon">
                    <li>Informations d'identification : nom, prénom, adresse email, numéro de téléphone</li>
                    <li>Informations de profil : photo de profil (optionnel)</li>
                    <li>Informations sur les biens : photos, descriptions, prix, localisation</li>
                    <li>Données d'utilisation : interactions avec l'application, recherches effectuées</li>
                    <li>Données techniques : adresse IP, type d'appareil, version du système d'exploitation</li>
                </ul>
            </div>

            <div className="privacy-section">
                <h2>2. Comment nous utilisons vos données</h2>
                <p>Vos données sont utilisées pour :</p>
                <ul className="privacy-list-icon">
                    <li>Créer et gérer votre compte utilisateur</li>
                    <li>Vous permettre de publier des annonces immobilières</li>
                    <li>Faciliter la recherche de biens immobiliers</li>
                    <li>Vous envoyer des notifications concernant vos activités</li>
                    <li>Améliorer notre application et votre expérience utilisateur</li>
                    <li>Prévenir les fraudes et assurer la sécurité des transactions</li>
                    <li>Assurer le suivi de votre historique et de vos préférences</li>
                </ul>
            </div>

            <div className="privacy-section">
                <h2>3. Partage des données</h2>
                <p>Nous ne vendons pas vos données personnelles. Vos informations peuvent être partagées uniquement :</p>
                <ul className="privacy-list-icon">
                    <li>Avec d'autres utilisateurs dans le cadre des transactions immobilières (ex: contact entre propriétaire et locataire)</li>
                    <li>Pour respecter nos obligations légales</li>
                    <li>Avec votre consentement explicite</li>
                    <li>Avec nos partenaires techniques pour l'amélioration du service</li>
                </ul>
            </div>

            <div className="privacy-section">
                <h2>4. Sécurité des données</h2>
                <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles de pointe pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Vos données sont stockées sur des serveurs sécurisés, les communications sont cryptées et nous assurons une protection continue de vos informations.</p>
            </div>

            <div className="privacy-section">
                <h2>5. Conservation des données</h2>
                <p>Nous conservons vos données de manière sécurisée pour vous fournir nos services de façon continue et pour respecter nos obligations légales. Votre historique, vos annonces et vos informations restent accessibles dans votre compte pour assurer la continuité de votre expérience sur notre plateforme. Nous garantissons la protection et l'intégrité de vos données tout au long de votre utilisation de l'application.</p>
            </div>

            <div className="privacy-section">
                <h2>6. Accès à vos données</h2>
                <p>Vous avez le droit d'accéder à vos informations personnelles et de les consulter à tout moment via votre compte utilisateur. Vous pouvez également nous contacter pour obtenir des informations détaillées sur les données que nous détenons vous concernant. Nous nous engageons à répondre à toutes vos demandes dans les meilleurs délais.</p>
                <p style={{ marginTop: '12px' }}>Pour toute demande d'accès ou de rectification, veuillez accéder dans la page profil puis appuyer sur le crayon en haut à droite. Et pour l'effacement totale de votre compte merci de nous contacter via notre adresse email.</p>
            </div>

            <div className="privacy-section">
                <h2>7. Cookies et technologies similaires</h2>
                <p>Notre application utilise des technologies de stockage local pour améliorer votre expérience et conserver vos préférences. Ces technologies nous permettent de personnaliser votre navigation et de mémoriser vos paramètres pour faciliter votre utilisation quotidienne de l'application.</p>
            </div>

            <div className="privacy-section">
                <h2>8. Modifications de cette politique</h2>
                <p>Nous pouvons modifier cette politique de confidentialité de temps à autre pour l'améliorer ou nous conformer à l'évolution de la réglementation. Les modifications seront publiées dans l'application et, si elles sont significatives, nous vous en informerons par notification. Nous vous invitons à consulter régulièrement cette page.</p>
            </div>

            <div className="privacy-contact">
                <h3>9. Nous contacter</h3>
                <p><strong>📧 Email :</strong> gradingunza@gmail.com, l'administrateur technique</p>
                <p><strong>📍 Adresse :</strong> Kinshasa, République Démocratique du Congo</p>
                <p style={{ marginTop: '12px', fontSize: '13px', color: '#4a5568' }}>Notre équipe est à votre disposition pour vous accompagner.</p>
            </div>

            <div className="privacy-consent">
                <div className="privacy-consent-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <p>En utilisant Immovia, vous bénéficiez d'une protection totale de vos données et vous consentez à notre politique de confidentialité.</p>
            </div>

            <button className="privacy-back-top" onClick={scrollToTop}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5L12 19M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    );
};

export default PrivacyPolicy;