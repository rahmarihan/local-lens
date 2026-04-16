import place1 from '@/assets/place-1.jpg';
import place2 from '@/assets/place-2.jpg';
import place3 from '@/assets/place-3.jpg';
import place4 from '@/assets/place-4.jpg';
import place5 from '@/assets/place-5.jpg';
import place6 from '@/assets/place-6.jpg';

export interface Place {
  id: string;
  name: string;
  nameAr?: string;
  category: string;
  image: string;
  rating: number;
  distance: string;
  description: string;
  address: string;
  hours: string;
  saved: boolean;
  tags: string[];
  reviews: number;
  localTips: string[];
  dishes?: { name: string; image: string }[];
}

export const categories = [
  { id: 'food', label: 'Food', emoji: '🍽️' },
  { id: 'cafes', label: 'Cafés', emoji: '☕' },
  { id: 'gems', label: 'Hidden Gems', emoji: '💎' },
  { id: 'art', label: 'Art', emoji: '🎨' },
  { id: 'nature', label: 'Nature', emoji: '🌿' },
  { id: 'nightlife', label: 'Nightlife', emoji: '🌙' },
];

export const places: Place[] = [
  {
    id: '1',
    name: 'Souq El-Attarine',
    nameAr: 'سوق العطارين',
    category: 'Food',
    image: place1,
    rating: 4.8,
    distance: '0.3 km',
    description: 'A bustling spice market dating back centuries. The aromas of cumin, saffron, and cardamom fill the narrow alleys as vendors share stories of their family traditions.',
    address: '15 Attarine St, Old Cairo',
    hours: '8:00 AM - 10:00 PM',
    saved: false,
    tags: ['authentic', 'lively', 'historic'],
    reviews: 234,
    localTips: ['Ask for the secret spice blend at stall #7', 'Visit early morning for the freshest herbs'],
  },
  {
    id: '2',
    name: 'Café Riche',
    nameAr: 'كافيه ريش',
    category: 'Cafés',
    image: place2,
    rating: 4.6,
    distance: '0.8 km',
    description: 'A legendary café where writers and artists have gathered for over a century. The vintage decor and perfect Turkish coffee create an unforgettable atmosphere.',
    address: '17 Talaat Harb St, Downtown',
    hours: '7:00 AM - 11:00 PM',
    saved: true,
    tags: ['cozy', 'historic', 'quiet'],
    reviews: 189,
    localTips: ['Try the sahlab in winter', 'Sit upstairs for the best view'],
  },
  {
    id: '3',
    name: 'The Forgotten Garden',
    nameAr: 'الحديقة المنسية',
    category: 'Hidden Gems',
    image: place3,
    rating: 4.9,
    distance: '1.2 km',
    description: 'An ancient garden hidden behind crumbling walls. Ivy-covered arches and stone pathways lead to a serene fountain — a true urban oasis.',
    address: 'Behind Al-Muizz St, Islamic Cairo',
    hours: '6:00 AM - 6:00 PM',
    saved: false,
    tags: ['quiet', 'historic', 'nature'],
    reviews: 67,
    localTips: ['The caretaker gives free tours at 10 AM', 'Best photo spot is by the fountain at sunset'],
  },
  {
    id: '4',
    name: 'Nile Terrace',
    nameAr: 'تراس النيل',
    category: 'Nightlife',
    image: place4,
    rating: 4.7,
    distance: '2.1 km',
    description: 'A rooftop restaurant with breathtaking views of the city at night. String lights and live oud music create the perfect evening ambiance.',
    address: '42 Corniche El-Nil, Zamalek',
    hours: '5:00 PM - 2:00 AM',
    saved: false,
    tags: ['lively', 'romantic', 'scenic'],
    reviews: 312,
    localTips: ['Reserve the corner table for the best skyline view', 'Thursday nights have live music'],
  },
  {
    id: '5',
    name: 'Haret El-Fannan',
    nameAr: 'حارة الفنان',
    category: 'Art',
    image: place5,
    rating: 4.5,
    distance: '0.5 km',
    description: 'A narrow alleyway transformed into an open-air gallery. Local artists paint new murals every month, making each visit unique.',
    address: 'Off Mohamed Mahmoud St',
    hours: 'Always open',
    saved: true,
    tags: ['artistic', 'lively', 'free'],
    reviews: 145,
    localTips: ['Check the community board for painting events', 'The best murals are around the second corner'],
  },
  {
    id: '6',
    name: 'Palm Garden Oasis',
    nameAr: 'واحة حديقة النخيل',
    category: 'Nature',
    image: place6,
    rating: 4.8,
    distance: '3.5 km',
    description: 'A lush garden hidden within the city, featuring winding stone paths, a small waterfall, and towering palm trees that provide cool shade.',
    address: 'El-Orman Garden, Giza',
    hours: '9:00 AM - 5:00 PM',
    saved: false,
    tags: ['quiet', 'nature', 'peaceful'],
    reviews: 98,
    localTips: ['Bring a book — the bench by the waterfall is perfect for reading', 'Bird watching is best early morning'],
  },
];

export const notifications = [
  { id: '1', type: 'nearby', icon: '📍', title: 'New place near you!', subtitle: 'Café Riche just got a new local tip', time: '2m ago' },
  { id: '2', type: 'chat', icon: '💬', title: 'Message from Yasmin', subtitle: 'Thanks for the recommendation!', time: '15m ago' },
  { id: '3', type: 'badge', icon: '🏆', title: 'Badge Earned!', subtitle: 'You earned "Verified Explorer"', time: '1h ago' },
  { id: '4', type: 'review', icon: '⭐', title: 'New review on your post', subtitle: 'Someone reviewed Souq El-Attarine', time: '3h ago' },
  { id: '5', type: 'nearby', icon: '🔥', title: 'Trending nearby', subtitle: 'Nile Terrace is trending this week', time: '5h ago' },
];

export const chatMessages = [
  { id: '1', sender: 'bot', text: "Hey there! 👋 I'm your AI local guide. Ask me anything about exploring the city like a true local!", time: '10:00 AM' },
  { id: '2', sender: 'user', text: "What's a good café near downtown?", time: '10:01 AM' },
  { id: '3', sender: 'bot', text: "Great choice! I'd recommend **Café Riche** on Talaat Harb St — it's a legendary spot with amazing Turkish coffee and a century of history. The sahlab is a must-try in winter! ☕", time: '10:01 AM' },
  { id: '4', sender: 'user', text: 'Any hidden gems for tonight?', time: '10:02 AM' },
  { id: '5', sender: 'bot', text: "For tonight, check out **Haret El-Fannan** — it's an open-air art alley that's magical after dark with its lit-up murals. Then head to **Nile Terrace** for rooftop views and live oud music 🌙✨", time: '10:02 AM' },
];

export const conversations = [
  { id: '1', name: 'Yasmin Ahmed', avatar: '👩🏽', lastMessage: 'Thanks for the tip!', time: '2m ago', unread: 2, placeContext: 'Café Riche' },
  { id: '2', name: 'Omar Hassan', avatar: '👨🏻', lastMessage: 'The spice blend was amazing', time: '1h ago', unread: 0, placeContext: 'Souq El-Attarine' },
  { id: '3', name: 'Nour Magdy', avatar: '👩🏻', lastMessage: 'See you at the garden!', time: '3h ago', unread: 1, placeContext: 'Palm Garden Oasis' },
];
