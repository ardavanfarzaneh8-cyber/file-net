// curated dark-luxury real-estate imagery (Unsplash)
const U = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  villaPool: U('1600596542815-ffad4c1539a9'),
  villaNight: U('1613977257363-707ba9348227'),
  interiorWarm: U('1600607687939-ce8a6c25118c'),
  interiorDark: U('1600566753086-00f18fb6b3ea'),
  interiorLounge: U('1600210492486-724fe5c67fb0'),
  modernHouse: U('1512917774080-9991f1c4c750'),
  penthouse: U('1618221195710-dd6b41faaea6'),
  towerNight: U('1545324418-cc1a3fa10c00'),
  cityNight: U('1502672260266-1c1ef2d93688'),
  rooftop: U('1600585154340-be6161a56a0c'),
}

export type Deal = 'sale' | 'rent'

export type Property = {
  id: string
  code: string
  title: string
  address: string
  district: string
  phone: string
  owner: string
  deal: Deal
  price: string
  priceShort: string
  beds: number
  baths: number
  area: number
  parking: number
  rating: number
  tag?: 'hot' | 'special' | 'new'
  image: string
  gallery: string[]
  desc: string
}

export const properties: Property[] = [
  {
    id: 'p1',
    code: 'A-1042',
    title: 'پنت‌هاوس لوکس سعادت‌آباد',
    address: 'تهران، سعادت‌آباد، بلوار دریا',
    district: 'یک',
    phone: '0917 123 4567',
    owner: 'آقای رضایی',
    deal: 'sale',
    price: '۴٬۲۰۰٬۰۰۰٬۰۰۰ تومان',
    priceShort: '۴٫۲ میلیارد',
    beds: 3,
    baths: 2,
    area: 120,
    parking: 2,
    rating: 5,
    tag: 'hot',
    image: IMAGES.penthouse,
    gallery: [IMAGES.penthouse, IMAGES.interiorWarm, IMAGES.interiorLounge],
    desc: 'این پنت‌هاوس مدرن، طراحی معاصر را با آسایش دلنشین ترکیب کرده است. نور طبیعی فراوان، ویو کامل شهر و متریال درجه‌یک، فضایی گرم و لوکس برای زندگی حرفه‌ای فراهم می‌کند.',
  },
  {
    id: 'p2',
    code: 'A-1043',
    title: 'ویلای دوبلکس باغی مرداویج',
    address: 'اصفهان، مرداویج، خیابان سپاهان',
    district: 'سه',
    phone: '0912 987 6543',
    owner: 'خانم احمدی',
    deal: 'sale',
    price: '۹٬۸۰۰٬۰۰۰٬۰۰۰ تومان',
    priceShort: '۹٫۸ میلیارد',
    beds: 4,
    baths: 3,
    area: 320,
    parking: 3,
    rating: 5,
    tag: 'special',
    image: IMAGES.villaPool,
    gallery: [IMAGES.villaPool, IMAGES.villaNight, IMAGES.interiorDark],
    desc: 'ویلای دوبلکس باغی با استخر اختصاصی، فضای سبز گسترده و نورپردازی مدرن. ایده‌آل برای خانواده‌هایی که آرامش و تجمل را هم‌زمان می‌خواهند.',
  },
  {
    id: 'p3',
    code: 'A-1044',
    title: 'آپارتمان فول امکانات وکیل‌آباد',
    address: 'مشهد، بلوار وکیل‌آباد، نبش هفت',
    district: 'شش',
    phone: '0935 456 7890',
    owner: 'آقای کریمی',
    deal: 'rent',
    price: 'رهن ۸۰۰ میلیون / اجاره ۲۵ میلیون',
    priceShort: 'رهن ۸۰۰م',
    beds: 2,
    baths: 1,
    area: 85,
    parking: 1,
    rating: 4,
    tag: 'new',
    image: IMAGES.interiorLounge,
    gallery: [IMAGES.interiorLounge, IMAGES.interiorWarm, IMAGES.modernHouse],
    desc: 'آپارتمان نوساز با امکانات کامل، لابی مجلل، آسانسور و پارکینگ اختصاصی. موقعیت عالی نزدیک به مراکز خرید و دسترسی سریع.',
  },
  {
    id: 'p4',
    code: 'A-1045',
    title: 'خانه مدرن فرهنگ‌شهر',
    address: 'شیراز، فرهنگ‌شهر، خیابان گلستان',
    district: 'هفت',
    phone: '0938 222 1198',
    owner: 'آقای طاهری',
    deal: 'sale',
    price: '۶٬۱۰۰٬۰۰۰٬۰۰۰ تومان',
    priceShort: '۶٫۱ میلیارد',
    beds: 3,
    baths: 2,
    area: 165,
    parking: 2,
    rating: 4,
    image: IMAGES.modernHouse,
    gallery: [IMAGES.modernHouse, IMAGES.interiorDark, IMAGES.villaNight],
    desc: 'خانه‌ای با معماری مدرن، نمای شیک و فضای داخلی هوشمند. طراحی بهینه و نورگیری عالی در تمام ساعات روز.',
  },
  {
    id: 'p5',
    code: 'A-1046',
    title: 'پنت‌هاوس برج الماس ولیعصر',
    address: 'تبریز، ولیعصر، برج بلور',
    district: 'یک',
    phone: '0919 334 7712',
    owner: 'خانم موسوی',
    deal: 'sale',
    price: '۱۵٬۰۰۰٬۰۰۰٬۰۰۰ تومان',
    priceShort: '۱۵ میلیارد',
    beds: 4,
    baths: 4,
    area: 240,
    parking: 3,
    rating: 5,
    tag: 'hot',
    image: IMAGES.villaNight,
    gallery: [IMAGES.villaNight, IMAGES.penthouse, IMAGES.interiorLounge],
    desc: 'پنت‌هاوس فاخر با ویو ۱۸۰ درجه شهر، تراس اختصاصی و امکانات هوشمند کامل. یکی از خاص‌ترین فایل‌های موجود در منطقه.',
  },
]

