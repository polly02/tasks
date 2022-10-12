// 3. Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const btn = document.querySelector(".btn")

function calculateDistance(quantity, distance, width) {
    const result = (distance * 100) * (quantity - 1) + width * (quantity - 2)
    return result
}

btn.addEventListener("click", () => {
    const quantity = document.querySelector(".quantity").value
    const distance = document.querySelector(".distance").value
    const width = document.querySelector(".width").value
    document.querySelector(".result").innerHTML = `${calculateDistance(quantity, distance, width)} сантиметров`
})