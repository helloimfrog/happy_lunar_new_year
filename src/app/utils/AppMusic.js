const musicList = [
  "./music/ngay_tet_que_em.mp3",
  "./music/doan_xuan_ca.mp3",
  "./music/ngay_xuan_long_phung_sum_vay.mp3",
  "./music/tet_la_tet.mp3"
];

function getRandom() {
  return musicList[Math.floor(Math.random() * (musicList.length))];
}

export default {
  getRandom
}