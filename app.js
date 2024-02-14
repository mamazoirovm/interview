// 1.savol Javascriptda 8ta data  type bor. Primitiv 1) string, number, boolean, null, undefined, bigInt, Reference 2) object, symbol,
// 2.savol Javascript variable scopelar 3ta 1) Global scope 2) Module scope 3) Function scope 4) Blok scope
// 3.savol  Hoistingning asosiy xususiyati o’zgaruvchilarni e’lon qilishdan oldin ishlatishga imkon berishdir.
// 4.savol Type coercion bu tip o'grtirish bo'ladi bunda javascript o'zi avtomatik ravishda o'zgratishirishi mumkin yoki majburiy dasturchi o'zgartiradi
// 5.savol Event Loop funksiya bajarishda bo'lgan xabarlar (events) to'plandir. Har bir xabar, bitta amalga oshirilayotgan funksiya qatorni ifodalaydi. Xabarlar, amalga oshirilmayotgan boshqa bir hodisa yoki holat bo'lsihi mumkin, misol uchun timeout interval funcion DOM click va  asinxron hosisalarga aytiladi.
// 6.savol Passing by value and by reference bunda funcsiya ichida argumenti qiymatini olib yangi o'zgaruvchiga ko'chiradi va bu funksiyada ishlaydi, lekin tashqaridagi o'zgaruvchiga ta'sir qilmaydi,
function val(a) {
  a = 100;
}
// bu tepadagi argumentdan funcsiya ichida ishlaydi tashqiga ta'sir qilmaydi
let a = 50;
val(a);
console.log(a); // javobi: 50
// 7.savol Immediately invoked function expression shu darhol aniqlanishi bilanoq ishga tushadi
(() => {
  console.log("salom");
})();
// 8.savol Higher order funcion  (HOF),  funksiyalar, ular boshqa funksiyalarni argument sifatida qabul qilishi, funksiyani qaytarishi yoki ikkalasini ham bajarishi mumkin bo’lgan funksiyalarga hof deyiladi

// 9.savol This keyword ishlatilingan joyida ota objectini qaytaradi.

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    console.log(this.firstName + this.lastName);
  },
};

person.fullName()

// 10.savol Closure 

// 11.savol syntax Error bu yozishda xatolik kod grammatikasiga rioya qilmaslikdan chiqadi. logical error siz logikangizda kutgan natijangizni chiqmasligi g'oya oxiriga yetmasdan natija kutishdir

// 12.savol Memoization

// 13.savol Recursive function

// 19.savol em rem vw vh? em -  U o’zining elementining font-size’iga nisbatan o’lchov birliklarini belgilaydi. Misol uchun, 2em bu joriy shriftning 2 marta hajmi degan ma’noni anglatadi. bunda html 62.5 % fony-size beriladi

// 20. savol Overflow scroll chiqarish yoki ota kopmonentdan bola componentdagi ma'lu otni ksib tashlash

// 21.savol