export const propertyById = (id: string) => properties.find((p) => p.id === id)

export const districts = [
  'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه', 'ده', 'یازده', 'صدرا',
]

export const homeFilters = [
  { key: 'all', label: 'همه' },
  { key: 'special', label: 'پیشنهاد ویژه' },
  { key: 'sale', label: 'فروش' },
  { key: 'rent', label: 'رهن و اجاره' },
] as const

export type CustomerGroup = { id: string; name: string; count: number }

export const customerGroups: CustomerGroup[] = [
  { id: 'g1', name: 'مشتریان VIP', count: 24 },
  { id: 'g2', name: 'خریداران آپارتمان', count: 58 },
  { id: 'g3', name: 'متقاضیان ویلا', count: 17 },
  { id: 'g4', name: 'مستاجرین فعال', count: 41 },
  { id: 'g5', name: 'سرمایه‌گذاران', count: 9 },
  { id: 'g6', name: 'مشتریان معرفی‌شده', count: 33 },
]

export type LeadRequest = {
  id: string
  name: string
  initials: string
  need: string
  budget: string
  district: string
  time: string
  unread: boolean
}

export const requests: LeadRequest[] = [
  { id: 'r1', name: 'سارا محمدی', initials: 'س م', need: 'آپارتمان ۲ خوابه برای خرید', budget: 'تا ۴ میلیارد', district: 'منطقه یک', time: '۵ دقیقه پیش', unread: true },
  { id: 'r2', name: 'کامران یزدانی', initials: 'ک ی', need: 'ویلای باغی اجاره‌ای', budget: 'رهن تا ۱ میلیارد', district: 'قصرالدشت', time: '۲۰ دقیقه پیش', unread: true },
  { id: 'r3', name: 'نگار رستمی', initials: 'ن ر', need: 'پنت‌هاوس با ویو شهر', budget: 'تا ۱۲ میلیارد', district: 'چمران', time: '۱ ساعت پیش', unread: false },
  { id: 'r4', name: 'بهرام کاظمی', initials: 'ب ک', need: 'مغازه تجاری کف پارکینگ', budget: 'تا ۷ میلیارد', district: 'فرهنگ‌شهر', time: '۳ ساعت پیش', unread: false },
]

export type ChatMessage = { id: string; from: 'me' | 'them'; text: string; time: string }

