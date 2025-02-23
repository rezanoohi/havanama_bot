// Open weather map weather status IDs
export function weatherID(id) {
    const weatherGifs = {
        // Thunderstorm
        200: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGN6aDR1OXp5b3lmaGZwZGxqZGtta2s4aG1kYnltcXNmNnBvbnhtMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8xY1YYpEZ4dws/giphy.gif", // Thunderstorm with light rain
        201: "https://media.giphy.com/media/DX1vOC6sDgBuU/giphy.gif?cid=ecf05e47pb937vo3i9evy1mf1r135t1j32bilow2k7yx22gy&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Thunderstorm with rain
        202: "https://media.giphy.com/media/xY51W4D1lPr9e/giphy.gif?cid=ecf05e47pb937vo3i9evy1mf1r135t1j32bilow2k7yx22gy&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Thunderstorm with heavy rain
        210: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzYxZzZ4Z2d2NnV1YjZ2emZucWlwam8za3Z5cWRtZHJxMGIyY2Z0OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjHB1EKuujDjYFWw/giphy.gif", // Light thunderstorm
        211: "https://media.giphy.com/media/vH1loeGlTekwg/giphy.gif?cid=ecf05e473o7uig1pyln7jys1cbupzveflbg58vhqljz3l3wa&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Thunderstorm
        212: "https://media.giphy.com/media/kGy7wqlKRZyiQ/giphy.gif?cid=790b7611c61g6xggv6uub6vzfnqipjo3kvyqdmdrq0b2cft8&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Heavy thunderstorm
        221: "https://media.giphy.com/media/HpRPizLQTbnIA/giphy.gif?cid=790b7611c61g6xggv6uub6vzfnqipjo3kvyqdmdrq0b2cft8&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Ragged thunderstorm
        230: "https://media.giphy.com/media/iN6lLmUb8exMI/giphy.gif?cid=790b7611tpisov1oszx2junlq1oxo8kfjyi0b7rdi6ikbwjh&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Thunderstorm with light drizzle
        231: "https://media.giphy.com/media/fAV73wP5H7xN6/giphy.gif?cid=790b7611tpisov1oszx2junlq1oxo8kfjyi0b7rdi6ikbwjh&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Thunderstorm with drizzle
        232: "https://media.giphy.com/media/AyRzCwNgzU9Cs9HtIk/giphy.gif?cid=ecf05e47obrqpn49v3sx2pndm4l9pdrpi1pnkdqgwb8eanu7&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Thunderstorm with heavy drizzle

        // Drizzle
        300: "https://media.giphy.com/media/l0IrIkq7Q3iRII0hy/giphy.gif?cid=790b7611gtqyuqdgjxoyo9063qt0awm2kzqmuuzx409viv47&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Light drizzle
        301: "https://media.giphy.com/media/IaaDBENPUVX20/giphy.gif?cid=ecf05e476eiqvrvzwacnvpp2dir5tqzx2b1q2qohdr967hx9&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Drizzle
        302: "https://media.giphy.com/media/tkMeNtj9FQYx2/giphy.gif?cid=ecf05e47uejq10ye6frtzpllue4bhmtw1guchi3abw12aq72&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Heavy drizzle
        310: "https://media.giphy.com/media/dI3D3BWfDub0Q/giphy.gif?cid=ecf05e476eiqvrvzwacnvpp2dir5tqzx2b1q2qohdr967hx9&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Light drizzle rain
        311: "https://media.giphy.com/media/xTcnT8PuKl5GBz26mk/giphy.gif?cid=ecf05e476eiqvrvzwacnvpp2dir5tqzx2b1q2qohdr967hx9&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Drizzle rain
        312: "https://media.giphy.com/media/Mgq7EMQUrhcvC/giphy.gif?cid=ecf05e476eiqvrvzwacnvpp2dir5tqzx2b1q2qohdr967hx9&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Heavy drizzle rain
        313: "https://media.giphy.com/media/3o7at59KDANvJrUDbG/giphy.gif?cid=ecf05e47nr923npl9lm9462i8m69gpr3kuhlcrav9oe80b72&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Shower rain and drizzle
        314: "https://media.giphy.com/media/PN23U6cVRWFFe/giphy.gif?cid=ecf05e476eiqvrvzwacnvpp2dir5tqzx2b1q2qohdr967hx9&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Heavy shower rain and drizzle
        321: "https://media.giphy.com/media/vLi3T5m3RH45y/giphy.gif?cid=ecf05e476eiqvrvzwacnvpp2dir5tqzx2b1q2qohdr967hx9&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Shower drizzle

        // Rain
        500: "https://media.giphy.com/media/exfSTanP4prYQ/giphy.gif?cid=ecf05e47thuknlhp3nw4uzb8ed419o0azit6h4132nyeyxqz&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Light rain
        501: "https://media.giphy.com/media/mB4emO0IilFTi/giphy.gif?cid=ecf05e47thuknlhp3nw4uzb8ed419o0azit6h4132nyeyxqz&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Moderate rain
        502: "https://media.giphy.com/media/l0Iy5fjHyedk9aDGU/giphy.gif?cid=ecf05e47thuknlhp3nw4uzb8ed419o0azit6h4132nyeyxqz&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Heavy rain
        503: "https://media.giphy.com/media/xTcnT45z6H5gxFYZZS/giphy.gif?cid=ecf05e47thuknlhp3nw4uzb8ed419o0azit6h4132nyeyxqz&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Very heavy rain
        504: "https://media.giphy.com/media/JjrDsvilNKgw0/giphy.gif?cid=ecf05e47xkbyiuh980wf0vhslf486xlns3vxbkw6insrx9tq&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Extreme rain
        511: "https://media.giphy.com/media/uHD7hQLqDtxqE/giphy.gif?cid=ecf05e47xkbyiuh980wf0vhslf486xlns3vxbkw6insrx9tq&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Freezing rain
        520: "https://media.giphy.com/media/dCWywr6PFNRp2f0oeF/giphy.gif?cid=ecf05e47xkbyiuh980wf0vhslf486xlns3vxbkw6insrx9tq&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Light shower rain
        521: "https://media.giphy.com/media/exfSTanP4prYQ/giphy.gif?cid=ecf05e47thuknlhp3nw4uzb8ed419o0azit6h4132nyeyxqz&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Shower rain
        522: "https://media.giphy.com/media/l0Iy5fjHyedk9aDGU/giphy.gif?cid=ecf05e47thuknlhp3nw4uzb8ed419o0azit6h4132nyeyxqz&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Heavy shower rain
        531: "https://media.giphy.com/media/UbocuGUmAAHDTOQAiH/giphy.gif?cid=ecf05e476nmok45xkzlaw5hdntja0jz8zul20y9kkoddfl9d&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Ragged shower rain

        // Snow
        600: "https://media.giphy.com/media/N7ZiLbtDr84Yo/giphy.gif?cid=ecf05e4764t8n5tb813dvpj4saak02rwv61h91r7v0qny2yd&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Light snow
        601: "https://media.giphy.com/media/E1v4GJ5LkcPHa/giphy.gif?cid=ecf05e4764t8n5tb813dvpj4saak02rwv61h91r7v0qny2yd&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Snow
        602: "https://media.giphy.com/media/7Bgpw7PwdxoDC/giphy.gif?cid=ecf05e4764t8n5tb813dvpj4saak02rwv61h91r7v0qny2yd&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Heavy snow
        611: "https://media.giphy.com/media/aJ7YvM8rrpAEU/giphy.gif?cid=ecf05e47jeygf06pf97mzaj4h6gn0tm2yk7mk8wntl6y6n60&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Sleet
        612: "https://media.giphy.com/media/aJ7YvM8rrpAEU/giphy.gif?cid=ecf05e47jeygf06pf97mzaj4h6gn0tm2yk7mk8wntl6y6n60&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Light shower sleet
        613: "https://media.giphy.com/media/aJ7YvM8rrpAEU/giphy.gif?cid=ecf05e47jeygf06pf97mzaj4h6gn0tm2yk7mk8wntl6y6n60&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Shower sleet
        615: "https://media.giphy.com/media/aJ7YvM8rrpAEU/giphy.gif?cid=ecf05e47jeygf06pf97mzaj4h6gn0tm2yk7mk8wntl6y6n60&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Light rain and snow
        616: "https://media.giphy.com/media/aJ7YvM8rrpAEU/giphy.gif?cid=ecf05e47jeygf06pf97mzaj4h6gn0tm2yk7mk8wntl6y6n60&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Rain and snow
        620: "https://media.giphy.com/media/OdOfTkw2uVADC/giphy.gif?cid=ecf05e479aal2g39abv3xd4zwjfqa13k7nu0f2zhn6mdivpf&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Light shower snow
        621: "https://media.giphy.com/media/rmuwjm1FLjxoQ/giphy.gif?cid=ecf05e479aal2g39abv3xd4zwjfqa13k7nu0f2zhn6mdivpf&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Shower snow
        622: "https://media.giphy.com/media/FoVi0LDjy1XS8/giphy.gif?cid=ecf05e479aal2g39abv3xd4zwjfqa13k7nu0f2zhn6mdivpf&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Heavy shower snow

        // Atmosphere (Fog, Mist, Smoke, etc.)
        701: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXBmN2Nka2hjNGNydHg4emVvZ3o4NnBueGxpMGd5eDE0ejJxOWxnNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3vRdC3KVT1vYZFDO/giphy.gif", // Mist
        711: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWV6emYwY3hjYnk4dTV1aTgyYTlzZXU4dDl3aDRtM29mMzAwcDZyNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZrkQwhGK9j0tLQkN0m/giphy.gif", // Smoke
        721: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWV6emYwY3hjYnk4dTV1aTgyYTlzZXU4dDl3aDRtM29mMzAwcDZyNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZrkQwhGK9j0tLQkN0m/giphy.gif", // Haze
        731: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWV0OHJhMnE5eXVhYzhodjAxeWpoY3Z0eW80NmxpMTNxd3VwdTBwZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tqtZDj5BqC0CY/giphy.gif", // Sand/dust whirls
        741: "https://media.giphy.com/media/KPtOFhewRGWl2/giphy.gif?cid=790b7611ttks0t6ru1qp7x2g2707sae0d9yayfr1z27k6kti&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Fog
        751: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWV6emYwY3hjYnk4dTV1aTgyYTlzZXU4dDl3aDRtM29mMzAwcDZyNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZrkQwhGK9j0tLQkN0m/giphy.gif", // Sand
        761: "https://media.giphy.com/media/l2u4v14vq0fleHv8Ys/giphy.gif?cid=790b7611oslyjaf9ut83jkz933xjye9vxz6jb2xa2ll48rrg&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Dust
        762: "https://media.giphy.com/media/HDlmcbSNcm2Fq/giphy.gif?cid=790b7611mkda87v7y6ikauhhqtj3xe4wq04etziresuk7fj8&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Volcanic ash
        771: "https://media.giphy.com/media/59FNDTTxEb9mgirpfm/giphy.gif?cid=ecf05e47jtvvyi0hkpjhzrauvnriuwu05ln061owk469dw1z&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Squalls
        781: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTdxYm4zcnR5bjk2aTJ6d2w4dmF2bDRuemVnOGhncGM3enRqaHI4NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MXvDhlmD0eB5qNvvjZ/giphy.gif", // Tornado

        // Clear & Clouds
        800: "https://media.giphy.com/media/0Styincf6K2tvfjb5Q/giphy.gif?cid=790b76113u6bh8d5znroeflwkdparsel5gdtvepyyxg6ho6k&ep=v1_gifs_search&rid=giphy.gif&ct=g", // Clear sky
        801: "https://media.giphy.com/media/3ohs4uJC1G9NNq03fi/giphy.gif?cid=ecf05e47qz7xc1vx28pwhyipvixr8i5ygcqrfh0nivm8qykg&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Few clouds (11-25%)
        802: "https://media.giphy.com/media/PIh4laWJlz9bq/giphy.gif?cid=ecf05e47edq9a0rx1blgk4o23aukkmd07niv7ndfnoopk5av&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Scattered clouds (25-50%)
        803: "https://media.giphy.com/media/xUPGcGHBbkkaJndU9a/giphy.gif?cid=ecf05e47zeqj9r51mpl4a73u4rkh4n5x502tsx5svnygez7m&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Broken clouds (51-84%)
        804: "https://media.giphy.com/media/CafqXRlBVvEqMchF1m/giphy.gif?cid=ecf05e47v67y3r2o9v87ufma2doyu5xl33e5bsi4zh4rq8bj&ep=v1_gifs_related&rid=giphy.gif&ct=g", // Overcast clouds (85-100%)
    };

    return weatherGifs[id] || "https://media.giphy.com/media/tnPxFTth7qoDiw1rnm/giphy.gif?cid=790b7611h2jvukpm5punwbku5yngxh253lgecy3b7z8t7c8v&ep=v1_gifs_search&rid=giphy.gif&ct=g";
}
