const NextI18Next = require('next-i18next').default
const ICU = require("i18next-icu");
const en = require("i18next-icu/locale-data/en");
const de = require("i18next-icu/locale-data/de");

const nextI18Next = new NextI18Next({ otherLanguages: ['de'] })

const icu = new ICU();
icu.addLocaleData(en);
icu.addLocaleData(de);
nextI18Next.i18n.use(icu);

module.exports = nextI18Next;