export const chatThread: ChatMessage[] = [
  { id: 'm1', from: 'them', text: 'سلام، برای آپارتمان معالی‌آباد هنوز موجوده؟', time: '۱۴:۰۲' },
  { id: 'm2', from: 'me', text: 'سلام وقت بخیر 🙏 بله موجوده، ۱۲۰ متری با ویو کامل.', time: '۱۴:۰۳' },
  { id: 'm3', from: 'them', text: 'عالیه. امکان بازدید فردا عصر هست؟', time: '۱۴:۰۵' },
  { id: 'm4', from: 'me', text: 'بله حتماً. ساعت ۱۷ هماهنگ کنم براتون؟', time: '۱۴:۰۶' },
  { id: 'm5', from: 'them', text: 'بله ممنون میشم 🌹', time: '۱۴:۰۷' },
]

export type FileItem = {
  id: string
  code: string
  title: string
  owner: string
  phone: string
  address: string
  price: string
  image: string
}

export const fileItems: FileItem[] = [
  { id: 'f1', code: 'F-2201', title: 'آپارتمان ۱۱۰ متری', owner: 'آقای نجفی', phone: '0917 001 2233', address: 'شیراز، معالی‌آباد', price: '۳٫۸ میلیارد', image: IMAGES.interiorWarm },
  { id: 'f2', code: 'F-2202', title: 'زمین مسکونی ۲۰۰ متری', owner: 'خانم صادقی', phone: '0912 445 8890', address: 'شیراز، صدرا', price: '۲٫۱ میلیارد', image: IMAGES.modernHouse },
  { id: 'f3', code: 'F-2203', title: 'ویلای دوبلکس نوساز', owner: 'آقای حسینی', phone: '0935 667 1120', address: 'شیراز، چمران', price: '۷٫۵ میلیارد', image: IMAGES.villaPool },
  { id: 'f4', code: 'F-2204', title: 'آپارتمان ۷۰ متری', owner: 'آقای قاسمی', phone: '0938 990 4451', address: 'شیراز، زرهی', price: '۲٫۲ میلیارد', image: IMAGES.interiorLounge },
]

export const agent = {
  name: 'علی محمدی',
  phone: '0917 555 1234',
  role: 'مشاور املاک · فعال در سراسر ایران',
  license: 'کد عضویت: MSH-4021',
  bio: 'مشاور تخصصی خرید، فروش و اجارهٔ املاک لوکس در سراسر ایران. بیش از ۸ سال تجربه و ۱۸۰ معاملهٔ موفق.',
  stats: { files: 42, customers: 186, rating: 4.9, deals: 63 },
}

// ---------- public ads (aggregated from Divar / Sheypoor) ----------
export type AdSource = 'divar' | 'sheypoor'

export type PublicAd = {
  id: string
  source: AdSource
  title: string
  price: string
  area: number
  rooms: number
  address: string
  time: string
  image: string
  deal: Deal
}

export const sourceMeta: Record<AdSource, { label: string; color: string }> = {
  divar: { label: 'دیوار', color: '#A62626' },
  sheypoor: { label: 'شیپور', color: '#E86A17' },
}

export const publicAds: PublicAd[] = [
  { id: 'ad1', source: 'divar', title: 'آپارتمان ۹۵ متری نوساز', price: '۳٫۴ میلیارد', area: 95, rooms: 2, address: 'تهران، سعادت‌آباد', time: '۱۰ دقیقه پیش', image: IMAGES.interiorWarm, deal: 'sale' },
  { id: 'ad2', source: 'sheypoor', title: 'اجارهٔ سوئیت مبله کوتاه‌مدت', price: 'شبی ۱٫۲ م', area: 60, rooms: 1, address: 'کرج، عظیمیه', time: '۲۵ دقیقه پیش', image: IMAGES.interiorLounge, deal: 'rent' },
  { id: 'ad3', source: 'divar', title: 'ویلای حیاط‌دار کلنگی', price: '۵٫۹ میلیارد', area: 210, rooms: 3, address: 'اصفهان، خانه اصفهان', time: '۱ ساعت پیش', image: IMAGES.modernHouse, deal: 'sale' },
  { id: 'ad4', source: 'sheypoor', title: 'رهن کامل آپارتمان ۱۳۰ متری', price: 'رهن ۱٫۱ میلیارد', area: 130, rooms: 3, address: 'مشهد، هاشمیه', time: '۲ ساعت پیش', image: IMAGES.interiorDark, deal: 'rent' },
  { id: 'ad5', source: 'divar', title: 'پنت‌هاوس با ویو دریاچه', price: '۱۱ میلیارد', area: 195, rooms: 3, address: 'تبریز، ولیعصر', time: '۳ ساعت پیش', image: IMAGES.penthouse, deal: 'sale' },
  { id: 'ad6', source: 'sheypoor', title: 'مغازه ۴۵ متری بر اصلی', price: '۴٫۲ میلیارد', area: 45, rooms: 0, address: 'شیراز، ملاصدرا', time: '۵ ساعت پیش', image: IMAGES.villaNight, deal: 'sale' },
]

