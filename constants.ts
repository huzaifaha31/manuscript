import { Remedy } from './types';

export const APP_NAME = "Malay Medical Manuscript Exploration";

// ==========================================
// CHANGE WEBSITE IMAGES HERE
// ==========================================

// 1. The main big image on the home page
export const HERO_IMAGE_URL = 'https://huzaitx.wordpress.com/wp-content/uploads/2025/12/untitled-design-8.png';

// 2. The background texture pattern
export const BACKGROUND_PATTERN_URL = 'https://www.transparenttextures.com/patterns/cream-paper.png';

// 3. Team Member Images (You can replace these URLs with actual photo links)
export const TEAM_MEMBERS = [
  {
    name: "Assoc. Prof. Dr. Nurulwahidah Fauzi",
    role: "Supervisor",
    // Placeholder image
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/1-1.png?w=1440" 
  },
  {
    name: "Ahmad Huzaifah Seri Buana",
    role: "Website Developer and Researcher",
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/5-1.png?w=1440"
  },
  {
    name: "Fakhriatul Ainnuha Hussin",
    role: "Researcher, Translator, Data Manager",
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/2-1.png?w=1440"
  },
  {
    name: "Intan Nur Sakinah Mohd Nor",
    role: "Researcher, Translator, Data Manager",
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/3-1.png?w=1440"
  },
  {
    name: "Nurul 'Asyirah Shamsuddin",
    role: "Researcher, Translator, Data Manager",
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/4-1.png?w=1440"
  }
];

