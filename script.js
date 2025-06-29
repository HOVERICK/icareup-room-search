
let data = [];

fetch('data.json')
    .then(response => response.json())
    .then(json => {
        data = json;
    });

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchInput');
    const resultBox = document.getElementById('resultBox');

    input.addEventListener('input', () => {
        const name = input.value.trim();
        resultBox.innerHTML = '';
        if (!name) return;

        const matches = data.filter(entry => entry.이름 === name);
        if (matches.length === 0) {
            resultBox.innerHTML = '<p>일치하는 이름이 없습니다.</p>';
        } else {
            matches.forEach(entry => {
                resultBox.innerHTML += `
                    <div class="result">
                        <p><strong>이름:</strong> ${entry.이름}</p>
                        <p><strong>소속기관:</strong> ${entry.소속기관}</p>
                        <p><strong>조:</strong> ${entry.조}</p>
                        <p><strong>방번호:</strong> ${entry.방번호}</p>
                    </div>
                `;
            });
        }
    });
});
