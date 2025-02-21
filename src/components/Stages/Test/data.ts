import imgJust from '../../../assets/images/test/just.jpg'
import imgKate from '../../../assets/images/test/kate.jpg'
import imgIl from '../../../assets/images/test/il.jpg'
import imgAn from '../../../assets/images/test/an.jpg'
import imgBoy from '../../../assets/images/test/boy.jpg'

enum peoples {
	il = 'li',
	an = 'an',
	boy = 'boy',
	kate = 'kate',
	just = 'just'
}

export const steps = [
	{
		label: "Насколько сильно ты любишь парней?",
		description: "",
		name: "quest1",
		variants: [{value: "no", label: "Не люблю", rights: [peoples.just, peoples.il]}, 
			{value: "boy", label: "Люблю только Бойчика", rights: [peoples.an, peoples.boy]}, 
			{value: "iamuzh", label: "У меня жена/муж", rights: [peoples.kate, peoples.il]}
		]
	},
	{
		label: "Много ли у тебя волос?",
		description: "",
		name: "quest2",
		variants: [{value: "no", label: "Нет", rights: [peoples.kate, peoples.il]}, 
			{value: "head_all", label: "Везде кроме головы", rights: [peoples.boy]}, 
			{value: "all", label: "Везде", rights: [peoples.just, peoples.an, peoples.boy]}
		]
	},
	{
		label: "Где ты какаешь?",
		description: "",
		name: "quest3",
		variants: [{value: "toilet", label: "Туалет", rights: [peoples.kate, peoples.il, peoples.just]}, 
			{value: "parasha", label: "Параша", rights: [peoples.an, peoples.boy]}, 
			{value: "box", label: "Коробка", rights: [peoples.boy]}
		]
	},
	{
		label: "Нравятся ли тебе машины?",
		description: "",
		name: "quest4",
		variants: [{value: "bmw", label: "Езжу на БэЭнВэ", rights: [peoples.il]}, 
			{value: "heli", label: "Меня доставляет вертолет на завод", rights: [peoples.boy]}, 
			{value: "kol", label: "Езжу на коляске", rights: [peoples.kate, peoples.an, peoples.just]}
		]
	},
	{
		label: "Как предпочитаешь тратить деньги?",
		description: "",
		name: "quest5",
		variants: [{value: "crypto", label: "Крипта", rights: [peoples.boy, peoples.an]}, 
			{value: "keratin", label: "Кератин", rights: [peoples.kate]}, 
			{value: "head", label: "Головка блока цилиндров", rights: [peoples.il]}
		]
	},
	{
		label: "Какое блюдо ты бы предпочел/предпочла?",
		description: "",
		name: "quest6",
		variants: [{value: "karbonara", label: "Карбонара", rights: [peoples.il]}, 
			{value: "chicken", label: "Куриные лапки", rights: [peoples.boy, peoples.an]}, 
			{value: "midii", label: "Мидии", rights: [peoples.kate, peoples.just]}
		]
	},
	{
		label: "Ты Алехандро Брусничкин?",
		description: "",
		name: "quest7",
		variants: [{value: "no", label: "Да", rights: [peoples.boy, peoples.boy, peoples.boy]}, 
			{value: "yes", label: "Нет", rights: [peoples.kate, peoples.just, peoples.il]}, 
			{value: "iam", label: "Я часть него", rights: [peoples.kate, peoples.just, peoples.an]}
		]
	},
	{
		label: "Кто для тебя Бойчик?",
		description: "",
		name: "quest8",
		variants: [{value: "live", label: "Жизнь", rights: [peoples.an, peoples.just]}, 
			{value: "brat", label: "Брат", rights: [peoples.il]}, 
			{value: "hoz", label: "Хозяин", rights: [peoples.kate, peoples.just, peoples.an]},
			{value: "muzh", label: "Муж", rights: [peoples.kate]}
		]
	},
];

export const resultAnswers = [
	{
		label: 'Ты - как Бойчик!',
		description: 'Но только хуже, потому что нет никого лучше...',
		img: imgBoy,
		code: 'boy',
		winner: false
	},
	{
		label: 'Ты - Катя!',
		description: 'Да, ты прикрытие и соседка по квартире бойчика...',
		img: imgKate,
		code: 'kate',
		winner: false
	},
	{
		label: 'Ты - Илюха!',
		description: 'Потому что нет ничего дороже дружбы...',
		img: imgIl,
		code: 'il',
		winner: false
	},
	{
		label: 'Ты - парень Бойчика!',
		description: 'Нет ничего прекраснее в этой жизни...',
		img: imgAn,
		code: 'an',
		winner: false
	},
	{
		label: 'Ты - (I)Just!',
		description: 'Ты почти так же верен бойчику как его парень',
		img: imgJust,
		code: 'just',
		winner: false
	},
]