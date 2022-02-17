/**
 * Build data sections
 */
export function buildData() {
    let section = "apSection";

    build(section,
        "Découvertes des ressources numériques",
        "Le contexte proposé est celui du lycée VHB. Il s’agit de découvrir l’environnement technologique du lycée VHB.",
        "Découverte de l’application web GLPI. Découverte des principes de base de la communication en réseau. Correction d’anomalies et d’améliorations mineures du site web SIO.", ["B1.1 Gérer le patrimoine informatique"],
        "https://drive.google.com/drive/folders/1ZJv9wq_BTBKzGvLJRTtGUaKPJyt7hmOP?usp=sharing");

    build(section,
        "Développement site web SIO VHB",
        "Atelier de professionnalisation de découverte du site web de la section SIO du lycée VHB et de prise en charge de corrections et d’évolutions simples.",
        "L’objectif de la mission 1 est de découvrir le langage HTML pour structurer les pages web.<br><br>On procédera en 2 temps : <br>– observation de l’arborescence du site web et des éléments HTML avec prise en main de l’inspecteur embarqué dans les navigateurs <br>– mise en action rapide avec prise en charge de demandes d’évolutions sur le site web Ce premier site web comporte uniquement deux pages statiques avec des règles de style simples.", ["B1.3 Développer la présence en ligne de l’organisation", "B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution"],
        "https://drive.google.com/drive/folders/1EqQYk4JsuZooAsx5uo0nekD29L3uWfWu?usp=sharing");

    build(section,
        "Formation à WordPress",
        "Des professeurs du lycée Basch ont constaté que beaucoup de leurs élèves et étudiants ne connaissaient pas ou ne maîtrisaient pas certains logiciels pourtant nécessaires à leurs apprentissages. Ils s’adressent à vous afin d’accompagner ces élèves dans leur formation.",
        "Former les élèves et étudiants aux outils nécessaires pendant une séance sur poste informatique.", ["B1.4 Travailler en mode projet", "B1.5 Mettre à disposition des utilisateurs un service informatique (orienté utilisateurs)", "B1 .6 Organiser son développement professionnel", "B3 .1 Protéger les données à caractère personnel"],
        "https://drive.google.com/drive/folders/1WkLQw7ghtA5wd6B6PG2NPqxnBKkBG_Tn?usp=sharing");

    build(section,
        "Présentation métier : Développeur Informatique",
        "Des professionnels du numérique viennent vous présenter leur métier.",
        "Réalisation de productions liées à l’évènement : fiches personnelles métiers et questionnement à préparer.", ["B1.3 Organiser son développement professionnel", "B3.1 Protéger les données à caractère personnel"],
        "https://drive.google.com/drive/folders/1IrHqDCqQKIUMmvZv2lAj6WQ3FfOSvgj9?usp=sharing");

    build(section,
        "Mise en place d'une infrastructure virtuelle",
        "Atelier de professionnalisation visant à la mise en place d’une maquette virtuelle de l’infrastructure systèmes et réseaux du laboratoire GSB.",
        "L’objectif de cet atelier est de constituer une maquette virtuelle de l’infrastructure systèmes et réseaux du laboratoire GSB. Les hôtes de cette infrastructure, serveurs, postes clients et routeur seront des machines virtuelles gérées par VirtualBox. Cette maquette sera documentée et validée au niveau :<br>– Des services réseau, routage et NAT,<br>– Des services DNS, Web et base de données offerts par les serveurs,</br>– De la navigation web sur des hôtes Internet", ["B1.1 – Gérer le patrimoine informatique", "B1.2 – Répondre aux incidents et aux demandes d’assistance des utilisateurs", "B1.5 – Mettre à disposition des utilisateurs un service informatique"],
        "https://drive.google.com/drive/folders/1pwKgtzhN9Nomz_H_ystyKJo6PEgI8mQ9?usp=sharing");

    build(section,
        "Portfolio",
        "Le portfolio ou portefeuille de compétences professionnelles trace votre parcours de professionnalisation et synthétise vos réalisations professionnelles et les compétences mobilisées. Ce support est obligatoire aux épreuves finales du BTS SIO.",
        "Mettre en œuvre votre portfolio ou portefeuille de compétences professionnelles.", ["B1.6 Organiser son développement professionnel", "B3.1 Protéger les données à caractère personnel"],
        "http://www.alexandreboutinaud.fr");

    build(section,
        "Découverte de la gestion de projet",
        "Pour assurer les missions qui lui sont confiées, l’étudiant en BST SIO travaille dans un environnement de gestion de projet, en mode projet, notamment lors des AP. Il doit faire preuve d’initiative, communique en permanence avec les autres membres de l’équipe projet, des membres de l’organisation ou des partenaires, dans le cadre d’un travail collaboratif ; et rend compte régulièrement à son responsable hiérarchique ou fonctionnel tout au long de l’état d’avancement du projet. Par ailleurs, les projets doivent être conduits dans le respect des contraintes et contingences, y compris organisationnelles et  juridiques. Dans ce cadre, les étudiants sont amenés à utiliser des outils de gestion et de planification de projet, de collaboration, et des méthodes de conduite de projet.",
        "Découverte de la gestion de projet.", ["B1.3 Organiser son développement professionne", "B3.1 Protéger les données à caractère personnel", "B1.4 Travailler en mode projet"],
        null);

    build(section,
        "Déploiement d'une application web : HistoStage",
        "Lors de cet atelier de professionnalisation, nous devions rajouter des fonctionnalités liées à l’application web HistoStage.",
        "Vous êtes mandaté par le RSI de VHB pour mettre en place un serveur web et de transfert de fichiers virtuel sécurisé permettant à l’équipe de développement de publier leur application web dynamique développée en local à partir de Visual Studio Code.", ["B1.1 Gérer le patrimoine informatique", "B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution", "B1.4 Travailler en mode projet", "B1.5 Mettre à disposition des utilisateurs un service informatique", "B1.6 Organiser son développement professionnel", "B3.1 Protéger les données à caractère personnel", "B3.2 Préserver l’identité numérique de l’organisation", "B3.4 Garantir la disponibilité, l’intégrité et la confidentialité des services informatiques et des données de l’organisation face aux cyberattaques", "B3.5 A – SLAM – Assurer la cybersécurité d’une infrastructure réseau, d’un système, d’un service"],
        "https://drive.google.com/drive/folders/1BcYd3QRgaNpr3V43dAIZ6O0pY5hZGRD_");

    build(section,
        "Labtainers : Formation Cyber Sécurité",
        "La DSSI vous demande en tant que membre de l’équipe junior de la CSSI du lycée de monter en compétences en réalisant des labs proposés par le Center for Cybersecurity and Cyber Operations en mettant en œuvre les exercices de la MV Labtainer.",
        "Découvrir les vulnérabilités, les mesures techniques et les bonnes pratiques de la cybersécurité des services informatiques.", ["B1.4 Travailler en mode projet", "B1.5 Mettre à disposition des utilisateurs un service informatique", "B1.6 Organiser son développement professionnel", "B3.1 Protéger les données à caractère personnel", "B3.2 Préserver l’identité numérique de l’organisation", "B3.4 Garantir la disponibilité, l’intégrité et la confidentialité des services informatiques et des données de l’organisation face aux cyberattaques", "B3.5 A – SLAM – Assurer la cybersécurité d’une infrastructure réseau, d’un système, d’un service"],
        "https://drive.google.com/drive/folders/1T3cZwjYMKklbDqj3LVA-HlgXDaZKQzHb?usp=sharing");

    build(section,
        "Développement d'application graphique (ttinker) en Python",
        "En partant d’une application graphique de facturation client, mise à disposition par l’un de nos professeurs, nous devions créer le code permettant l’interaction entre l’utilisateur et la base de données. En passant par la recherche du client dans la base, la création d’articles, jusqu’à l’ajout d’une nouvelle facture. Nous avions également créé la structure de la base de données (Serveur XAMPP avec BDD MariaDB).",
        "/", ["B1.4 Travailler en mode projet", "B1.5 Mettre à disposition des utilisateurs un service informatique", "B1.6 Organiser son développement professionnel", "B3.4 Garantir la disponibilité, l’intégrité et la confidentialité des services informatiques et des données de l’organisation face aux cyberattaques", "B3.5 A – SLAM – Assurer la cybersécurité d’une infrastructure réseau, d’un système, d’un service"],
        "https://drive.google.com/drive/folders/16ERRbSA-UT5zWntbPCxcSdrEM25QuhuV?usp=sharing");

    build(section,
        "Panneau d'administration de gitlab siovhb",
        "L'application web gitlab propose pour tout utilisateur ayant le rôle administrateur un panneau d'administration où cet administrateur peut intervenir sur l'état des projets et des utilisateurs de la plateforme. Dans le contexte de la section STS-SIO du lycée VHB, certaines opérations sont à mener sur plusieurs projets ou plusieurs utilisateurs. Les opérations unitaires proposées par l'application web gitlab se révèlent donc très fastidieuses dans ce contexte.",
        "Une solution consiste à s'appuyer sur l'API-Rest proposée par gitlab pour développer une application web spécifique permettant de sélectionner rapidement les ressources et d'appliquer la même action sur ces ressources.", ["B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution", "B1.4 Travailler en mode projet", "B1.6 Organiser son développement professionnel", "B2.1. Conception et développement d’une solution applicative", "B2.3. Gestion des données"],
        "https://drive.google.com/drive/folders/1gCeJNd8tNqYFWHnWWKGHx1wCtLZSHKOF?usp=sharing");

    build(section,
        "Tests de vulnérabilités et d'intrusions",
        "L'application web de suivi des fiches de frais est mise à disposition aux visiteurs médicaux, acteurs internes de GSB (laboratoire pharmaceutique). Les équipes de développement de l'organisation GSB travaillent en mode agile. Les chefs de projet ont pour mission d'intégrer davantage les préoccupations de sécurité depuis la formation dispensée aux équipes par l'organisme de formation OctoAcademy sur les principes de sécurité dès la conception.",
        "Validation des exigences de sécurité en se basant sur les exigences fonctionnelles définies sous forme de récits utilisateur.", ["B3.5b Assurer la cybersécurité d’une solution applicative et de son développement"],
        "https://drive.google.com/drive/folders/1TRysqMtr2FxYjdadVEM_ReOtvvoplIkL?usp=sharing");

    section = "b1Section";

    build(section,
        "Jeux Python",
        "Développement d'un jeu sous Python en mode console.",
        "/", ["B1.4 Travailler en mode projet"],
        "https://drive.google.com/drive/folders/19R9C2L1QSbo8MzSJLT-cU8pqZ-vEpKtF?usp=sharing");

    build(section,
        "Bases du réseau",
        "Tester et documenter une connexion au réseau LaboSIO.",
        "Modélisation du schéma réseau de la section SIO du BTS sur le logiciel PacketTracer et connexion physique au réseau du LaboSIO.", ["B1.2 Répondre aux incidents et aux demandes d'assistance et d'évolution"],
        "https://drive.google.com/drive/folders/1Siu_5_en6_nt__Sua88iA09VC9qw-cEk?usp=sharing");

    build(section,
        "Arborescence sous Windows 10",
        "Découverte et création d’arborescences en ligne de commande sous Windows 10.",
        "/", [],
        "https://drive.google.com/drive/folders/1UogDlK0M_q-3kcWk2uQ21sttpocJIB1k?usp=sharing");

    build(section,
        "Analyse de trames",
        "Analyse de trames Ethernet sous l’analyseur de trames Wireshark",
        "/", [],
        "https://drive.google.com/drive/folders/1ZCBuSp8xhjZu_a68pZ2IBjsrMZiJEHaf?usp=sharing");

    build(section,
        "Adresses IP et adresses MAC : le protocole ARP",
        "Analyse de trames ARP avec Wireshark.",
        "/", [],
        "https://drive.google.com/drive/folders/16QXm_xcimRO6r8D7PEVlhO58r_7JkbkA?usp=sharing");

    build(section,
        "Maintenance préventive",
        "Réalisation de scripts batch pour le nettoyage des partitions système sous W10.",
        "/", [],
        "https://drive.google.com/drive/folders/1tUpZO6eYKryYE_c50H0sDI4fLhFh60Uo?usp=sharing");

    build(section,
        "Langage commande Linux",
        "Gestion de partition d’un disque dur. Option de partage de fichiers sous VirtualBox (Windows 10). Découverte de l’arborescence Linux (redirections, filtres et tubes).",
        "/", [],
        "https://drive.google.com/drive/folders/1qlk1gQm42VsVoyM9FDNkvaJa06LUL8L8?usp=sharing");

    build(section,
        "PGI",
        "Mise en place d’un Progiciel de Gestion Intégré au sein d’une entreprise.",
        "Mise en place d'un serveur web qui hébergera un PGI (Odoo). Déterminer les applications à installer et d’assurer la continuité du service. Déterminer les droits des différents employés.", ["B1.1 Gérer le patrimoine informatique", "B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution", "B1.3 Développer la présence en ligne de l’organisation", "B1.4 Travailler en mode projet"],
        "https://drive.google.com/drive/folders/1Dv1hx2-c-2PRavhDT8U0M_AOcbz0S8I0?usp=sharing");

    build(section,
        "Veille technologique",
        "Décrire comment quels sont les moyens et outils mis en œuvre pour se tenir au courant des actualités en lien avec le tech.",
        "/", [],
        "https://drive.google.com/drive/folders/1piQGq67uayA_hctIjl6tj_L7Iq3DGmep?usp=sharing");

    section = "b2Section";

    build(section,
        "Programmes sous C#",
        "Initiation à la programmation orientée objet.",
        "/", ["B2.1. Conception et développement d’une solution applicative", "B2.3. Gestion des données"],
        "https://drive.google.com/drive/folders/1clBYcY8hDlk0f9aqBj5KNR1mqV2my-4_?usp=sharing");

    build(section,
        "Initiation aux expressions régulières",
        "Utiliser les expressions régulières dans le HTML pour permettre de sécuriser des formulaires.",
        "/", ["B2.1. Conception et développement d’une solution applicative", "B3.5b Assurer la cybersécurité d’une solution applicative et de son développement"],
        "https://drive.google.com/drive/folders/1GhWeivPjtlB3B2xYQI_esd4JpcN2ZUnr?usp=sharing");

    build(section,
        "Découverte du JavaScript",
        "/",
        "Gestion des événements, des types de liste et utilisation du format JSON.", ["B2.1. Conception et développement d’une solution applicative", "B2.3. Gestion des données"],
        "https://drive.google.com/drive/folders/1im75TjOZ3KdxB1-kbo6kzygBnxkPdbAY?usp=sharing");

    build(section,
        "Découverte et test de l'API-REST Gitlab",
        "/",
        "/", [],
        "https://drive.google.com/drive/folders/1v9jRhSfAPQSxzTNCvocPYO5B_9fNDdKK?usp=sharing");

    build(section,
        "PDO, débogage et tests unitaires",
        "Suite aux tests de sécurité réalisés sur l'application web de gestion des frais des visiteurs médicaux, il s'agit de mettre en œuvre certaines contre-mesures afin de prévenir les injections SQL.",
        "Appliquer les correctifs sur la classe PdoGsb pour contrer les injections SQL et les tester par l'interface utilisateur de l'application web. Mettre en place le débogueur PHP et les tests unitaires pour exprimer et vérifier au plus tôt les exigences attendues au niveau des méthodes de la classe PdoGsb.", ["B2.2 Concevoir et développer une solution applicative", "B3.5B Cybersécurisation d'une solution applicative et de son développement"],
        "https://drive.google.com/drive/folders/1-5Mlzjd0tuB2FKdhw8y1hwIcxih-TLC6?usp=sharing");

    build(section,
        "Prise en main de Git",
        "/",
        "Manipuler Git en lignes de commandes afin de version un programme.", ["B2.3. Gestion des données", "B1.4 Travailler en mode projet", "B1.6 Organiser son développement professionnel"],
        "https://drive.google.com/drive/folders/1UlXTm1yV8lkmqajyjU2OzTaZ2kBJXdEE?usp=sharing");

    build(section,
        "Gestion des données - SQL",
        "Dans l’environnement de test, déployer l’application web dynamique de GestCom pour mettre en évidence les failles de sécurité de type injections SQL puis mettre en œuvre les contre-mesures et/ou les bonnes pratiques de développement de solutions applicatives.",
        "/", ["B2.3.1	Exploiter des données à l’aide d’un langage de requêtes", "B2.3.2	Concevoir ou adapter une base de données", "B2.2.3	Analyser et corriger un dysfonctionnement", "B2.2.4	Elaborer et réaliser des tests des éléments mis à jour"],
        "https://drive.google.com/drive/folders/1SFAEOW5mBfXB44OFsvfEASxLPgIZw_7w?usp=sharing");

    build(section,
        "Injections SQL",
        "Dans l’environnement de test, déployer la base de gestcom puis réaliser les requêtes effectuées en cours.",
        "/", ["B2.3.1	Exploiter des données à l’aide d’un langage de requêtes", "B2.3.2	Concevoir ou adapter une base de données"],
        "https://drive.google.com/drive/folders/1zoRzwIgLpXYwf62GUVs1R-6v2nZ6I0fC?usp=sharing");
}

