export default class EventerService {
  data = [
    {
      id: 176596,
      title: 'День студента и Татьянин день в Петербурге',
      slug: 'prazdnik-den-studenta-v-peterburge',
      categories: ['holiday', 'festival'],
      price: '',
      is_free: true,
      image:
        'https://kudago.com/media/images/event/24/13/24133a971445f93360f8f342ce5fc6c4.jpg',
      description:
        '25 января в Петербурге отмечают двойной праздник, посвящённый всем студентам и Татьянам. Самые интересные события дня вы найдёте в нашем гиде.'
    },
    {
      id: 176436,
      title: 'День снятия блокады Ленинграда',
      slug: 'aktsiya-75-let-bez-blokadyi',
      categories: [
        'stock',
        'meeting',
        'exhibition',
        'education',
        'quest',
        'festival',
        'tour',
        'entertainment'
      ],
      price: '',
      is_free: true,
      image:
        'https://kudago.com/media/images/event/77/ca/77ca630761fcfaddd8e9a1f5633f63f8.jpg',
      description:
        'В этом году празднуется 76-я годовщина с памятного для всех блокадников дня. Рассказываем, как в Санкт-Петербурге будут отмечать эту дату.'
    },
    {
      id: 184765,
      title: 'Волшебное семейное приключение от DRЁMA',
      slug: 'detyam-volshebnoe-semejnoe-priklyuchenie-ot-dryoma',
      categories: ['kids', 'holiday', 'other', 'entertainment'],
      price: 'от 15 000 до 20 000 рублей',
      is_free: false,
      image:
        'https://kudago.com/media/images/event/d4/05/d4056ca7644b06f39535cde9828107e8.jpg',
      description:
        'Современный мир парадоксален: в нём столько идей и вещей, что не должно быть проблем с тем, чтобы порадовать ребенка в Новый год, Рождество или на день рождения. Но зачастую родители сталкиваются с муками выбора и покупают подарок практически наугад, пытаясь соответствовать вкусам ребенка или мимолетным трендам. Есть и другой путь — закажите своему ребёнку уникальное приключение от DRЁMA, которое пройдёт с ним через всю жизнь и станет частью самых тёплых воспоминаний о семье.'
    },
    {
      id: 176280,
      title: 'Акция «Ёлки, палки и щепа»',
      slug: 'blagotvoritelnost-yolki-palki-i-schepa',
      categories: ['social-activity'],
      price: '',
      is_free: true,
      image:
        'https://kudago.com/media/images/event/bb/50/bb50740552ec7ceee7686d4cc266e76c.jpg',
      description:
        'Ничто так не создаёт ощущение праздника в доме, как живая ёлка. Но вот прошли новогодние каникулы, дерево уже выглядит не так здорово, как раньше, и встаёт вопрос — что же с ним делать? Самый этичный и экологичный вариант — отдать на переработку.'
    },
    {
      id: 185648,
      title: 'Спектакль «Дуб Майкла Крейг-Мартина» на площадке «Скороход»',
      slug: 'teatr-dub-majkla-krejg-martina',
      categories: ['theater'],
      price: '800 руб.',
      is_free: false,
      image:
        'https://kudago.com/media/images/event/aa/bf/aabff36e9c5a48b1ab50be0e460d1808.jpg',
      description:
        'Постановка, где в главной роли выступит один из зрителей, пройдёт на сцене «Скорохода». Действие объединит театральную условность и реальность. Режиссёром выступил обладатель премии «Прорыв» Илья Мощицкий.'
    },
    {
      id: 175885,
      title:
        'Спектакль «Аустерлиц» на Второй сцене БДТ (Каменноостровский театр)',
      slug: 'teatr-austerlits',
      categories: ['theater'],
      price: '500–1500 рублей',
      is_free: false,
      image:
        'https://kudago.com/media/images/event/c7/24/c7240518444c15208ee59806173af1f5.jpg',
      description:
        'Впервые на российской сцене воплощён роман немецкого писателя Винфрида Георга Зебальда, написанный в 2001 году.'
    },
    {
      id: 184813,
      title: 'Рождественская ярмарка на Манежной площади',
      slug: 'prazdnik-rozhdestvenskaya-yarmarka-na-manezhnoj-ploschadi',
      categories: ['holiday', 'yarmarki-razvlecheniya-yarmarki'],
      price: '',
      is_free: true,
      image:
        'https://kudago.com/media/images/event/bb/09/bb099c1fc9b22ddc8cc41fdf0a652bd9.jpg',
      description:
        'Сказочные домики с волшебными прилавками, яркие гирлянды, каток под открытым небом и зимние аттракционы украсили площадь и близлежащие улицы.'
    },
    {
      id: 185297,
      title: 'Топ главных городских открытий 2019 года в Петербурге',
      slug: 'prezentatsiya-top-glavnyih-otkryitij-2019-goda-v-peterburge',
      categories: ['presentation', 'entertainment'],
      price: '',
      is_free: false,
      image:
        'https://kudago.com/media/images/event/93/67/936767ae5752a84747ada312535307ac.jpg',
      description:
        'KudaGo подвёл итоги уходящего года и составил список самых значимых городских событий и полезных изменений, которыми Петербург порадовал жителей и туристов — от новых станций метро и общественных пространств до благотворительных проектов и экологических инициатив.'
    },
    {
      id: 182248,
      title: 'Выставка «Илья Репин. К 175-летию со дня рождения»',
      slug: 'vyistavka-ilya-repin-k-175-letiyu-so-dnya-rozhdeniya',
      categories: ['exhibition'],
      price: 'от 0 до 500 рублей',
      is_free: false,
      image:
        'https://kudago.com/media/images/event/10/14/1014614390dc494a313d90dc04890ab9.jpg',
      description:
        '«Бурлаки на Волге», «Садко», «Не ждали», «Запорожцы пишут письмо турецкому султану» — на грандиозной выставке Русского музея можно увидеть как канонические произведения Ильи Репина, так и малоизвестные работы.'
    },
    {
      id: 172266,
      title: 'Акция в клубе виртуальной реальности Futurum',
      slug: 'aktsiya-kluba-virtualnoj-realnosti-futurum',
      categories: ['stock', 'games', 'discount', 'entertainment'],
      price: 'от 3300 рублей',
      is_free: false,
      image:
        'https://kudago.com/media/images/event/5d/2c/5d2c0ff36ad5d58fb5f5c3bda353c3ce.jpg',
      description:
        'Думаете, что бы попробовать интересного? Не знаете, как удивить друзей? Головокружительные приключения по фантастическим мирам, сражения на космических станциях, дружеские турниры — в клубе виртуальной реальности Futurum можно оригинально развлечься.'
    }
  ];

  getEvents() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // reject(new Error('Oh shit! We working on that 🙄'));
        resolve(this.data);
      }, 700);
    });
  }
}
