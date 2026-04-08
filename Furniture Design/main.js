// 指定のクラスをキャッチするメゾット
const btn = document.querySelector('.toggle-btn');
const header = document.querySelector('#header');
const mask = document.querySelector('#mask');

// イベントを追加するメゾット
btn.addEventListener('click', () => {
// クラスをオンオフするメゾット
  header.classList.toggle('open');
});

mask.addEventListener('click', () => {
// クラスを削除するメゾット
    header.classList.remove('open');
});

