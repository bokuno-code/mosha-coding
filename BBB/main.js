const btn = document.querySelector('.toggle-btn')
const header = document.querySelector('#header')

btn.addEventListener('click', ()=> {
  header.classList.toggle('open')
})

// 出入(entries)を監視するカメラ(IntersectionObserver)を
// 所持した観測者(observer)を定義
const observer = new IntersectionObserver((entries) => {
  // 出入(entries)のうちの要素1つ(entry)に対して
  entries.forEach(entry => {
    // その要素(entry)が画面内にいるなら？入ったら？
    if (entry.isIntersecting) {
      // 画面に入ったらクラスを付ける
      entry.target.classList.add('is-visible');
      // 要素の監視を終了する
      observer.unobserve(entry.target);
    }
  });
});
// 全ての .content 要素それぞれ(el)を監視対象にする
document.querySelectorAll('.content').forEach(el => observer.observe(el));