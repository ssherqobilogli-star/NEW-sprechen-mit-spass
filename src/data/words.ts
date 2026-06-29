// src/data/words.ts
import type { Word } from '../types';

export const WORDS: Word[] = [
  // A1 - Begrüßung
  { id: 'w1', german: 'Hallo', article: undefined, uzbek: 'Salom', pronunciation: 'HA-lo', example: 'Hallo, wie geht es dir?', exampleUz: 'Salom, qandaysan?', level: 'A1', topic: 'Begrüßung', category: 'Ausdruck' },
  { id: 'w2', german: 'Guten Morgen', article: undefined, uzbek: 'Xayrli tong', pronunciation: 'GUU-ten MOR-gen', example: 'Guten Morgen! Wie spät ist es?', exampleUz: 'Xayrli tong! Soat nechada?', level: 'A1', topic: 'Begrüßung', category: 'Ausdruck' },
  { id: 'w3', german: 'Tschüss', article: undefined, uzbek: 'Xayr', pronunciation: 'CHÜSS', example: 'Tschüss! Bis morgen.', exampleUz: 'Xayr! Ertaga ko'rishamiz.', level: 'A1', topic: 'Begrüßung', category: 'Ausdruck' },
  { id: 'w4', german: 'Danke', article: undefined, uzbek: 'Rahmat', pronunciation: 'DAN-ke', example: 'Danke für deine Hilfe.', exampleUz: 'Yordaming uchun rahmat.', level: 'A1', topic: 'Begrüßung', category: 'Ausdruck' },
  { id: 'w5', german: 'Bitte', article: undefined, uzbek: 'Iltimos', pronunciation: 'BI-te', example: 'Kannst du mir bitte helfen?', exampleUz: 'Menga yordam bera olasanmi, iltimos?', level: 'A1', topic: 'Begrüßung', category: 'Ausdruck' },
  { id: 'w6', german: 'Name', article: 'der', uzbek: 'Ism', pronunciation: 'NAA-me', example: 'Wie ist dein Name?', exampleUz: 'Isming nima?', level: 'A1', topic: 'Begrüßung', category: 'Nomen' },

  // A1 - Familie
  { id: 'w7', german: 'Mutter', article: 'die', uzbek: 'Ona', pronunciation: 'MU-ter', example: 'Meine Mutter kocht sehr gut.', exampleUz: 'Onam juda yaxshi pishiradi.', level: 'A1', topic: 'Familie', category: 'Nomen' },
  { id: 'w8', german: 'Vater', article: 'der', uzbek: 'Ota', pronunciation: 'FAA-ter', example: 'Mein Vater arbeitet im Büro.', exampleUz: 'Otam ofisda ishlaydi.', level: 'A1', topic: 'Familie', category: 'Nomen' },
  { id: 'w9', german: 'Kind', article: 'das', uzbek: 'Bola', pronunciation: 'KINT', example: 'Das Kind spielt im Garten.', exampleUz: 'Bola bog'da o'ynaydi.', level: 'A1', topic: 'Familie', category: 'Nomen' },
  { id: 'w10', german: 'Bruder', article: 'der', uzbek: 'Aka / Uka', pronunciation: 'BRUU-der', example: 'Mein Bruder ist fünf Jahre alt.', exampleUz: 'Ukam besh yoshda.', level: 'A1', topic: 'Familie', category: 'Nomen' },
  { id: 'w11', german: 'Schwester', article: 'die', uzbek: 'Opa / Singil', pronunciation: 'SHVES-ter', example: 'Meine Schwester heißt Anna.', exampleUz: 'Singlimning ismi Anna.', level: 'A1', topic: 'Familie', category: 'Nomen' },
  { id: 'w12', german: 'Familie', article: 'die', uzbek: 'Oila', pronunciation: 'fa-MEE-lie', example: 'Ich liebe meine Familie.', exampleUz: 'Men oilamni sevaman.', level: 'A1', topic: 'Familie', category: 'Nomen' },

  // A1 - Essen
  { id: 'w13', german: 'Brot', article: 'das', uzbek: 'Non', pronunciation: 'BROOT', example: 'Ich esse jeden Morgen Brot.', exampleUz: 'Men har kuni ertalab non yeyman.', level: 'A1', topic: 'Essen', category: 'Nomen' },
  { id: 'w14', german: 'Wasser', article: 'das', uzbek: 'Suv', pronunciation: 'VAS-ser', example: 'Ich trinke viel Wasser.', exampleUz: 'Men ko'p suv ichaman.', level: 'A1', topic: 'Essen', category: 'Nomen' },
  { id: 'w15', german: 'Milch', article: 'die', uzbek: 'Sut', pronunciation: 'MILCH', example: 'Kinder trinken gern Milch.', exampleUz: 'Bolalar sut ichishni yaxshi ko'rishadi.', level: 'A1', topic: 'Essen', category: 'Nomen' },
  { id: 'w16', german: 'Apfel', article: 'der', uzbek: 'Olma', pronunciation: 'AP-fel', example: 'Der Apfel ist rot und süß.', exampleUz: 'Olma qizil va shirin.', level: 'A1', topic: 'Essen', category: 'Nomen' },
  { id: 'w17', german: 'Fleisch', article: 'das', uzbek: 'Go'sht', pronunciation: 'FLYSH', example: 'Ich esse gern Fleisch.', exampleUz: 'Men go'sht yeyishni yaxshi ko'raman.', level: 'A1', topic: 'Essen', category: 'Nomen' },
  { id: 'w18', german: 'Ei', article: 'das', uzbek: 'Tuxum', pronunciation: 'AY', example: 'Ich esse zum Frühstück ein Ei.', exampleUz: 'Nonushtada bitta tuxum yeyman.', level: 'A1', topic: 'Essen', category: 'Nomen' },

  // A1 - Farben
  { id: 'w19', german: 'rot', article: undefined, uzbek: 'qizil', pronunciation: 'ROOT', example: 'Das Auto ist rot.', exampleUz: 'Mashina qizil.', level: 'A1', topic: 'Farben', category: 'Adjektiv' },
  { id: 'w20', german: 'blau', article: undefined, uzbek: 'ko'k', pronunciation: 'BLOW', example: 'Der Himmel ist blau.', exampleUz: 'Osmon ko'k.', level: 'A1', topic: 'Farben', category: 'Adjektiv' },
  { id: 'w21', german: 'grün', article: undefined, uzbek: 'yashil', pronunciation: 'GRÜÜN', example: 'Das Gras ist grün.', exampleUz: 'O't yashil.', level: 'A1', topic: 'Farben', category: 'Adjektiv' },
  { id: 'w22', german: 'gelb', article: undefined, uzbek: 'sariq', pronunciation: 'GELP', example: 'Die Banane ist gelb.', exampleUz: 'Banan sariq.', level: 'A1', topic: 'Farben', category: 'Adjektiv' },
  { id: 'w23', german: 'schwarz', article: undefined, uzbek: 'qora', pronunciation: 'SHVARTS', example: 'Die Katze ist schwarz.', exampleUz: 'Mushuk qora.', level: 'A1', topic: 'Farben', category: 'Adjektiv' },
  { id: 'w24', german: 'weiß', article: undefined, uzbek: 'oq', pronunciation: 'VAYS', example: 'Der Schnee ist weiß.', exampleUz: 'Qor oq.', level: 'A1', topic: 'Farben', category: 'Adjektiv' },

  // A1 - Zahlen
  { id: 'w25', german: 'eins', article: undefined, uzbek: 'bir', pronunciation: 'AYNS', example: 'Ich habe nur eins.', exampleUz: 'Menda faqat bittasi bor.', level: 'A1', topic: 'Zahlen', category: 'Zahl' },
  { id: 'w26', german: 'zwei', article: undefined, uzbek: 'ikki', pronunciation: 'TSVAY', example: 'Ich habe zwei Brüder.', exampleUz: 'Menda ikkita aka-uka bor.', level: 'A1', topic: 'Zahlen', category: 'Zahl' },
  { id: 'w27', german: 'drei', article: undefined, uzbek: 'uch', pronunciation: 'DRAY', example: 'Drei plus zwei ist fünf.', exampleUz: 'Uch qo'shib ikki besh.', level: 'A1', topic: 'Zahlen', category: 'Zahl' },
  { id: 'w28', german: 'zehn', article: undefined, uzbek: 'o'n', pronunciation: 'TSEYN', example: 'Ich bin zehn Jahre alt.', exampleUz: 'Men o'n yoshdaman.', level: 'A1', topic: 'Zahlen', category: 'Zahl' },
  { id: 'w29', german: 'hundert', article: undefined, uzbek: 'yuz', pronunciation: 'HUN-dert', example: 'Das kostet hundert Euro.', exampleUz: 'Bu yuz evro turadi.', level: 'A1', topic: 'Zahlen', category: 'Zahl' },
  { id: 'w30', german: 'Nummer', article: 'die', uzbek: 'Raqam', pronunciation: 'NU-mer', example: 'Was ist deine Telefonnummer?', exampleUz: 'Telefon raqaming nima?', level: 'A1', topic: 'Zahlen', category: 'Nomen' },

  // A1 - Tiere
  { id: 'w31', german: 'Hund', article: 'der', uzbek: 'It', pronunciation: 'HUNT', example: 'Der Hund bellt laut.', exampleUz: 'It baland ovozda vovullaydi.', level: 'A1', topic: 'Tiere', category: 'Nomen' },
  { id: 'w32', german: 'Katze', article: 'die', uzbek: 'Mushuk', pronunciation: 'KAT-se', example: 'Die Katze schläft auf dem Sofa.', exampleUz: 'Mushuk divanida uxlaydi.', level: 'A1', topic: 'Tiere', category: 'Nomen' },
  { id: 'w33', german: 'Vogel', article: 'der', uzbek: 'Qush', pronunciation: 'FOO-gel', example: 'Der Vogel singt am Morgen.', exampleUz: 'Qush ertalab sayraydi.', level: 'A1', topic: 'Tiere', category: 'Nomen' },
  { id: 'w34', german: 'Fisch', article: 'der', uzbek: 'Baliq', pronunciation: 'FISH', example: 'Der Fisch schwimmt im Wasser.', exampleUz: 'Baliq suvda suzadi.', level: 'A1', topic: 'Tiere', category: 'Nomen' },
  { id: 'w35', german: 'Pferd', article: 'das', uzbek: 'Ot', pronunciation: 'PFERT', example: 'Das Pferd läuft sehr schnell.', exampleUz: 'Ot juda tez yuguradi.', level: 'A1', topic: 'Tiere', category: 'Nomen' },
  { id: 'w36', german: 'Kuh', article: 'die', uzbek: 'Sigir', pronunciation: 'KUU', example: 'Die Kuh gibt uns Milch.', exampleUz: 'Sigir bizga sut beradi.', level: 'A1', topic: 'Tiere', category: 'Nomen' },

  // A1 - Körper
  { id: 'w37', german: 'Kopf', article: 'der', uzbek: 'Bosh', pronunciation: 'KOPF', example: 'Mein Kopf tut weh.', exampleUz: 'Boshim og'riydi.', level: 'A1', topic: 'Körper', category: 'Nomen' },
  { id: 'w38', german: 'Hand', article: 'die', uzbek: 'Qo'l', pronunciation: 'HANT', example: 'Ich wasche meine Hände.', exampleUz: 'Men qo'llarimni yuvaman.', level: 'A1', topic: 'Körper', category: 'Nomen' },
  { id: 'w39', german: 'Auge', article: 'das', uzbek: 'Ko'z', pronunciation: 'OW-ge', example: 'Sie hat blaue Augen.', exampleUz: 'Uning ko'zlari ko'k.', level: 'A1', topic: 'Körper', category: 'Nomen' },
  { id: 'w40', german: 'Mund', article: 'der', uzbek: 'Og'iz', pronunciation: 'MUNT', example: 'Ich putze jeden Tag die Zähne.', exampleUz: 'Men har kuni tishlarimni tozalayman.', level: 'A1', topic: 'Körper', category: 'Nomen' },
  { id: 'w41', german: 'Nase', article: 'die', uzbek: 'Burun', pronunciation: 'NAA-ze', example: 'Die Nase ist kalt.', exampleUz: 'Burun sovuq.', level: 'A1', topic: 'Körper', category: 'Nomen' },
  { id: 'w42', german: 'Ohr', article: 'das', uzbek: 'Quloq', pronunciation: 'OOR', example: 'Ich höre mit den Ohren.', exampleUz: 'Men quloqlarim bilan eshitaman.', level: 'A1', topic: 'Körper', category: 'Nomen' },

  // A1 - Kleidung
  { id: 'w43', german: 'Hemd', article: 'das', uzbek: 'Ko'ylak (erkaklar)', pronunciation: 'HEMT', example: 'Er trägt ein weißes Hemd.', exampleUz: 'U oq ko'ylak kiygan.', level: 'A1', topic: 'Kleidung', category: 'Nomen' },
  { id: 'w44', german: 'Hose', article: 'die', uzbek: 'Shim', pronunciation: 'HOO-ze', example: 'Die Hose ist zu groß.', exampleUz: 'Shim juda katta.', level: 'A1', topic: 'Kleidung', category: 'Nomen' },
  { id: 'w45', german: 'Schuhe', article: undefined, uzbek: 'Poyabzal', pronunciation: 'SHUU-e', example: 'Meine Schuhe sind neu.', exampleUz: 'Mening poyabzallarim yangi.', level: 'A1', topic: 'Kleidung', category: 'Nomen' },
  { id: 'w46', german: 'Jacke', article: 'die', uzbek: 'Jacket / Kurta', pronunciation: 'YAK-e', example: 'Ich brauche eine warme Jacke.', exampleUz: 'Menga issiq jacket kerak.', level: 'A1', topic: 'Kleidung', category: 'Nomen' },
  { id: 'w47', german: 'Kleid', article: 'das', uzbek: 'Ko'ylak (ayollar)', pronunciation: 'KLAYT', example: 'Das Kleid ist sehr schön.', exampleUz: 'Ko'ylak juda chiroyli.', level: 'A1', topic: 'Kleidung', category: 'Nomen' },
  { id: 'w48', german: 'Mütze', article: 'die', uzbek: 'Shapka', pronunciation: 'MÜT-se', example: 'Im Winter trage ich eine Mütze.', exampleUz: 'Qishda shapka kiyaman.', level: 'A1', topic: 'Kleidung', category: 'Nomen' },

  // A1 - Wetter
  { id: 'w49', german: 'Sonne', article: 'die', uzbek: 'Quyosh', pronunciation: 'ZON-e', example: 'Die Sonne scheint heute hell.', exampleUz: 'Bugun quyosh yorqin porlaydi.', level: 'A1', topic: 'Wetter', category: 'Nomen' },
  { id: 'w50', german: 'Regen', article: 'der', uzbek: 'Yomg'ir', pronunciation: 'REY-gen', example: 'Es regnet seit heute Morgen.', exampleUz: 'Bugun ertalabdan yomg'ir yog'yapti.', level: 'A1', topic: 'Wetter', category: 'Nomen' },
  { id: 'w51', german: 'Schnee', article: 'der', uzbek: 'Qor', pronunciation: 'SHNEY', example: 'Im Winter fällt viel Schnee.', exampleUz: 'Qishda ko'p qor yog'adi.', level: 'A1', topic: 'Wetter', category: 'Nomen' },
  { id: 'w52', german: 'Wind', article: 'der', uzbek: 'Shamol', pronunciation: 'VINT', example: 'Der Wind ist heute sehr stark.', exampleUz: 'Bugun shamol juda kuchli.', level: 'A1', topic: 'Wetter', category: 'Nomen' },
  { id: 'w53', german: 'warm', article: undefined, uzbek: 'issiq', pronunciation: 'VARM', example: 'Das Wetter ist heute warm.', exampleUz: 'Bugun havo issiq.', level: 'A1', topic: 'Wetter', category: 'Adjektiv' },
  { id: 'w54', german: 'kalt', article: undefined, uzbek: 'sovuq', pronunciation: 'KALT', example: 'Es ist heute sehr kalt draußen.', exampleUz: 'Bugun tashqarida juda sovuq.', level: 'A1', topic: 'Wetter', category: 'Adjektiv' },

  // A1 - Berufe
  { id: 'w55', german: 'Arzt', article: 'der', uzbek: 'Shifokor (erkak)', pronunciation: 'ARTST', example: 'Der Arzt untersucht den Patienten.', exampleUz: 'Shifokor bemorni tekshiradi.', level: 'A1', topic: 'Berufe', category: 'Nomen' },
  { id: 'w56', german: 'Lehrerin', article: 'die', uzbek: 'O'qituvchi (ayol)', pronunciation: 'LEY-re-rin', example: 'Die Lehrerin erklärt die Aufgabe.', exampleUz: 'O'qituvchi topshiriqni tushuntiradi.', level: 'A1', topic: 'Berufe', category: 'Nomen' },
  { id: 'w57', german: 'Koch', article: 'der', uzbek: 'Oshpaz (erkak)', pronunciation: 'KOKH', example: 'Der Koch kocht leckeres Essen.', exampleUz: 'Oshpaz mazali taom pishiradi.', level: 'A1', topic: 'Berufe', category: 'Nomen' },
  { id: 'w58', german: 'Polizist', article: 'der', uzbek: 'Politsiyachi', pronunciation: 'po-li-TSIST', example: 'Der Polizist hilft den Menschen.', exampleUz: 'Politsiyachi odamlarga yordam beradi.', level: 'A1', topic: 'Berufe', category: 'Nomen' },
  { id: 'w59', german: 'Ingenieur', article: 'der', uzbek: 'Muhandis', pronunciation: 'in-zhe-NYÖR', example: 'Er ist Ingenieur bei einer Firma.', exampleUz: 'U bir firmada muhandis.', level: 'A1', topic: 'Berufe', category: 'Nomen' },
  { id: 'w60', german: 'Beruf', article: 'der', uzbek: 'Kasb', pronunciation: 'be-RUUF', example: 'Was ist dein Beruf?', exampleUz: 'Kasbingiz nima?', level: 'A1', topic: 'Berufe', category: 'Nomen' },
];

export function getWordsByLevel(level: string): Word[] {
  return WORDS.filter(w => w.level === level);
}

export function getWordsByTopic(topic: string): Word[] {
  return WORDS.filter(w => w.topic === topic);
}

export function getTopicsByLevel(level: string): string[] {
  return [...new Set(WORDS.filter(w => w.level === level).map(w => w.topic))];
}

export function getRandomWords(count: number, level?: string): Word[] {
  const pool = level ? WORDS.filter(w => w.level === level) : WORDS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}