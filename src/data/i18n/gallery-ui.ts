import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'In-game',
		title: 'In-game look',
		subtitle: 'ESP boxes, wallhack, aimbot FOV, skeleton ESP, and spike timer on Windows PC.',
		lead: 'See agents through walls, mark the spike, and tune soft aim in one license.',
		highlights: [
			{ title: 'ESP and wallhack', copy: 'See players through walls with boxes, names, and skeleton overlays.' },
			{ title: 'Radar and spike timer', copy: 'Track nearby threats and the spike before you push a site.' },
			{ title: 'Aimbot', copy: 'Use soft aim and aimbot controls tuned for Valorant matches on Windows PC.' },
		],
		updatesLabel: 'Updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'En partida',
		title: 'Aspecto en partida',
		subtitle: 'ESP, wallhack, aimbot y temporizador del spike en PC Windows.',
		lead: 'Ve agentes a través de las paredes, marca el spike y ajusta el soft aim en una licencia.',
		highlights: [
			{ title: 'ESP y wallhack', copy: 'Ve jugadores a través de las paredes con cajas, nombres y esqueletos.' },
			{ title: 'Radar y spike', copy: 'Detecta amenazas cercanas y el spike antes de empujar un sitio.' },
			{ title: 'Aimbot', copy: 'Usa soft aim y aimbot ajustados para partidas de Valorant en PC Windows.' },
		],
		updatesLabel: 'Actualizaciones',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'En jeu',
		title: 'Aperçu en jeu',
		subtitle: 'ESP, wallhack, aimbot et minuteur du spike sur PC Windows.',
		lead: 'Voyez les agents à travers les murs, marquez le spike et réglez le soft aim dans une licence.',
		highlights: [
			{ title: 'ESP et wallhack', copy: 'Voyez les joueurs à travers les murs avec des boîtes, des noms et des squelettes.' },
			{ title: 'Radar et spike', copy: 'Repérez les menaces proches et le spike avant de pousser un site.' },
			{ title: 'Aimbot', copy: 'Utilisez le soft aim et l’aimbot réglés pour Valorant sur PC Windows.' },
		],
		updatesLabel: 'Mises à jour',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'In-Game',
		title: 'In-Game-Ansicht',
		subtitle: 'ESP, Wallhack, Aimbot und Spike-Timer auf Windows-PC.',
		lead: 'Sieh Agenten durch Wände, markiere den Spike und stelle Soft Aim in einer Lizenz ein.',
		highlights: [
			{ title: 'ESP & Wallhack', copy: 'Sieh Spieler durch Wände mit Boxen, Namen und Skelett-Overlays.' },
			{ title: 'Radar & Spike', copy: 'Erkenne nahe Bedrohungen und den Spike, bevor du einen Site pusht.' },
			{ title: 'Aimbot', copy: 'Soft Aim und Aimbot, abgestimmt auf Valorant auf Windows-PC.' },
		],
		updatesLabel: 'Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Na partida',
		title: 'Visual in-game',
		subtitle: 'ESP, wallhack, aimbot e timer do spike no PC Windows.',
		lead: 'Veja agentes através das paredes, marque o spike e ajuste o soft aim em uma licença.',
		highlights: [
			{ title: 'ESP e wallhack', copy: 'Veja jogadores através das paredes com caixas, nomes e esqueletos.' },
			{ title: 'Radar e spike', copy: 'Acompanhe ameaças próximas e o spike antes de avançar um site.' },
			{ title: 'Aimbot', copy: 'Use soft aim e aimbot ajustados para partidas de Valorant no PC Windows.' },
		],
		updatesLabel: 'Atualizações',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'In partita',
		title: 'Aspetto in partita',
		subtitle: 'ESP, wallhack, aimbot e timer dello spike su PC Windows.',
		lead: 'Vedi gli agenti attraverso i muri, segna lo spike e regola il soft aim in una licenza.',
		highlights: [
			{ title: 'ESP e wallhack', copy: 'Vedi i giocatori attraverso i muri con box, nomi e scheletri.' },
			{ title: 'Radar e spike', copy: 'Traccia le minacce vicine e lo spike prima di spingere un sito.' },
			{ title: 'Aimbot', copy: 'Usa soft aim e aimbot regolati per le partite di Valorant su PC Windows.' },
		],
		updatesLabel: 'Aggiornamenti',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'In-game',
		title: 'In-game weergave',
		subtitle: 'ESP, wallhack, aimbot en spike-timer op Windows-pc.',
		lead: 'Zie agenten door muren, markeer de spike en stel soft aim in met één licentie.',
		highlights: [
			{ title: 'ESP en wallhack', copy: 'Zie spelers door muren met boxen, namen en skelet-overlays.' },
			{ title: 'Radar en spike', copy: 'Volg nabije dreigingen en de spike voordat je een site pusht.' },
			{ title: 'Aimbot', copy: 'Gebruik soft aim en aimbot afgestemd op Valorant op Windows-pc.' },
		],
		updatesLabel: 'Updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'W grze',
		title: 'Widok w grze',
		subtitle: 'ESP, wallhack, aimbot i timer spike na PC Windows.',
		lead: 'Widzisz agentów przez ściany, oznaczasz spike i ustawiasz soft aim w jednej licencji.',
		highlights: [
			{ title: 'ESP i wallhack', copy: 'Widzisz graczy przez ściany dzięki ramkom, nazwom i szkieletom.' },
			{ title: 'Radar i spike', copy: 'Śledź pobliskie zagrożenia i spike przed wejściem na site.' },
			{ title: 'Aimbot', copy: 'Używaj soft aim i aimbot dopasowanych do meczów Valorant na PC Windows.' },
		],
		updatesLabel: 'Aktualizacje',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'В игре',
		title: 'Вид в матче',
		subtitle: 'ESP, wallhack, aimbot и таймер спайка на Windows PC.',
		lead: 'Видьте агентов сквозь стены, отмечайте спайк и настраивайте soft aim в одной лицензии.',
		highlights: [
			{ title: 'ESP и wallhack', copy: 'Видьте игроков сквозь стены с рамками, именами и скелетами.' },
			{ title: 'Радар и спайк', copy: 'Отслеживайте угрозы рядом и спайк до того, как зайдёте на сайт.' },
			{ title: 'Aimbot', copy: 'Soft aim и aimbot под матчи Valorant на Windows PC.' },
		],
		updatesLabel: 'Обновления',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Oyunda',
		title: 'Oyun içi görünüm',
		subtitle: 'ESP, wallhack, aimbot ve spike zamanlayıcı — Windows PC.',
		lead: 'Duvarların ardından ajanları görün, spike’ı işaretleyin ve tek lisansla soft aim ayarlayın.',
		highlights: [
			{ title: 'ESP ve wallhack', copy: 'Kutular, isimler ve iskeletlerle oyuncuları duvarların ardından görün.' },
			{ title: 'Radar ve spike', copy: 'Site’e girmeden önce yakındaki tehditleri ve spike’ı takip edin.' },
			{ title: 'Aimbot', copy: 'Windows PC’de Valorant maçları için soft aim ve aimbot kullanın.' },
		],
		updatesLabel: 'Güncellemeler',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'داخل المباراة',
		title: 'المظهر داخل اللعبة',
		subtitle: 'ESP وwallhack وaimbot ومؤقت السبايك على Windows PC.',
		lead: 'شاهد العملاء عبر الجدران، حدد السبايك، واضبط soft aim في رخصة واحدة.',
		highlights: [
			{ title: 'ESP وwallhack', copy: 'شاهد اللاعبين عبر الجدران بصناديق وأسماء وهياكل.' },
			{ title: 'رادار وسبايك', copy: 'تتبع التهديدات القريبة والسبايك قبل دفع الموقع.' },
			{ title: 'Aimbot', copy: 'استخدم soft aim وaimbot لمباريات Valorant على Windows PC.' },
		],
		updatesLabel: 'التحديثات',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: '試合中',
		title: 'ゲーム内の見た目',
		subtitle: 'Windows PC向けのESP、ウォールハック、エイムボット、スパイクタイマー。',
		lead: '壁越しにエージェントを見て、スパイクをマークし、1ライセンスでソフトエイムを調整。',
		highlights: [
			{ title: 'ESPとウォールハック', copy: 'ボックス、名前、スケルトンで壁越しにプレイヤーを表示。' },
			{ title: 'レーダーとスパイク', copy: 'サイトを押す前に近くの脅威とスパイクを追跡。' },
			{ title: 'エイムボット', copy: 'Windows PCのValorant向けソフトエイムとエイムボット。' },
		],
		updatesLabel: '更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: '인게임',
		title: '인게임 화면',
		subtitle: 'Windows PC용 ESP, 월핵, 에임봇, 스파이크 타이머.',
		lead: '벽을 통해 요원을 보고, 스파이크를 표시하고, 한 라이선스로 소프트 에임을 맞춥니다.',
		highlights: [
			{ title: 'ESP와 월핵', copy: '박스, 이름, 스켈레톤으로 벽을 통해 플레이어를 봅니다.' },
			{ title: '레이더와 스파이크', copy: '사이트를 밀기 전에 근처 위협과 스파이크를 추적합니다.' },
			{ title: '에임봇', copy: 'Windows PC Valorant 경기에 맞춘 소프트 에임과 에임봇.' },
		],
		updatesLabel: '업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: '对局中',
		title: '游戏内画面',
		subtitle: 'Windows PC 上的 ESP、透视、自瞄和爆能器计时。',
		lead: '隔墙看见特工、标记爆能器，并在一份许可里调节软自瞄。',
		highlights: [
			{ title: 'ESP 与透视', copy: '用方框、名字和骨骼隔墙看见玩家。' },
			{ title: '雷达与爆能器', copy: '推点前跟踪附近威胁和爆能器。' },
			{ title: '自瞄', copy: '为 Windows PC 上的 Valorant 对局调节软自瞄和自瞄。' },
		],
		updatesLabel: '更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'मैच में',
		title: 'इन-गेम लुक',
		subtitle: 'Windows PC पर ESP, wallhack, aimbot और spike टाइमर।',
		lead: 'दीवारों के पार एजेंट देखें, spike मार्क करें, और एक लाइसेंस में soft aim सेट करें।',
		highlights: [
			{ title: 'ESP और wallhack', copy: 'बॉक्स, नाम और स्केलेटन से दीवारों के पार प्लेयर देखें।' },
			{ title: 'रेडार और spike', copy: 'साइट पुश से पहले पास के खतरे और spike ट्रैक करें।' },
			{ title: 'Aimbot', copy: 'Windows PC पर Valorant मैच के लिए soft aim और aimbot।' },
		],
		updatesLabel: 'अपडेट',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Dalam pertandingan',
		title: 'Tampilan in-game',
		subtitle: 'ESP, wallhack, aimbot, dan timer spike di PC Windows.',
		lead: 'Lihat agen tembus dinding, tandai spike, dan atur soft aim dalam satu lisensi.',
		highlights: [
			{ title: 'ESP dan wallhack', copy: 'Lihat pemain tembus dinding dengan kotak, nama, dan kerangka.' },
			{ title: 'Radar dan spike', copy: 'Lacak ancaman dekat dan spike sebelum push site.' },
			{ title: 'Aimbot', copy: 'Gunakan soft aim dan aimbot untuk pertandingan Valorant di PC Windows.' },
		],
		updatesLabel: 'Pembaruan',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'ในแมตช์',
		title: 'ภาพในเกม',
		subtitle: 'ESP, wallhack, aimbot และตัวจับเวลาสไปก์บน Windows PC',
		lead: 'เห็นเอเจนต์ทะลุกำแพง มาร์กสไปก์ และปรับ soft aim ในไลเซนส์เดียว',
		highlights: [
			{ title: 'ESP และ wallhack', copy: 'เห็นผู้เล่นทะลุกำแพงด้วยกล่อง ชื่อ และโครงกระดูก' },
			{ title: 'เรดาร์และสไปก์', copy: 'ติดตามภัยใกล้ตัวและสไปก์ก่อนดันไซต์' },
			{ title: 'Aimbot', copy: 'ใช้ soft aim และ aimbot สำหรับแมตช์ Valorant บน Windows PC' },
		],
		updatesLabel: 'อัปเดต',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Trong trận',
		title: 'Giao diện in-game',
		subtitle: 'ESP, wallhack, aimbot và bộ đếm spike trên PC Windows.',
		lead: 'Nhìn agent xuyên tường, đánh dấu spike và chỉnh soft aim trong một giấy phép.',
		highlights: [
			{ title: 'ESP và wallhack', copy: 'Nhìn người chơi xuyên tường với hộp, tên và skeleton.' },
			{ title: 'Radar và spike', copy: 'Theo dõi mối đe dọa gần và spike trước khi push site.' },
			{ title: 'Aimbot', copy: 'Dùng soft aim và aimbot cho trận Valorant trên PC Windows.' },
		],
		updatesLabel: 'Cập nhật',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'У матчі',
		title: 'Вигляд у грі',
		subtitle: 'ESP, wallhack, aimbot і таймер спайка на Windows PC.',
		lead: 'Бачте агентів крізь стіни, позначайте спайк і налаштовуйте soft aim в одній ліцензії.',
		highlights: [
			{ title: 'ESP і wallhack', copy: 'Бачте гравців крізь стіни з рамками, іменами та скелетами.' },
			{ title: 'Радар і спайк', copy: 'Відстежуйте близькі загрози та спайк перед заходом на сайт.' },
			{ title: 'Aimbot', copy: 'Soft aim і aimbot для матчів Valorant на Windows PC.' },
		],
		updatesLabel: 'Оновлення',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Ve hře',
		title: 'Pohled ve hře',
		subtitle: 'ESP, wallhack, aimbot a spike timer na Windows PC.',
		lead: 'Vidíte agenty skrz zdi, označíte spike a nastavíte soft aim v jedné licenci.',
		highlights: [
			{ title: 'ESP a wallhack', copy: 'Vidíte hráče skrz zdi s boxy, jmény a kostrami.' },
			{ title: 'Radar a spike', copy: 'Sledujte blízké hrozby a spike, než zatlačíte site.' },
			{ title: 'Aimbot', copy: 'Soft aim a aimbot pro zápasy Valorant na Windows PC.' },
		],
		updatesLabel: 'Aktualizace',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'În meci',
		title: 'Aspect in-game',
		subtitle: 'ESP, wallhack, aimbot și timer spike pe PC Windows.',
		lead: 'Vezi agenții prin ziduri, marchează spike-ul și reglează soft aim într-o licență.',
		highlights: [
			{ title: 'ESP și wallhack', copy: 'Vezi jucătorii prin ziduri cu box-uri, nume și schelete.' },
			{ title: 'Radar și spike', copy: 'Urmărește amenințările apropiate și spike-ul înainte de push pe site.' },
			{ title: 'Aimbot', copy: 'Folosește soft aim și aimbot pentru meciuri Valorant pe PC Windows.' },
		],
		updatesLabel: 'Actualizări',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'I matchen',
		title: 'In-game-vy',
		subtitle: 'ESP, wallhack, aimbot och spike-timer på Windows-PC.',
		lead: 'Se agenter genom väggar, markera spiken och justera soft aim i en licens.',
		highlights: [
			{ title: 'ESP och wallhack', copy: 'Se spelare genom väggar med boxar, namn och skelett.' },
			{ title: 'Radar och spike', copy: 'Följ närliggande hot och spiken innan du pushar en site.' },
			{ title: 'Aimbot', copy: 'Använd soft aim och aimbot för Valorant-matcher på Windows-PC.' },
		],
		updatesLabel: 'Uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