// ---------- building-services ads (shown on home) ----------
export type BuildingService = {
  id: string
  title: string
  provider: string
  phone: string
  category: string
  tag?: string
}

export const buildingServices: BuildingService[] = [
  { id: 's1', title: 'نقاشی و رنگ ساختمان', provider: 'استاد رحیمی', phone: '0917 220 4411', category: 'نقاشی', tag: 'ویژه' },
  { id: 's2', title: 'کابینت، کمد و MDF', provider: 'گروه دکوچوب', phone: '0912 553 7788', category: 'کابینت' },
  { id: 's3', title: 'تأسیسات برق و لوله‌کشی', provider: 'مهندس کاظمی', phone: '0935 118 9002', category: 'تأسیسات', tag: 'فوری' },
  { id: 's4', title: 'بازسازی و نوسازی کامل', provider: 'شرکت بنّاپلاس', phone: '0938 447 1120', category: 'بازسازی' },
  { id: 's5', title: 'کاشی، سرامیک و کف‌پوش', provider: 'استاد موسوی', phone: '0919 663 2255', category: 'کاشی‌کاری' },
]

// ---------- messages inbox ----------
export type Conversation = {
  id: string
  name: string
  initials: string
  last: string
  time: string
  unread: number
  online: boolean
}

export const conversations: Conversation[] = [
  { id: 'c1', name: 'سارا محمدی', initials: 'س م', last: 'بله ممنون میشم 🌹', time: '۱۴:۰۷', unread: 0, online: true },
  { id: 'c2', name: 'کامران یزدانی', initials: 'ک ی', last: 'قیمت نهایی چقدر می‌شه؟', time: '۱۳:۲۰', unread: 2, online: false },
  { id: 'c3', name: 'نگار رستمی', initials: 'ن ر', last: 'برای بازدید فردا هماهنگ کنیم', time: 'دیروز', unread: 0, online: true },
  { id: 'c4', name: 'بهرام کاظمی', initials: 'ب ک', last: 'ممنون بابت هماهنگی 🙏', time: 'دیروز', unread: 1, online: false },
]

// ---------- notifications ----------
export type AppNotification = {
  id: string
  type: 'request' | 'message' | 'ad' | 'system'
  title: string
  body: string
  time: string
  unread: boolean
}

export const notifications: AppNotification[] = [
  { id: 'n1', type: 'request', title: 'درخواست جدید', body: 'سارا محمدی به دنبال آپارتمان ۲ خوابه است', time: '۵ دقیقه پیش', unread: true },
  { id: 'n2', type: 'request', title: 'یادآوری بازدید', body: 'بازدید ملک با نگار رستمی فردا ساعت ۱۷ هماهنگ شده', time: '۱ ساعت پیش', unread: true },
  { id: 'n3', type: 'ad', title: 'آگهی جدید مرتبط', body: '۳ آگهی تازه از دیوار در منطقهٔ فعالیت شما', time: '۲ ساعت پیش', unread: true },
  { id: 'n4', type: 'message', title: 'پیام جدید', body: 'کامران یزدانی: قیمت نهایی چقدر می‌شه؟', time: '۳ ساعت پیش', unread: false },
  { id: 'n5', type: 'system', title: 'تأیید هویت', body: 'پروانهٔ اشتغال شما با موفقیت تأیید شد', time: 'دیروز', unread: false },
]
