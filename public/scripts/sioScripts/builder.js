export function buildData() {
    let section = "apSection";

    build(section,
        "Découvertes des ressources numériques",
        "Le contexte proposé est celui du lycée VHB. Il s’agit de découvrir l’environnement technologique du lycée VHB.",
        "Découverte de l’application web GLPI. Découverte des principes de base de la communication en réseau. Correction d’anomalies et d’améliorations mineures du site web SIO.",
        "B1.1 Gérer le patrimoine informatique",
        "https://drive.google.com/drive/folders/1ZJv9wq_BTBKzGvLJRTtGUaKPJyt7hmOP?usp=sharing");

    build(section,
        "Développement site web SIO VHB",
        "Atelier de professionnalisation de découverte du site web de la section SIO du lycée VHB et de prise en charge de corrections et d’évolutions simples.",
        "L’objectif de la mission 1 est de découvrir le langage HTML pour structurer les pages web.<br><br>On procédera en 2 temps : <br>– observation de l’arborescence du site web et des éléments HTML avec prise en main de l’inspecteur embarqué dans les navigateurs <br>– mise en action rapide avec prise en charge de demandes d’évolutions sur le site web Ce premier site web comporte uniquement deux pages statiques avec des règles de style simples.",
        "B1.3 Développer la présence en ligne de l’organisation <br>B1.2 Répondre aux incidents et aux demandes d’assistance et d’évolution",
        "https://drive.google.com/drive/folders/1EqQYk4JsuZooAsx5uo0nekD29L3uWfWu?usp=sharing");

    build(section,
        "Formation à WordPress",
        "Des professeurs du lycée Basch ont constaté que beaucoup de leurs élèves et étudiants ne connaissaient pas ou ne maîtrisaient pas certains logiciels pourtant nécessaires à leurs apprentissages. Ils s’adressent à vous afin d’accompagner ces élèves dans leur formation.",
        "Former les élèves et étudiants aux outils nécessaires pendant une séance sur poste informatique.",
        "B1.4 Travailler en mode projet<br>B1.5 Mettre à disposition des utilisateurs un service informatique (orienté utilisateurs)<br>B1 .6 Organiser son développement professionnel<br>B3 .1 Protéger les données à caractère personnel",
        "https://drive.google.com/drive/folders/1WkLQw7ghtA5wd6B6PG2NPqxnBKkBG_Tn?usp=sharing");

    build(section,
        "Présentation métier : Développeur Informatique",
        "Des professionnels du numérique viennent vous présenter leur métier.",
        "Réalisation de productions liées à l’évènement : fiches personnelles métiers et questionnement à préparer.",
        "B1.3 Organiser son développement professionnel<br>B3.1 Protéger les données à caractère personnel",
        "https://drive.google.com/drive/folders/1IrHqDCqQKIUMmvZv2lAj6WQ3FfOSvgj9?usp=sharing");

    build(section,
        "Mise en place d'une infrastructure virtuelle",
        "Atelier de professionnalisation visant à la mise en place d’une maquette virtuelle de l’infrastructure systèmes et réseaux du laboratoire GSB.",
        "L’objectif de cet atelier est de constituer une maquette virtuelle de l’infrastructure systèmes et réseaux du laboratoire GSB. Les hôtes de cette infrastructure, serveurs, postes clients et routeur seront des machines virtuelles gérées par VirtualBox. Cette maquette sera documentée et validée au niveau :<br>– Des services réseau, routage et NAT,<br>– Des services DNS, Web et base de données offerts par les serveurs,</br>– De la navigation web sur des hôtes Internet",
        "B1.1 – Gérer le patrimoine informatique<br>B1.2 – Répondre aux incidents et aux demandes d’assistance des utilisateurs<br>B1.5 – Mettre à disposition des utilisateurs un service informatique",
        "https://drive.google.com/drive/folders/1pwKgtzhN9Nomz_H_ystyKJo6PEgI8mQ9?usp=sharing");

    build(section,
        "Portfolio",
        "Le portfolio ou portefeuille de compétences professionnelles trace votre parcours de professionnalisation et synthétise vos réalisations professionnelles et les compétences mobilisées. Ce support est obligatoire aux épreuves finales du BTS SIO.",
        "Mettre en œuvre votre portfolio ou portefeuille de compétences professionnelles.",
        "B1.6 Organiser son développement professionnel<br>B3.1 Protéger les données à caractère personnel",
        "http://www.alexandreboutinaud.fr");
}

function build(sectionId, titre, contexte, missions, competences, productions) {
    let parent = document.querySelector(`#${sectionId} .dataSection`);

    let html = `<div class="w-full h-full p-5 bg-white cursor-pointer shadow-around rounded-3xl data">
                    <div class="flex items-center justify-between">
                        <div class="flex font-cleanBold gap-x-2">
                            <svg class="w-6 text-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            </svg>
                            <span>${titre}</span>
                        </div>

                        <svg class="w-6 arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div class="flex-col hidden cursor-default content">
                        <div class="mt-5"></div>
                        <span><span class="font-cleanBold">Contexte : </span>${contexte}</span>
                        <span><span class="font-cleanBold">Missions : </span>${missions}</span>
                        <div class="flex flex-col my-5">
                            <span class="font-cleanBold">Compétences :</span>
                            ${competences}
                        </div>

                        <a class="p-2 text-center text-white duration-500 ease-in-out transform rounded-xl shadow-around bg-sun font-cleanBold w-max hover:scale-95" target="_blank" href="${productions}">Productions</a>
                    </div>
                </div>`;

    parent.insertAdjacentHTML("beforeend", html);
}