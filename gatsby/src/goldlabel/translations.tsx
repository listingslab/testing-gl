export const getTranslation = (slug: string, locale: string) => {
    return translations[slug][locale]
}


export const translations: any = {
    siteTitle: {
        en: "Malta Diving Holidays Guide",
        de: "Tauchurlaubsführer für Malta",
        mt: "Gwida tal-Festi Malta għad-Diving",
    },
    siteTagline: {
        en: "Where to eat, sleep and dive in Malta",
        de: "Wo man auf Malta essen, schlafen und tauchen kann",
        mt: "Fejn tiekol, torqod u togħdos f'Malta",
    },

    toggleMore: {
        en: "More/Less",
        de: "More/Less",
        mt: "More/Less",
    },
    addToFavorites: {
        en: "Add to Favorites",
        de: "Zu den Favoriten hinzufügen",
        mt: "",
    },
    yes: {
        en: "Yes. Yes you should.",
        de: "Ja. Ja du solltest.",
        mt: "",
    },
    buyNow: {
        en: "Buy now",
        de: "Kaufe jetzt",
        mt: "",
    },
    less: {
        en: "Less",
        de: "Less",
        mt: "",
    },
    more: {
        en: "More",
        de: "More",
        mt: "",
    },
    buyFrom: {
        en: "Buy from",
        de: "Buy from",
        mt: "",
    },
    newTranlation: {
        en: "",
        de: "",
        mt: "",
    },
}