/**
 * Create a new data for the specified section
 * @param {string} sectionId 
 * @param {string} titre 
 * @param {string} contexte 
 * @param {string} missions 
 * @param {string} competences 
 * @param {string} productions 
 */
function build(sectionId, titre, contexte, missions, competences, productions) {
    let parent = document.querySelector(`#${sectionId} .dataSection`);

    let html = `<div class="w-full h-full card cursor-pointer p-2 data">
    
                    <div class="flex items-center justify-between header relative">

                        <div class="absolute inset-0 w-full rounded-t-customLg revealSection"></div>

                        <div class="flex items-center justify-center font-cleanBold gap-x-2 m-5">
                            <div class="h-full w-max relative flex items-center justify-start mr-7">
                                <svg class="w-6 h-6 absolute text-darkgray folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                </svg>
                            </div>
                            
                            <span class="title">${titre}</span>
                        </div>

                        <svg class="w-6 h-6 arrow m-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div class="flex-col hidden cursor-default content mb-5 mx-5 border-t border-gray-200">
                        <div class="mt-5"></div>
                        <span><span class="font-cleanBold">Contexte : </span>${contexte}</span>
                        <span><span class="font-cleanBold">Missions : </span>${missions}</span>
                        <div class="flex flex-col my-5">
                            <span class="font-cleanBold">Compétences :</span>
                            <ul class="list-disc ml-5">`;

    for (let i = 0; i < competences.length; i++) {
        html += `<li>${competences[i]}</li>`
    }

    html += `</ul></div>`;
    if (productions != null)
        html += `<a class="p-2 text-center text-white duration-500 ease-in-out transform rounded-xl shadow-around bg-darkgray font-cleanBold w-max hover:scale-95" target="_blank" href="${productions}">Productions</a></div></div>`;
    else
        html += `<div class="p-2 text-center text-white duration-500 rounded-xl shadow-around bg-gray-300 font-cleanBold w-max cursor-not-allowed">Productions</div></div></div>`;

    parent.insertAdjacentHTML("beforeend", html);
}