// 27. На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

// https://www.instagram.com/hschool.official/

const str = "https://www.instagram.com/hschool.official.com".trim();
if (str.startsWith("http") && str.includes("/") && (str.endsWith(".com") || str.endsWith(".ru"))) {
    console.log(true);
} else {
    console.log(false);
}