import {ConfigShape} from "../types"

export const goldlabelConfig: ConfigShape = {
    siteUrl: "https://divemalta.app/",
    siteTitle: "Malta Diving Holidays Guide",
    siteDescription: "Where to eat, sleep and dive",
    siteType: "listings",
    siteImage: "/jpg/malta.jpg",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@maltaoffice",
    siteTheme: "#FFFFFF",
    siteKeywords: "holidays, diving, malta",
    themes: [
        {
            title: "divemalta",
            primaryColor: "#FB0909",
            secondaryColor: "#CE0000",
        },
    ],
    contexts: {
        listings: {
            backofficeText: "Backoffice",
            icon: "books",
            booksNames: "Books",
            addListingText: "Add a new document",
        }
    },
    localeList: [
        "en", "de", "mt",
    ],
    localeMeta: {
        en: {
            default: "English",
            localised: "English",
        },
        de: {
            default: "German",
            localised: "Deutsch",
        },
        mt: {
            default: "Maltese",
            localised: "Malti",
        },
    },
}
