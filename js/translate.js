const translations = {
    en: {
        tagline: `opens the doors to your <i class="gold-color">dream home</i>. From sun-kissed coastal <i class="gold-color">villas</i> to modern city <i class="gold-color">apartments</i>, every property is a masterpiece. Experience Montenegro’s finest living <br> <i class="gold-color"> — for those who live beyond ordinary</i>.`,
        feature1: `Find your <b>dream luxury villa</b> or hotel in Montenegro, designed to exceed your lifestyle expectations.`,
        feature2: `Sell your property with ease and confidence, handled by our <span class="highlight">expert real estate professionals</span>.`,
        feature3: `Rent stunning <i class="gold-color">homes</i> or exclusive spaces tailored to meet your luxury travel or living needs.`,
        contactUsHeading: `Contact`,
        contactUsDescription: `Looking for exquisite <b>luxury</b> properties or top-tier <b>real estate</b> services in Montenegro? <br><br> Whether you're <b>buying</b>, <b>selling</b>, or <b>renting</b> villas, hotels, or unique residences, we’ve got you covered. Our dedicated experts ensure seamless transactions and tailored solutions to match your specific needs. <b>Contact us today!</b>`,
        location: `Podgorica, Montenegro`,
    },
    me: {
        tagline: `otvara vrata vašeg <i class="gold-color">doma iz snova</i>. Od sunčanih primorskih <i class="gold-color">vila</i> do modernih gradskih <i class="gold-color">apartmana</i>, svaka nekretnina je remek-djelo. Iskusite najbolje životne stilove Crne Gore <br> <i class="gold-color"> — za one koji žive izvanrednim životom</i>.`,
        feature1: `Pronađite luksuznu <b>vilu</b> ili hotel iz snova u Crnoj Gori, dizajnirane da nadmaše vaša očekivanja.`,
        feature2: `Prodajte svoju nekretninu s lakoćom i povjerenjem uz pomoć naših <span class="highlight">stručnjaka za nekretnine</span>.`,
        feature3: `Iznajmljujte prekrasne <i class="gold-color">domove</i> ili ekskluzivne prostore prilagođene vašim luksuznim potrebama.`,
        contactUsHeading: `Kontakt`,
        contactUsDescription: `Tražite vrhunske <b>luksuzne</b> nekretnine ili usluge <b>nekretnina</b> u Crnoj Gori? <br><br> Bilo da <b>kupujete</b>, <b>prodajete</b> ili <b>iznajmljujete</b> vile, hotele ili jedinstvene rezidencije, tu smo za vas. Naši stručnjaci osiguravaju jednostavne transakcije i rješenja prilagođena vašim potrebama. <b>Kontaktirajte nas danas!</b>`,
        location: `Podgorica, Crna Gora`,
    },
    ru: {
        tagline: `oткрывает двери в <i class="gold-color">дом вашей мечты</i>. От солнечных прибрежных <i class="gold-color">вилл</i> до современных городских <i class="gold-color">квартир</i> — каждая недвижимость произведение искусства. Откройте для себя высший уровень жизни в Черногории <br> <i class="gold-color"> — для тех, кто живет за пределами обыденного</i>.`,
        feature1: `Найдите <b>роскошную виллу</b> или отель своей мечты в Черногории, разработанные чтобы превзойти ваши ожидания.`,
        feature2: `Продайте свою недвижимость с легкостью и уверенностью с помощью наших <span class="highlight">опытных профессионалов</span>.`,
        feature3: `Арендуйте великолепные <i class="gold-color">дома</i> или эксклюзивные пространства, соответствующие вашим потребностям в роскошном путешествии.`,
        contactUsHeading: `Контакты`,
        contactUsDescription: `Ищете элитные <b>недвижимости</b> или высококачественные услуги в Черногории? <br><br> Покупаете, <b>продаете</b> или <b>сдаете</b> виллы, отели или уникальные резиденции — мы к вашим услугам. Наши специалисты обеспечат легкие транзакции. <b>Свяжитесь с нами!</b>`,
        location: `Подгорица, Черногория`,
    },
};

function getLanguageFromUrl() {
    const urlParams = new URLSearchParams(window.location.search); 
    const lang = urlParams.get("lang"); 
    return lang || "en"; 
}

function switchLanguage(lang) {
    const langData = translations[lang];

    if (langData) {
        document.getElementById("tagline").innerHTML = langData.tagline;
        document.getElementById("feature1").innerHTML = langData.feature1;
        document.getElementById("feature2").innerHTML = langData.feature2;
        document.getElementById("feature3").innerHTML = langData.feature3;
        document.getElementById("contactUsHeading").innerHTML = langData.contactUsHeading;
        document.getElementById("contactUsDescription").innerHTML = langData.contactUsDescription;
        document.getElementById("location").innerHTML = langData.location;
    }
}

document.querySelectorAll(".menu-vertical a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const lang = event.target.getAttribute("data-lang"); 
        switchLanguage(lang); 

        const newUrl = `${window.location.pathname}?lang=${lang}`;
        window.history.replaceState(null, "", newUrl);

        const modal = document.querySelector(".modal-container");
        if (modal) {
            modal.classList.remove("modal-active"); 
        }
        
    });
});

const initialLanguage = getLanguageFromUrl();
switchLanguage(initialLanguage);