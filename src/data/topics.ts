// src/data/topics.ts
import type { Topic } from '../types';

export const TOPICS: Topic[] = [
  // A1
  { id: 't1', level: 'A1', order: 1, titleDe: 'Begrüßung und Vorstellung', titleUz: 'Salomlashish va tanishish', description: 'Wie heißen Sie? Erste Kontakte auf Deutsch.', icon: '👋', isLocked: false },
  { id: 't2', level: 'A1', order: 2, titleDe: 'Familie und Verwandte', titleUz: 'Oila va qarindoshlar', description: 'Mutter, Vater, Geschwister — die Familie beschreiben.', icon: '👨‍👩‍👧‍👦', isLocked: false },
  { id: 't3', level: 'A1', order: 3, titleDe: 'Zahlen und Mengen', titleUz: 'Sonlar va miqdorlar', description: 'Zahlen von 1 bis 1000 — zählen, rechnen, Preise nennen.', icon: '🔢', isLocked: false },
  { id: 't4', level: 'A1', order: 4, titleDe: 'Farben und Formen', titleUz: 'Ranglar va shakllar', description: 'Rot, blau, grün — Farben und Formen auf Deutsch.', icon: '🎨', isLocked: false },
  { id: 't5', level: 'A1', order: 5, titleDe: 'Essen und Trinken', titleUz: 'Taom va ichimliklar', description: 'Lebensmittel, Mahlzeiten und Lieblingsessen besprechen.', icon: '🍽️', isLocked: true },
  { id: 't6', level: 'A1', order: 6, titleDe: 'Tiere', titleUz: 'Hayvonlar', description: 'Haustiere und Wildtiere — Tiere auf Deutsch benennen.', icon: '🐾', isLocked: true },
  { id: 't7', level: 'A1', order: 7, titleDe: 'Körper und Gesundheit', titleUz: 'Tana va sog'liq', description: 'Körperteile und einfache Beschwerden beim Arzt.', icon: '🏥', isLocked: true },
  { id: 't8', level: 'A1', order: 8, titleDe: 'Kleidung und Mode', titleUz: 'Kiyim va moda', description: 'Was trägt man? Kleidungsstücke einkaufen und beschreiben.', icon: '👗', isLocked: true },
  { id: 't9', level: 'A1', order: 9, titleDe: 'Wetter und Jahreszeiten', titleUz: 'Ob-havo va fasllar', description: 'Wie ist das Wetter heute? Jahreszeiten und Klima.', icon: '🌤️', isLocked: true },
  { id: 't10', level: 'A1', order: 10, titleDe: 'Berufe und Arbeit', titleUz: 'Kasblar va ish', description: 'Was machst du beruflich? Typische Berufe vorstellen.', icon: '💼', isLocked: true },
  { id: 't11', level: 'A1', order: 11, titleDe: 'Wohnen und Zuhause', titleUz: 'Uy-joy va turar joy', description: 'Zimmer, Möbel und die eigene Wohnung beschreiben.', icon: '🏠', isLocked: true },
  { id: 't12', level: 'A1', order: 12, titleDe: 'Schule und Lernen', titleUz: 'Maktab va o'qish', description: 'Fächer, Schulsachen und der Schulalltag auf Deutsch.', icon: '🎒', isLocked: true },
  { id: 't13', level: 'A1', order: 13, titleDe: 'Transport und Verkehr', titleUz: 'Transport va harakatlanish', description: 'Mit Bus, Bahn oder Auto — Verkehrsmittel auf Deutsch.', icon: '🚌', isLocked: true },
  { id: 't14', level: 'A1', order: 14, titleDe: 'Einkaufen und Preise', titleUz: 'Xarid qilish va narxlar', description: 'Im Supermarkt, auf dem Markt — bezahlen und fragen.', icon: '🛒', isLocked: true },
  { id: 't15', level: 'A1', order: 15, titleDe: 'Freizeit und Hobbys', titleUz: 'Bo'sh vaqt va hobbilar', description: 'Was machst du in der Freizeit? Hobbys und Sport.', icon: '⚽', isLocked: true },

  // A2
  { id: 't16', level: 'A2', order: 1, titleDe: 'Alltag und Tagesablauf', titleUz: 'Kundalik hayot va kun tartibi', description: 'Morgens aufstehen bis abends schlafen — Tagesablauf beschreiben.', icon: '⏰', isLocked: false },
  { id: 't17', level: 'A2', order: 2, titleDe: 'Reisen und Urlaub', titleUz: 'Sayohat va ta'til', description: 'Hotel buchen, Sehenswürdigkeiten besuchen, Urlaub planen.', icon: '✈️', isLocked: true },
  { id: 't18', level: 'A2', order: 3, titleDe: 'Restaurant und Café', titleUz: 'Restoran va kafe', description: 'Bestellen, bezahlen und über Essen sprechen.', icon: '☕', isLocked: true },
  { id: 't19', level: 'A2', order: 4, titleDe: 'Gesundheit und Arzt', titleUz: 'Sog'liq va shifokor', description: 'Symptome beschreiben, Termin machen, Rezept abholen.', icon: '💊', isLocked: true },
  { id: 't20', level: 'A2', order: 5, titleDe: 'Wohnung suchen', titleUz: 'Kvartira izlash', description: 'Anzeigen lesen, Besichtigungstermin machen, Mietvertrag.', icon: '🔑', isLocked: true },
  { id: 't21', level: 'A2', order: 6, titleDe: 'Kommunikation und Medien', titleUz: 'Muloqot va media', description: 'Telefonieren, E-Mails schreiben, soziale Medien nutzen.', icon: '📱', isLocked: true },
  { id: 't22', level: 'A2', order: 7, titleDe: 'Gefühle und Emotionen', titleUz: 'Hislar va tuyg'ular', description: 'Freude, Trauer, Überraschung — Emotionen ausdrücken.', icon: '😊', isLocked: true },
  { id: 't23', level: 'A2', order: 8, titleDe: 'Sport und Fitness', titleUz: 'Sport va fitnes', description: 'Sportarten, Fitnessstudio, gesunde Lebensweise.', icon: '🏋️', isLocked: true },
  { id: 't24', level: 'A2', order: 9, titleDe: 'Natur und Umwelt', titleUz: 'Tabiat va atrof-muhit', description: 'Wald, Berge, Flüsse — Natur beschreiben und schützen.', icon: '🌿', isLocked: true },
  { id: 't25', level: 'A2', order: 10, titleDe: 'Kultur und Feste', titleUz: 'Madaniyat va bayramlar', description: 'Weihnachten, Karneval und andere deutsche Feste.', icon: '🎄', isLocked: true },
  { id: 't26', level: 'A2', order: 11, titleDe: 'Bank und Finanzen', titleUz: 'Bank va moliya', description: 'Konto eröffnen, überweisen, Geld abheben.', icon: '🏦', isLocked: true },
  { id: 't27', level: 'A2', order: 12, titleDe: 'Post und Behörden', titleUz: 'Pochta va davlat idoralari', description: 'Pakete schicken, Formulare ausfüllen, Amt besuchen.', icon: '📬', isLocked: true },
  { id: 't28', level: 'A2', order: 13, titleDe: 'Küche und Kochen', titleUz: 'Oshxona va pishirish', description: 'Rezepte lesen und schreiben, Zutaten nennen.', icon: '👨‍🍳', isLocked: true },
  { id: 't29', level: 'A2', order: 14, titleDe: 'Musik und Kunst', titleUz: 'Musiqa va san'at', description: 'Musikinstrumente, Kunstrichtungen, Konzertbesuch.', icon: '🎵', isLocked: true },
  { id: 't30', level: 'A2', order: 15, titleDe: 'Vergangenheit erzählen', titleUz: 'O'tgan haqida gapirish', description: 'Perfekt und Präteritum — Erlebnisse erzählen.', icon: '📖', isLocked: true },

  // B1
  { id: 't31', level: 'B1', order: 1, titleDe: 'Arbeit und Bewerbung', titleUz: 'Ish va ariza', description: 'Lebenslauf schreiben, Vorstellungsgespräch, Arbeitssuche.', icon: '📋', isLocked: false },
  { id: 't32', level: 'B1', order: 2, titleDe: 'Ausbildung und Studium', titleUz: 'Ta'lim va o'qish', description: 'Deutsches Bildungssystem, Ausbildung vs. Studium.', icon: '🎓', isLocked: true },
  { id: 't33', level: 'B1', order: 3, titleDe: 'Gesellschaft und Politik', titleUz: 'Jamiyat va siyosat', description: 'Demokratie, Wahlen, aktuelle Themen diskutieren.', icon: '🏛️', isLocked: true },
  { id: 't34', level: 'B1', order: 4, titleDe: 'Technologie und Internet', titleUz: 'Texnologiya va internet', description: 'Digitale Welt, Apps, soziale Netzwerke auf Deutsch.', icon: '💻', isLocked: true },
  { id: 't35', level: 'B1', order: 5, titleDe: 'Umwelt und Klimawandel', titleUz: 'Atrof-muhit va iqlim o'zgarishi', description: 'Nachhaltigkeit, Recycling, globale Erwärmung.', icon: '🌍', isLocked: true },
  { id: 't36', level: 'B1', order: 6, titleDe: 'Medizin und Wissenschaft', titleUz: 'Tibbiyot va fan', description: 'Medizinische Fachbegriffe, Forschung, Innovation.', icon: '🔬', isLocked: true },
  { id: 't37', level: 'B1', order: 7, titleDe: 'Recht und Gesetz', titleUz: 'Qonun va huquq', description: 'Grundrechte, Verträge, Rechte und Pflichten in Deutschland.', icon: '⚖️', isLocked: true },
  { id: 't38', level: 'B1', order: 8, titleDe: 'Wirtschaft und Handel', titleUz: 'Iqtisodiyot va savdo', description: 'Grundbegriffe der Wirtschaft, Import/Export, Markt.', icon: '📈', isLocked: true },
  { id: 't39', level: 'B1', order: 9, titleDe: 'Geschichte Deutschlands', titleUz: 'Germaniya tarixi', description: 'Wichtige Ereignisse der deutschen Geschichte verstehen.', icon: '🏰', isLocked: true },
  { id: 't40', level: 'B1', order: 10, titleDe: 'Interkulturelle Kommunikation', titleUz: 'Madaniyatlararo muloqot', description: 'Kulturunterschiede, Missverständnisse vermeiden.', icon: '🌐', isLocked: true },
  { id: 't41', level: 'B1', order: 11, titleDe: 'Wohnungsprobleme lösen', titleUz: 'Uy-joy muammolarini hal qilish', description: 'Beschwerden beim Vermieter, Nebenkostenabrechnung.', icon: '🔧', isLocked: true },
  { id: 't42', level: 'B1', order: 12, titleDe: 'Medien und Nachrichten', titleUz: 'Media va yangiliklar', description: 'Zeitung lesen, Radio hören, Fake News erkennen.', icon: '📰', isLocked: true },
  { id: 't43', level: 'B1', order: 13, titleDe: 'Redewendungen und Idiome', titleUz: 'Iboralar va frazeologizmlar', description: 'Häufige deutsche Redewendungen verstehen und nutzen.', icon: '💬', isLocked: true },
  { id: 't44', level: 'B1', order: 14, titleDe: 'Literatur und Lesen', titleUz: 'Adabiyot va o'qish', description: 'Deutsche Autoren, Buchbesprechungen, Leseverstehen.', icon: '📚', isLocked: true },
  { id: 't45', level: 'B1', order: 15, titleDe: 'Meinung ausdrücken', titleUz: 'Fikr bildirish', description: 'Zustimmen, widersprechen, Argumente formulieren.', icon: '🗣️', isLocked: true },

  // B2
  { id: 't46', level: 'B2', order: 1, titleDe: 'Akademisches Schreiben', titleUz: 'Akademik yozuv', description: 'Hausarbeit, Essay, wissenschaftliche Texte strukturieren.', icon: '✍️', isLocked: false },
  { id: 't47', level: 'B2', order: 2, titleDe: 'Wirtschaftsdeutsch', titleUz: 'Biznes nemis tili', description: 'Geschäftsbriefe, Präsentationen, Verhandlungen auf Deutsch.', icon: '🤝', isLocked: true },
  { id: 't48', level: 'B2', order: 3, titleDe: 'Philosophie und Ethik', titleUz: 'Falsafa va etika', description: 'Kantische Ethik, moralische Fragen auf Deutsch diskutieren.', icon: '🧠', isLocked: true },
  { id: 't49', level: 'B2', order: 4, titleDe: 'Komplexe Grammatik', titleUz: 'Murakkab grammatika', description: 'Konjunktiv II, Passiv, Relativsätze und mehr.', icon: '📐', isLocked: true },
  { id: 't50', level: 'B2', order: 5, titleDe: 'Kultur und Identität', titleUz: 'Madaniyat va o'zlik', description: 'Kulturelle Identität, Heimat, Zugehörigkeit diskutieren.', icon: '🎭', isLocked: true },
  { id: 't51', level: 'B2', order: 6, titleDe: 'Energie und Zukunft', titleUz: 'Energiya va kelajak', description: 'Erneuerbare Energien, Energiewende, Zukunftspläne.', icon: '⚡', isLocked: true },
  { id: 't52', level: 'B2', order: 7, titleDe: 'Sprache und Kommunikation', titleUz: 'Til va muloqot', description: 'Sprachentwicklung, Mehrsprachigkeit, Sprachwandel.', icon: '🗺️', isLocked: true },
  { id: 't53', level: 'B2', order: 8, titleDe: 'Globalisierung', titleUz: 'Globallashuv', description: 'Vor- und Nachteile der Globalisierung analysieren.', icon: '🌏', isLocked: true },
  { id: 't54', level: 'B2', order: 9, titleDe: 'Architektur und Design', titleUz: 'Arxitektura va dizayn', description: 'Bauhausstil, moderne Architektur, Raumgestaltung.', icon: '🏗️', isLocked: true },
  { id: 't55', level: 'B2', order: 10, titleDe: 'Psychologie und Verhalten', titleUz: 'Psixologiya va xulq-atvor', description: 'Menschliches Verhalten, kognitive Prozesse, Motivation.', icon: '🧩', isLocked: true },
  { id: 't56', level: 'B2', order: 11, titleDe: 'Satirische Texte verstehen', titleUz: 'Satirik matnlarni tushunish', description: 'Ironie, Satire und Humor in deutschen Texten erkennen.', icon: '😏', isLocked: true },
  { id: 't57', level: 'B2', order: 12, titleDe: 'Rechtssystem und Bürgerrechte', titleUz: 'Huquq tizimi va fuqarolik huquqlari', description: 'Grundgesetz, Bürgerrechte und juristische Fachtexte.', icon: '🏛️', isLocked: true },
  { id: 't58', level: 'B2', order: 13, titleDe: 'Literarische Analyse', titleUz: 'Adabiy tahlil', description: 'Goethe, Schiller, Kafka — Klassiker analysieren.', icon: '📜', isLocked: true },
  { id: 't59', level: 'B2', order: 14, titleDe: 'Medizin und Biotechnologie', titleUz: 'Tibbiyot va biotexnologiya', description: 'Gentechnik, KI in der Medizin, ethische Fragen.', icon: '🧬', isLocked: true },
  { id: 't60', level: 'B2', order: 15, titleDe: 'Prüfungsvorbereitung TELC B2', titleUz: 'TELC B2 imtihoniga tayyorgarlik', description: 'Alle Prüfungsteile — Hören, Lesen, Schreiben, Sprechen.', icon: '🎯', isLocked: true },
];

export function getTopicsByLevel(level: string): Topic[] {
  return TOPICS.filter(t => t.level === level).sort((a, b) => a.order - b.order);
}

export function getAllLevels(): string[] {
  return ['A1', 'A2', 'B1', 'B2'];
}