// 4. Images for specific remedies
export const REMEDIES: Remedy[] = [
  {
    id: '1',
    diseaseName: 'Demam Kepialu (Typhoid Fever)',
    category: 'Fever',
    symptoms: 'High fever, headache, weakness, and stomach pain.',
    ingredients: [
      'Daun Setawar (Costus speciosus)',
      'Akar Cerita (Andrographis paniculata)',
      'Air Tepung Tawar'
    ],
    preparationMethod: 'Grind the leaves and roots together until fine. Mix with fresh rice water (Air Tepung Tawar).',
    methodOfUse: 'Apply the mixture as a cooling paste (bedak sejuk) over the entire body, focusing on the forehead and abdomen.',
    spiritualElements: 'Recite Surah Al-Fatiha 3 times and blow gently onto the mixture before application.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/SalmonellaTyphiFlagellarStain.jpg/500px-SalmonellaTyphiFlagellarStain.jpg',
  },
  {
    id: '2',
    diseaseName: 'Kayap (Shingles)',
    category: 'Skin',
    symptoms: 'Painful rash, blisters wrapping around the torso.',
    ingredients: [
      'Daun Gelenggang (Cassia alata)',
      'Kapur Barus (Camphor)',
      'Minyak Kelapa (Coconut Oil)'
    ],
    preparationMethod: 'Pound the Daun Gelenggang until lumpy. Mix with crushed camphor and coconut oil.',
    methodOfUse: 'Rub gently onto the affected skin area twice a day, morning and evening.',
    spiritualElements: 'Mantra: "Turun bisa, naik tawar, berkat doa La ilaha illallah".',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://www.mmgazette.com/wp-content/uploads/2019/02/5_herpes_zoster19_600_399_70.jpg',
  },
  {
    id: '3',
    diseaseName: 'Sakit Kepala (Migraine)',
    category: 'Internal',
    symptoms: 'Throbbing pain on one side of the head, sensitivity to light.',
    ingredients: [
      'Bunga Raya (Hibiscus)',
      'Limau Nipis (Key Lime)',
      'Air Embun (Dew Water)'
    ],
    preparationMethod: 'Crush the hibiscus flowers. Squeeze lime juice over them and leave in a bowl exposed to morning dew.',
    methodOfUse: 'Use the water to wet the head and place the crushed flowers as a poultice on the forehead.',
    spiritualElements: 'Recite Salawat upon the Prophet (PBUH) 7 times.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://www.amalmedik.com/wp-content/uploads/2021/08/Copy-of-Untitled-1.png',
  },
  {
    id: '4',
    diseaseName: 'Batuk Kering (Dry Cough)',
    category: 'Internal',
    symptoms: 'Persistent dry cough, sore throat.',
    ingredients: [
      'Madu Lebah (Honey)',
      'Halia Bara (Red Ginger)',
      'Lada Hitam (Black Pepper)'
    ],
    preparationMethod: 'Extract juice from ginger. Mix with honey and a pinch of crushed black pepper.',
    methodOfUse: 'Drink one tablespoon slowly, three times a day.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://www.yesdok.com/visual/slideshow/batuk-article-1638955110.jpg?w=1200',
  },
  {
    id: '5',
    diseaseName: 'Gangguan Semangat (Spiritual Disturbance)',
    category: 'Spiritual',
    symptoms: 'Restlessness, bad dreams, feeling of heaviness.',
    ingredients: [
      'Limau Purut (Kaffir Lime)',
      'Garam Kasar (Coarse Salt)',
      'Air Kolah Masjid (Mosque Well Water)'
    ],
    preparationMethod: 'Cut the limes into quarters (do not sever completely). Mix salt into the water.',
    methodOfUse: 'Perform a mandi bunga (flower bath) or rinse the body with the mixture just before Maghrib prayers.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    spiritualElements: 'Recite Ayat Al-Kursi 7 times while preparing the water.',
    imageUrl: 'https://psynthesispsicologia.es/wp-content/uploads/2025/05/Que-es-la-anhedonia-depresion.png',
  },
  {
    id: '6',
    diseaseName: 'Luka & Kudis (Wounds & Scabies)',
    category: 'Skin',
    symptoms: 'Open wounds or itchy scabs.',
    ingredients: [
      'Kunyit Hidup (Turmeric)',
      'Minyak Bijan (Sesame Oil)'
    ],
    preparationMethod: 'Pound the turmeric into a paste. Heat slightly with sesame oil.',
    methodOfUse: 'Apply directly to the wound while warm.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://medik-go.com/wp-content/uploads/2025/05/istockphoto-1284084384-612x612-1-612x375.jpg',
  },
  {
    id: '7',
    diseaseName: 'Sakit Gigi (Toothache)',
    category: 'Internal',
    symptoms: 'Sharp, throbbing pain in the tooth or jaw.',
    ingredients: [
      'Bunga Cengkih (Clove)',
      'Garam Bukit (Rock Salt)',
      'Bawang Putih (Garlic)'
    ],
    preparationMethod: 'Crush the clove and garlic into a paste. Mix with a pinch of salt.',
    methodOfUse: 'Place the paste directly into the cavity or on the gum of the aching tooth.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://neuroversiti.com/wp-content/uploads/2025/05/sakit-gigi.jpg',
  },
  {
    id: '8',
    diseaseName: 'Sakit Perut / Cirit-Birit (Diarrhea)',
    category: 'Internal',
    symptoms: 'Stomach cramping, loose stools.',
    ingredients: [
      'Pucuk Jambu Batu (Guava Shoot)',
      'Garam (Salt)'
    ],
    preparationMethod: 'Boil the guava shoots in water until the water turns brownish. Add a pinch of salt.',
    methodOfUse: 'Drink the decoction while warm.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://rsum.bandaacehkota.go.id/wp-content/uploads/2025/02/sakit-perut.webp',
  },
  {
    id: '9',
    diseaseName: 'Bisul (Boil)',
    category: 'Skin',
    symptoms: 'Painful, pus-filled bump under the skin.',
    ingredients: [
      'Beras (Raw Rice)',
      'Kunyit Hidup (Turmeric)',
      'Bawang Merah (Shallot)'
    ],
    preparationMethod: 'Soak rice, then grind with turmeric and shallot into a thick paste.',
    methodOfUse: 'Apply around the boil (avoiding the "eye" or center) to draw out pus.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://media.siraplimau.com/2023/03/Collage-Maker-31-Mar-2023-02-25-PM-2631.jpg',
  },
  {
    id: '10',
    diseaseName: 'Resdung (Sinusitis)',
    category: 'General',
    symptoms: 'Blocked nose, facial pain, frequent sneezing.',
    ingredients: [
      'Limau Nipis (Key Lime)',
      'Daun Pandan (Pandan Leaves)',
      'Bunga Cengkih (Cloves)'
    ],
    preparationMethod: 'Slice limes and pandan leaves. Boil them with cloves.',
    methodOfUse: 'Inhale the steam from the boiling mixture (Wap Resdung) with a towel over the head.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://ecentral.my/wp-content/uploads/2024/01/5efb5b45b0422-1024x683.jpeg',
  },
  {
    id: '11',
    diseaseName: 'Senggugut (Menstrual Pain)',
    category: 'Internal',
    symptoms: 'Severe cramps in the lower abdomen during menstruation.',
    ingredients: [
      'Halia (Ginger)',
      'Serai (Lemongrass)',
      'Gula Melaka (Palm Sugar)'
    ],
    preparationMethod: 'Boil crushed ginger and lemongrass. Sweeten with palm sugar.',
    methodOfUse: 'Drink warm once a day during the cycle.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://www.jamumakdara.com.my/wp-content/uploads/2022/12/Picture-1-2.jpg',
  },
  {
    id: '12',
    diseaseName: 'Sakit Mata (Eye Infection)',
    category: 'General',
    symptoms: 'Red, itchy, or watery eyes.',
    ingredients: [
      'Daun Sirih (Betel Leaf)',
      'Air Suam (Warm Water)'
    ],
    preparationMethod: 'Soak clean betel leaves in warm water for 15 minutes.',
    methodOfUse: 'Use the water to gently rinse the eyes or place the damp leaf over the eyelid.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://jec.co.id/storage/upload/ciri_ciri_sakit_mata.webp',
  },
  {
    id: '13',
    diseaseName: 'Demam Kura (Intermittent Fever)',
    category: 'Fever',
    symptoms: 'Chills and fever that come and go, enlarged spleen.',
    ingredients: [
      'Akar Tengkuk Biawak',
      'Lada Hitam (Black Pepper)',
      'Bawang Putih (Garlic)'
    ],
    preparationMethod: 'Boil the root with crushed pepper and garlic.',
    methodOfUse: 'Drink the decoction morning and night.',
    spiritualElements: 'Recite "Bismillah ash-Shafi" 7 times.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://klinikbamed.com/wp-content/uploads/2024/07/Seputar-Demam-pada-Anak-Orang-Tua-Wajib-Tahu-scaled.jpg',
  },
  {
    id: '14',
    diseaseName: 'Angin Ahmar (Stroke/Paralysis)',
    category: 'Internal',
    symptoms: 'Sudden numbness, weakness on one side of body.',
    ingredients: [
      'Minyak Zaitun (Olive Oil)',
      'Habbatussauda (Black Seed)',
      'Akar Kayu Manis (Cinnamon Root)'
    ],
    preparationMethod: 'Mix black seed oil with olive oil and crushed cinnamon root.',
    methodOfUse: 'Massage the affected limbs gently upwards.',
    spiritualElements: 'Recite Ayatul Kursi and the 3 Quls continuously during massage.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://www.flexphysiotherapy.my/wp-content/uploads/2021/12/strok-6.jpg',
  },
  {
    id: '15',
    diseaseName: 'Bisa Ular & Serangga (Snake/Insect Bite)',
    category: 'Skin',
    symptoms: 'Pain, swelling, and redness at the bite site.',
    ingredients: [
      'Asam Jawa (Tamarind)',
      'Garam (Salt)'
    ],
    preparationMethod: 'Mix tamarind pulp with salt to form a thick paste.',
    methodOfUse: 'Apply directly to the bite area to neutralize toxins.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://ai-care.id/photos/Healthpedia%20Kegawatdaruratan/61d6a274cff5e.jpg',
  },
  {
    id: '16',
    diseaseName: 'Gila Meroyan (Postpartum Depression)',
    category: 'Spiritual',
    symptoms: 'Emotional instability, crying without reason after childbirth.',
    ingredients: [
      'Bunga 7 Jenis (7 Types of Flowers)',
      'Limau Purut (Kaffir Lime)',
      'Air Mawar (Rose Water)'
    ],
    preparationMethod: 'Prepare a flower bath mixture with lime slices and rose water.',
    methodOfUse: 'Bathe at dusk (Asar time) for 3 consecutive days.',
    spiritualElements: 'Chant specific prayers for emotional restoration.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://www.mmgazette.com/wp-content/uploads/2016/03/post-natal-depression.jpg',
  },
  {
    id: '17',
    diseaseName: 'Sakit Pinggang (Backache)',
    category: 'General',
    symptoms: 'Stiffness or pain in the lower back.',
    ingredients: [
      'Akar Tongkat Ali',
      'Madu (Honey)'
    ],
    preparationMethod: 'Boil the root slices for 1 hour.',
    methodOfUse: 'Drink the water mixed with a spoonful of honey.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://i0.wp.com/ciputrahospital.com/wp-content/uploads/2024/11/shutterstock_1577217646-1.jpg?resize=1024%2C683&ssl=1',
  },
  {
    id: '18',
    diseaseName: 'Sawan Tangis (Excessive Crying in Infants)',
    category: 'Spiritual',
    symptoms: 'Baby cries uncontrollably, especially at night.',
    ingredients: [
      'Lada Hitam (Black Pepper)',
      'Minyak Celak',
      'Bawang Putih (Garlic)'
    ],
    preparationMethod: 'Wrap ingredients in a small black cloth (Bunjut).',
    methodOfUse: 'Pin securely to the baby\'s clothing or cradle.',
    spiritualElements: 'Recite "Al-Falaq" and "An-Nas" over the child.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://cdn.motherhood.com.my/wp-content/uploads/sites/2/2022/06/13182237/apa-itu-sawan-tangis.png',
  },
  {
    id: '19',
    diseaseName: 'Luka Bakar (Burn Wounds)',
    category: 'Skin',
    symptoms: 'Red, stinging skin from fire or hot water.',
    ingredients: [
      'Lidah Buaya (Aloe Vera)',
      'Putih Telur (Egg White)'
    ],
    preparationMethod: 'Extract the gel from Aloe Vera or beat an egg white.',
    methodOfUse: 'Apply the cooling gel/liquid gently over the burn.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1714136566/attached_image/luka-bakar-derajat-3-ketahui-penyebab-gejala-dan-penanganannya.jpg',
  },
  {
    id: '20',
    diseaseName: 'Asma / Lelah (Asthma)',
    category: 'Internal',
    symptoms: 'Difficulty breathing, wheezing.',
    ingredients: [
      'Hati Unta Kering (Dried Camel Liver)',
      'Madu (Honey)'
    ],
    preparationMethod: 'Roast the dried liver and grind into powder. Mix with honey.',
    methodOfUse: 'Swallow a teaspoon of the mixture daily.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://www.who.int/images/default-source/departments/ncds/chronic-respiratory-diseases/asthma-feature-story-boy.tmb-1200v.jpg?Culture=en&sfvrsn=4d9f2bee_6',
  },
  {
    id: '21',
    diseaseName: 'Panau (Tinea Versicolor)',
    category: 'Skin',
    symptoms: 'White or dark patches on the skin, itchy.',
    ingredients: [
      'Lengkuas (Galangal)',
      'Cuka (Vinegar)'
    ],
    preparationMethod: 'Cut the galangal and dip the cut end into vinegar.',
    methodOfUse: 'Rub the cut end vigorously onto the skin patches.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://cdn.remaja.my/2025/01/Panau.jpg.webp',
  },
  {
    id: '22',
    diseaseName: 'Beguk (Mumps)',
    category: 'Skin',
    symptoms: 'Swollen neck glands.',
    ingredients: [
      'Nila (Indigo Blue)',
      'Limau Nipis (Key Lime)'
    ],
    preparationMethod: 'Mix indigo powder with lime juice to make a blue paste.',
    methodOfUse: 'Paint the swollen area with the blue paste.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://harakahdaily.net/wp-content/uploads/2025/05/Beguk-1.jpg',
  },
  {
    id: '23',
    diseaseName: 'Sakit Telinga (Earache)',
    category: 'General',
    symptoms: 'Pain inside the ear.',
    ingredients: [
      'Bawang Putih (Garlic)',
      'Minyak Kelapa (Coconut Oil)'
    ],
    preparationMethod: 'Warm the oil with crushed garlic.',
    methodOfUse: 'Drop 1-2 drops of the cooled oil into the ear.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/06/24055527/Benarkah-Sakit-Telinga-Tanda-Mengalami-Stroke_.jpg',
  },
  {
    id: '24',
    diseaseName: 'Patah Tulang (Bone Fracture)',
    category: 'General',
    symptoms: 'Broken bone, severe pain, swelling.',
    ingredients: [
      'Kulit Kayu Manis (Cinnamon Bark)',
      'Kapur Makan (Limestone Paste)',
      'Putih Telur'
    ],
    preparationMethod: 'Grind bark, mix with lime paste and egg white to make a plaster.',
    methodOfUse: 'Apply around the set bone and wrap with cloth and splints.',
    spiritualElements: 'Recite "Ya Jabar" (The Restorer) 21 times.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1589778334/attached_image/patah-tulang.jpg',
  },
  {
    id: '25',
    diseaseName: 'Sembelit (Constipation)',
    category: 'Internal',
    symptoms: 'Difficulty passing stool.',
    ingredients: [
      'Betik Masak (Ripe Papaya)',
      'Air Suam (Warm Water)'
    ],
    preparationMethod: 'Eat ripe papaya and drink plenty of warm water.',
    methodOfUse: 'Consumue in the morning before breakfast.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://assets.hmetro.com.my/images/articles/sembelit01.jpg_1503158446.jpg',
  },
  {
    id: '26',
    diseaseName: 'Darah Tinggi (Hypertension)',
    category: 'Internal',
    symptoms: 'Headache, dizziness, neck stiffness.',
    ingredients: [
      'Belimbing Buluh (Bilimbi)',
      'Air'
    ],
    preparationMethod: 'Blend 3 bilimbis with a cup of water.',
    methodOfUse: 'Drink the juice once daily.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://blog.teleme.co/wp-content/uploads/2020/05/Hypertension-e1640663012899.jpg',
  },
  {
    id: '27',
    diseaseName: 'Kencing Manis (Diabetes)',
    category: 'Internal',
    symptoms: 'Frequent urination, excessive thirst.',
    ingredients: [
      'Peria Katak (Bitter Gourd)',
      'Teh Hijau (Green Tea)'
    ],
    preparationMethod: 'Slice bitter gourd and dry it. Boil as tea.',
    methodOfUse: 'Drink a cup daily.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://vitamin.my/wp-content/uploads/2023/08/petua-turunkan-gula-dalam-darah-1.png',
  },
  {
    id: '28',
    diseaseName: 'Lemah Tenaga Batin (Low Libido)',
    category: 'Internal',
    symptoms: 'Lack of energy and desire.',
    ingredients: [
      'Kacip Fatimah (Labisia pumila) - Women',
      'Tongkat Ali (Eurycoma longifolia) - Men'
    ],
    preparationMethod: 'Boil the whole plant (roots and leaves).',
    methodOfUse: 'Drink the extract regularly.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://askthescientists.com/wp-content/uploads/2018/04/AdobeStock_62125649.png',
  },
  {
    id: '29',
    diseaseName: 'Muntah Darah (Vomiting Blood)',
    category: 'Internal',
    symptoms: 'Vomiting blood due to internal injury or sorcery.',
    ingredients: [
      'Akar Senduduk',
      'Air Kelapa Muda'
    ],
    preparationMethod: 'Boil the root and mix with coconut water.',
    methodOfUse: 'Drink slowly to cool the internal organs.',
    spiritualElements: 'Recite verses of healing (Ayat Syifa).',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://fk.unair.ac.id/wp-content/uploads/2025/12/BAB-berdarah-3.jpg',
  },
  {
    id: '30',
    diseaseName: 'Seriawan (Mouth Ulcer)',
    category: 'Internal',
    symptoms: 'Painful white sores in the mouth.',
    ingredients: [
      'Saga (Abrus precatorius) Leaves',
      'Santan (Coconut Milk)'
    ],
    preparationMethod: 'Chew the Saga leaves or gargle with coconut milk.',
    methodOfUse: 'Apply twice daily.',
    sourceManuscript: 'MSS 2199, Kitab Tib',
    imageUrl: 'https://media.healthdirect.org.au/images/inline/original/mouth-sores-and-ulcers-5e0c8e.jpg',
  }
];
