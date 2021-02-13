const musicList = [
  "./music/ngay_tet_que_em.mp3",
  "./music/doan_xuan_ca.mp3",
  "./music/ngay_xuan_long_phung_sum_vay.mp3",
  "./music/tet_la_tet.mp3",
  "./music/xuan_da_ve_remix.mp3",
  "./music/chuc_tet.mp3",
  "./music/tet_nguyen_dan.mp3",
  "./music/xuan_phat_tai.mp3",
  "./music/chuyen_cu_bo_qua.mp3",
];

function getRandom() {
  return musicList[Math.floor(Math.random() * (musicList.length))];
}

export default {
  getRandom
}